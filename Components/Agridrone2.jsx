import React from "react";

const Agridrone2 = () => {
  return (
    <div>
      {/* Image Section */}
      <div
        className="bg-center AgriDome bg-no-repeat bg-cover md:row-span-3"
        style={{
          backgroundImage: "url('/drone.png')",
          height: "450px",
          width: "max-content",
          minWidth: "77%",
        }}
      >
        <div className=" ">
          <div className=" p-4 bg-black bg-opacity-40 w-fit rounded">
            <p className="uppercase font-bold text-white">agridrone tech</p>
            <p className="text-sm opacity-75 font-semibold text-white">
              Business Product, and Growth lead
            </p>
            <p className="text-xs opacity-75 text-white">2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agridrone2;
