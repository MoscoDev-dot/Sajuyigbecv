import React from "react";
import Image from "next/image";
const Faith = () => {
  return (
    <div className="flex">
      <div className="pt-6">
        <Image src="/logo.png" alt="Mr.Faith"  width={55} height={55} />
      </div>
      <div>
        <p className="text-[11px] pt-6 font-bold">
          FAITH <br /> OLANIYI
        </p>
      </div>
    </div>
  );
};

export default Faith;
