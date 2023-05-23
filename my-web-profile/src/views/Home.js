import React from "react";
import Loading from "../component/Loading";
import DisplayCard from "../component/DisplayCard";

export default function Home() {
  return (
    <div className="mt-10 w-full flex">
      <div className="text-2xl w-6/12">
        Hi! I am <br />
        <span className="text-8xl">Wikarsa Hamdany,</span>
        <br />
        <span className="text-5xl">
          a frontend developer and <br /> technology enthusiast.
        </span>
        <br />
        <span className="text-lg">
          I believe that with imagination and coding, we can create amazing digital experiences. With my combination of design and programming skills, I strive to deliver innovative and intuitive solutions to users. I am ready to tackle new
          challenges and continually evolve in this ever-changing industry. Let's explore the digital world together!
        </span>
      </div>
      <div className="w-6/12 flex justify-center">
        <DisplayCard/>
      </div>
    </div>
  );
}
