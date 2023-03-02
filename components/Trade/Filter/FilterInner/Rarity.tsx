import React from 'react'
import InputBase from '@mui/material/InputBase'
import RemoveIcon from '@mui/icons-material/Remove'

const Rarity = ({ value, setValues }: any) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="bg-[#441F84] rounded-full max-w-[100px] flex items-center justify-center w-full font-medium p-1">
        <input
          className="w-full text-white outline-none text-center bg-transparent p-0.5"
          value={value.min}
          type="number"
          onChange={(e) => {
            setValues((prev: any) => {
              return { ...prev, min: e.target.value }
            })
          }}
        />
      </div>
      <RemoveIcon className="text-[#441F84]" />
      <div className="bg-[#441F84] rounded-full max-w-[100px] flex items-center justify-center w-full font-medium p-1">
        <input
          className="w-full text-white outline-none text-center bg-transparent p-0.5"
          value={value.max}
          type="number"
          onChange={(e) => {
            setValues((prev: any) => {
              return { ...prev, max: e.target.value }
            })
          }}
        />
      </div>
    </div>
  )
}

export default Rarity
