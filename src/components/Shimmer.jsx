import React from 'react'

const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap justify-center m-2.5">
      {Array(8).fill("").map((_, index) => (
        <div
          key={index}
          className="shimmer-card  mx-3 my-2 rounded-4xl "
        >
          <div className="w-[300px] h-[230px] rounded-4xl bg-gray-200"></div>
          <div className="w-[220px] h-[20px] rounded-xl bg-gray-200 mt-4"></div>
          <div className="w-[180px] h-[20px] rounded-xl bg-gray-200 mt-3"></div>
        </div>
      ))}
    </div>
    )
}

export default Shimmer
