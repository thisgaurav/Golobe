import React from 'react'
import { Carousel } from '@material-tailwind/react'
function SliderLogin() {
  return (
    <div>
      <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="./images/login.jpg"
        alt="image 1"
        className="w-[486.419px] ;
        h-[750px] rounded-xl"
      />
      <img
        src="./images/welcome2.jpg"
        alt="image 2"
        className="w-[486.419px] ;
        h-[750px] rounded-xl"
      />
    </Carousel>
    </div>
  )
}

export default SliderLogin
