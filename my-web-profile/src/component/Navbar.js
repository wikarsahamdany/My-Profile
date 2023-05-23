import React from "react";

export default function Navbar() {
  return (
    <div className="navbar px-20 mt-5">
      <div className="flex-1">
        <button className=" text-4xl hover:text-5xl">Kars</button>
      </div>
      <div className="flex-none gap-5 min-w-40 px-20">
        <div className="text-xl hover:text-2xl">
          <button>Works</button>
        </div>
        <div className="text-xl hover:text-2xl">
          <button className="flex flex-row gap-1">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="githubLogo" width={25} />
            </div>
            <div>
            source
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
