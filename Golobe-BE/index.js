import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import fetchUser from './middlewares/fetchUser.js'
import multer from "multer";

//Connection to database
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/golobe");
  console.log("db connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch((err) => console.log(err));

//schema creation for user data
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  password: String,
  address: String,
  dateOfBirth: Date, // Store date of birth as a Date object
  profilePicture: {
    type: String, // Store the path to the uploaded profile picture
    default: "",
  },
});

//model creation in mongodb
const User = mongoose.model("User", userSchema);


// Configure Multer for file uploads (adjust storage options as needed)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Change upload directory if necessary
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.originalname.split('.').pop());
  },
});

const upload = multer({ storage });


// const corsOpts = {
//   origin: "*",
//   header: "Authorization"
// }

//creating server with express
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());
server.use('/uploads', express.static('uploads'))

//getting data from frontend and assigning it to user model's variables
server.post("/api/golobe", upload.single("profilePicture"), async (req, res) => {
  try {
    let { firstName, lastName, email, password, phoneNumber, address, dateOfBirth } = req.body;
    if (!(firstName && lastName && email && password && phoneNumber)) {
      res.status(400).send("All fields are required");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(401).send("The user with this email already exists");
    }

    const myEncPassword = await bcrypt.hash(password, 10);


    // Handle potential upload errors
    if (req.fileValidationError) {
      return res.status(400).send(req.fileValidationError);
    } else if (!req.file) {
      return res.status(400).send("Please select a profile picture");
    }

    let user = await User.create({
      firstName,
      lastName,
      email,
      password: myEncPassword,
      phoneNumber,
      address,
      dateOfBirth: new Date(dateOfBirth), // Parse date string to Date object
      profilePicture: `http://localhost:8080/${req.file.path}`,
    });

    const jwt = jsonwebtoken;
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "shhhh"
    );
    user.token = token;

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});


//Login api using Post method
server.post("/api/golobe/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("send all data");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: false,
        message:"user not found"
      });
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const jwt = jsonwebtoken;
      const token = jwt.sign(
        {
          id: user._id,
        },
        "shhhh"
      );
      user.token = token;
      console.log(user.token);

      const options = {
        httpOnly: true,
      };
      res.status(200).json({
        success: true,
        token,
        user,
      });
    }
  } catch (err) {
    console.log(err);
  }
});


//Getting logged in user details using POST: 'api/golobe/getUser'. Login required
server.get('/api/golobe/get-user',fetchUser, async(req,res)=>{

  try {
    const userId = req.user;
    const user = await User.findById(userId.id)
    console.log(user,'ppppppppppppppppppppp')
    return res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    console.log(error)
  }
})


//setting port number and listening on port 8080
server.listen(8080, () => {
  console.log("server started");
});
