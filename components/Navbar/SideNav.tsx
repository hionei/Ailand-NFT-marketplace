import React from 'react'
import Button from '@mui/material/Button'

const SideNav = (props: any) => {
  return (
    <>
      <div className="fixed bottom-[6rem] lg:hidden z-50">
        <div className="flex gap-3  w-screen justify-center">
          <Button
            variant="contained"
            className="flex gap-2 bg-violet-light py-3 rounded-[30px] px-6 capitalize"
            onClick={() => {
              props.openFilters(true)
            }}
          >
            <img src="/icons/filter-icon.svg" alt="" />
            <span> Filter</span>
          </Button>
          <Button
            variant="contained"
            className="flex gap-2 bg-violet-light py-3 rounded-[30px] px-6 capitalize"
            onClick={() => {}}
          >
            <img src="/icons/hamburger-icon.svg" alt="" />
            <span> Max price</span>
          </Button>
        </div>
      </div>
      <div
        className={`bg-violet-dark w-full lg:w-fit h-full ${props.className}`}
      >
        <a href="#" className="text-[#D1D1D1] flex items-center flex-col p-4">
          <img src="/icons/fire-icon.svg" alt="" />
          <p className="leading-6 whitespace-nowrap">For you</p>
        </a>
        <a href="#" className="text-[#D1D1D1] flex items-center flex-col p-4">
          <img src="/icons/chest-icon.svg" alt="" />
          <p className="leading-6">Chest</p>
        </a>
        <a href="#" className="text-[#D1D1D1] flex items-center flex-col p-4">
          <img src="/icons/trade-icon.svg" alt="" />
          <p className="leading-6">Trade</p>
        </a>
        <a href="#" className="text-[#D1D1D1] flex items-center flex-col p-4">
          <img src="/icons/fire-icon.svg" alt="" />
          <p className="leading-6">Sell</p>
        </a>
        {props.heartIcon && (
          <a
            href="#"
            className="text-[#D1D1D1] flex items-center flex-col p-1 "
          >
            <div className="bg-[#271c49b4] p-3 pb-2  rounded-full shadow-xl">
              <img src="/icons/heart-solid.svg" alt="" />
            </div>
          </a>
        )}
        {props.accountIcon && (
          <a href="#" className="text-[#D1D1D1] flex items-center flex-col p-4">
            <img src="/icons/smiley-icon.svg" alt="" />
            <p className="leading-6">Account</p>
          </a>
        )}
      </div>
    </>
  )
}

export default SideNav
