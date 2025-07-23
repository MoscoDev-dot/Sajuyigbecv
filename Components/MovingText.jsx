import React from "react";

const MovingText = () => {
  return (
    <>
      <div>
        <hr className="mt-0" />
        <hr className="mt-3" />
      </div>
      <div className="overflow-hidden my-3">
        <div className="flex animate-marquee whitespace-nowrap">
          <p className="ps-12 uppercase font-semibold opacity-50">
            critical thinker
          </p>
          <p className="ps-12 uppercase font-semibold opacity-50">
            research & resourcefulness
          </p>
          <p className="ps-12 uppercase font-semibold opacity-50">
            high performer
          </p>
          <p className="ps-12 uppercase font-semibold opacity-50">
            result oriented
          </p>
          <p className="ps-12 uppercase font-semibold opacity-50">
            organization & well detailed
          </p>
          <p className="ps-12 uppercase font-semibold opacity-50">proactive</p>
        </div>
      </div>
      <div>
        <hr className="mt-3" />
        <hr className="mt-3" />
      </div>
    </>
  );
};

export default MovingText;