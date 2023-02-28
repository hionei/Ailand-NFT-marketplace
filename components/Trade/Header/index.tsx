import React, { useState } from 'react'
import CartBtn from './CartBtn'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
const index = (props: any) => {
  const [sort, setSort] = useState({ price: false, rarity: false, date: false })

  const onSort = (eve: any, type: number) => {
    switch (type) {
      case 0:
        setSort({ price: false, rarity: false, date: false })
        props.onSort(0, false)
        break
      case 1:
        setSort((prev) => {
          props.onSort(1, !prev.price)
          return { rarity: false, date: false, price: !prev.price }
        })

        break
      case 2:
        setSort((prev) => {
          return { price: false, date: false, rarity: !prev.rarity }
        })
        break
      case 3:
        setSort((prev) => {
          props.onSort(2, !prev.date)
          return { price: false, rarity: false, date: !prev.date }
        })
        break
      default:
        break
    }
  }
  return (
    <>
      <div className="w-full text-white md:flex justify-between items-center px-6 hidden ">
        {/* left */}
        <div className="flex gap-4">
          <div className="">
            <div className="relative flex items-center">
              <SearchOutlinedIcon className="absolute left-3" />
              <input
                id="4"
                type="text"
                className="bg-violet-dark border-0 text-lg w-full p-2.5 pl-12 text-white rounded-full outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <button onClick={(eve) => onSort(eve, 0)}>Default</button>
            <button
              className="flex items-center justify-center gap-1"
              onClick={(eve) => onSort(eve, 1)}
            >
              Price
              {!sort.price ? (
                <img src="/icons/sort.svg" />
              ) : (
                <img src="/icons/sort_revert.svg" />
              )}
            </button>
            {/* <button
              className="flex items-center justify-center gap-1"
              onClick={(eve) => onSort(eve, 2)}
            >
              Rarity
              {!sort.rarity ? (
                <img src="/icons/sort.svg" />
              ) : (
                <img src="/icons/sort_revert.svg" />
              )}
            </button> */}
            <button
              className="flex items-center justify-center gap-1"
              onClick={(eve) => onSort(eve, 3)}
            >
              Date
              {!sort.date ? (
                <img src="/icons/sort.svg" />
              ) : (
                <img src="/icons/sort_revert.svg" />
              )}
            </button>
          </div>
        </div>
        {/* right */}
        <div>
          <CartBtn onClick={() => props.cartOpenHandler((o: any) => !o)} />
        </div>
      </div>

      <div className="w-full text-white  px-6 block md:hidden">
        <CartBtn
          mobile={true}
          onClick={() => props.cartOpenHandler((o: any) => !o)}
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
            <div className="relative flex items-center">
              <SearchOutlinedIcon className="absolute left-3" />
              <input
                id="4"
                type="text"
                className="bg-violet-dark border-0 text-lg w-full p-2.5 pl-12 text-white rounded-full outline-none"
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
