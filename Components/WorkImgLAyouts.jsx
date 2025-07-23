import React from 'react'
import WorkAnime from "./WorkAnime";
import WorkTexts from "./WorkTexts";

const WorkImgLAyouts = () => {
  return (
    <div>
      {/* Show image right under title on small screens */}
          <div className="block md:hidden mt-6 mb-4">
            <WorkAnime />
          </div>

          {/* Layout for medium and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative mt-4 md:mt-10">
            {/* Image on left (sticky for large) */}
            <div className="hidden md:flex h-screen sticky top-0 justify-center items-center z-10 bg-white">
              <WorkAnime />
            </div>

            {/* Text always scrolls */}
            <div className="relative hidden md:block z-0">
              <WorkTexts />
            </div>
          </div>

          {/* Text always scrolls */}
          <div
            className="relative z-0 w-[90%] bg-cover md:hidden bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/third.png')" }}
          >
            <div className="bg-white/80  p-4 md:p-8">
              <WorkTexts />
            </div>
          </div>
    </div>
  )
}

export default WorkImgLAyouts
