import React from 'react'

const LeftLine = () => {
  return (
    <div>
       {/* Vertical line at right end */}
      <span className="absolute"
        style={{
          left: 20,
          top: 0,
          bottom: 0,
          width: "1px",
          background: "#000000",
        }}
       
      ></span>
    </div>
  )
}

export default LeftLine
