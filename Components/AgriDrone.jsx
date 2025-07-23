import React from "react";

const AgriDrone = () => {
  return (
    <div>
      <div className="pb-20">
        <div className="grid md:grid-flow-col  md:grid-rows-2 grid-flow-row grid-rows-none gap-4">
          {/* Image Section */}
          <div
            className="bg-center AgriDome bg-no-repeat bg-cover md:row-span-3"
            style={{
              backgroundImage: "url('/spicy.jpg')",
              height: "70vh",
              width: "max-content",
              minWidth: "100%",
            }}
          >
            <div className="relative h-full">
              <div className="absolute bottom-4 left-4 p-4 bg-black bg-opacity-40 rounded">
                <p className="uppercase font-bold text-white">spicy</p>
                <p className="text-sm opacity-75 font-semibold text-white">
                  Business Developer
                </p>
                <p className="text-xs opacity-75 text-white">2022</p>
              </div>
            </div>
          </div>



          {/* Text / Other content */}
          <div className="col-span-2 md:row-span-2 ">
            {/* Image Section */}
            <div
              className="bg-center AgriDome bg-no-repeat bg-cover md:row-span-3"
              style={{
                backgroundImage: "url('/drone.png')",
                height: "70vh",
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
        </div>
      </div>
    </div>
  );
};

export default AgriDrone;
