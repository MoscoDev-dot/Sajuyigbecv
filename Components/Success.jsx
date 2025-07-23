import React from 'react';
import Image from 'next/image';

const Success = ({ text, link }) => {
  return (
    <div className="flex pb-10 mt-20">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center cursor-pointer group"
      >
        <p className="uppercase md:text-lg text-[10px] lg:text-start text-center opacity-75 group-hover:underline">
          {text}
        </p>
        <Image
          src="/arrow-icon.svg"
          alt="arrow icon"
          width={30}
          height={20}
          className="ms-4 md:ms-7 transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

export default Success;
