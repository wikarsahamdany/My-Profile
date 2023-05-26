import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Loading from "./Loading";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi delay render dengan setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Ganti angka 2000 dengan waktu delay yang diinginkan (dalam milidetik)
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <div className="h-screen w-full bg-gray-200">
          <Loading />
        </div>
      ) : ( */}
        <>
          <Navbar />
          <div className="">
            <Outlet />
          </div>
        </>
      {/* )} */}
    </>
  );
}
