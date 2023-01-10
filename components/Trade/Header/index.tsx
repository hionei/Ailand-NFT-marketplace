import React from 'react'
import CartBtn from './CartBtn'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
const index = (props: any) => {
  return (
    <>
      <div className="w-full text-white md:flex justify-between items-center px-6 hidden ">
        {/* left */}
        <div className="flex gap-4">
          <div className="">
            <div class="relative flex items-center">
              <SearchOutlinedIcon className="absolute left-3" />
              <input
                id="4"
                type="text"
                class="bg-violet-dark border-0 text-lg w-full p-2.5 pl-12 text-white rounded-full outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <p>Default</p>
            <p>Discount</p>
            <p>Price</p>
          </div>
        </div>
        {/* right */}
        <div>
          <CartBtn onClick={() => props.cartOpenHandler((o) => !o)} />
        </div>
      </div>

      <div className="w-full text-white  px-6 block md:hidden">
        <CartBtn
          mobile={true}
          onClick={() => props.cartOpenHandler((o) => !o)}
        />

        <div className="flex items-center justify-between my-4 px-[20%]">
          <p>My Items</p>
          <p>Market</p>
        </div>

        <div className=" flex items-center justify-center gap-2">
          <div className="bg-[#231841] px-4 py-3 rounded-full shadow-lg">
            <FavoriteIcon />
          </div>
          <div className="w-full">
            <div class="relative flex items-center">
              <SearchOutlinedIcon className="absolute left-3" />
              <input
                id="4"
                type="text"
                class="bg-violet-dark border-0 text-lg w-full p-2.5 pl-12 text-white rounded-full outline-none"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
