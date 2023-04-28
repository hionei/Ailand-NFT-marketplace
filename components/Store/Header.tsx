import React from 'react'

const Header = () => {
  return (
    <>
      <div className="px-4 flex justify-between flex-col md:flex-row gap-4">
        <div className="flex justify-between flex-row md:flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div>
              <p className="text-md sm:text-2xl text-[#AB7BFF] whitespace-nowrap">
                Amber #1223
              </p>
              <p className="text-sm sm:text-lg text-white">1 of 1 available</p>
            </div>
            <img src="/icons/scan-icon.svg" alt="" className="w-6 md:w-10" />
          </div>

          <div className="text-[#441F84] max-w-[200px] text-[13px] sm:text-md text-right md:text-left">
            Amber Metaverse, Skin, Newest, Blue
          </div>
        </div>

        <div className="flex justify-between  flex-col gap-4">
          <div className="flex justify-between flex-row md:flex-col items-end">
            <p className="text-2xl text-[#AB7BFF]">Price</p>
            <p className="text-3xl text-white">1 235 $</p>
          </div>
          <button className="bg-[#FC0FF54D] text-white border-0 py-4 px-5 sm:px-20 uppercase rounded-full text-[12px] sm:text-[18px]">
            Buy
            <p className="text-[#D1D1D1] mt-1 block md:hidden">
              Balance ≈ 0.00 $
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
