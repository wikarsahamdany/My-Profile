import React from "react";
import DisplayCard from "../component/DisplayCard";
import MyJourney from "../component/MyJourney";

export default function Home() {
  return (
    <div className="flex flex-col xl:gap-32">
      <div className="mt-10 w-fit xl:flex xl:mx-20 mx-4">
        <div className="xl:text-2xl xl:w-6/12" data-aos="fade-in">
          Hi! I am <br />
          <span className="xl:text-8xl text-7xl" data-aos="zoom-out" data-aos-delay="200">
            Wikarsa Hamdany,
          </span>
          <br />
          <span className="xl:text-5xl text-2xl" data-aos="zoom-in" data-aos-delay="500">
            a frontend developer and <br /> technology enthusiast.
          </span>
          <br />
          <span className="xl:text-lg text-sm" data-aos-delay="600" data-aos="fade-left">
            I believe that with imagination and coding, we can create amazing digital experiences. With my combination of design and programming skills, I strive to deliver innovative and intuitive solutions to users. I am ready to tackle
            new challenges and continually evolve in this ever-changing industry. Let's explore the digital world together!
          </span>
        </div>
        {/* <div className="xl:w-6/12 xl:flex xl:my-0 my-20 xl:justify-end" data-aos="zoom-in">
          <DisplayCard />
        </div> */}
      </div>
      <div>
        <MyJourney />
      </div>
    </div>
  );
}
