import React from "react";

export default function Navbar() {
  return (
    <div className="flex xl:px-20 px-5 mt-5 ">
      <div className="flex-1">
        <button className=" text-4xl hover:text-5xl" data-aos="fade-in" data-aos-duration="100">Kars</button>
      </div>
      <div className="flex gap-5 min-w-40 px-20">
        <div className="text-xl hover:text-2xl">
          <button data-aos="zoom-in" data-aos-duration="100" data-aos-delay="300">Works</button>
        </div>
        <div className="text-xl hover:text-2xl">
          <div className=" gap-1" data-aos="zoom-in" data-aos-duration="100" data-aos-delay="500">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="githubLogo" width={25} />
            </div>
            <div>
            source
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
