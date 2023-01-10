import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Accordion from './Accordion'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
const index = (props: any) => {
  return (
    <div className="bg-violet-dark text-white p-6 h-full md:h-fit max-h-screen md:max-h-[35rem] overflow-auto cart-gradient md:rounded-bl-3xl rounded-none md:rounded-tl-3xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-center">
          <ChevronLeftIcon
            onClick={() => props.cartCloseHandler(false)}
            className="text-3xl text-[#cbb4f3] cursor-pointer block md:hidden"
          />
          <p className="text-[#cbb4f3] text-2xl font-medium">Trade Cart</p>
        </div>
        <DeleteOutlineIcon />
      </div>

      <div className=" flex flex-col gap-3">
        <Accordion title="You offer on: $ 0.00" />
        <Accordion title="You get on: $ 0.00 " />
      </div>

      {/* cart item */}
      <div className="flex justify-between bg-[#181330] my-2 rounded-lg p-4 shadow-lg">
        <div className="flex gap-2">
          <img src="/images/cart-item-01.png" alt="" />
          <p className="mt-3">AMBER #1293</p>
        </div>
        <div className="flex flex-col my-2 justify-between items-end">
          <p>$112</p>
          <DeleteOutlineIcon />
        </div>
      </div>
      {/* cart item */}
      <div className="flex justify-between bg-[#181330] my-2 rounded-lg p-4 shadow-lg">
        <div className="flex gap-2">
          <img src="/images/cart-item-02.png" alt="" />
          <p className="mt-3">AMBER #1293</p>
        </div>
        <div className="flex flex-col my-2 justify-between items-end">
          <p>$112</p>
          <DeleteOutlineIcon />
        </div>
      </div>
      {/* cart button */}

      <div>
        <button className="w-full flex flex-col items-center justify-center p-2 rounded-full bg-[#441F84] text-white border-0 mt-5 leading-5">
          BUY
          <span className="text-[#8E52F5]">Balance ≈ 0.00 $</span>
        </button>
      </div>
    </div>
  )
}

export default index
