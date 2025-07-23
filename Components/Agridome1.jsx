import React from "react";

const Agridome1 = () => {
  return (
    <div>
      {/* Image Section */}
      <div
        className="bg-center AgriDome bg-no-repeat bg-cover md:row-span-3"
        style={{
          backgroundImage: "url('/spicy.jpg')",
          height: "450px",
          width: "max-content",
          minWidth: "100%",
        }}
      >
        <div className="relative ">
          <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-40 rounded">
            <p className="uppercase font-bold text-white">spicy</p>
            <p className="text-sm opacity-75 font-semibold text-white">
              Business Developer
            </p>
            <p className="text-xs opacity-75 text-white">2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agridome1;
