import React from 'react'
import InputBase from '@mui/material/InputBase'
import RemoveIcon from '@mui/icons-material/Remove'
import CurrencyInput from 'react-currency-input-field'

const Price = ({ value, setValues }: any) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="bg-[#441F84] rounded-full max-w-[100px] flex items-center justify-center w-full font-medium p-1">
        <CurrencyInput
          decimalsLimit={2}
          prefix="$"
          value={value.min}
          onValueChange={(value: any, name: any) => {
            setValues((prev: any) => {
              return { ...prev, min: value }
            })
          }}
          className="w-[80%] bg-transparent outline-none text-center"
        />
      </div>
      <RemoveIcon className="text-[#441F84]" />
      <div className="bg-[#441F84] rounded-full max-w-[100px] flex items-center justify-center w-full font-medium p-1">
        <CurrencyInput
          decimalsLimit={2}
          prefix="$"
          value={value.max}
          onValueChange={(value: any, name: any) => {
            setValues((prev: any) => {
              return { ...prev, max: value }
            })
          }}
          className="w-[80%] bg-transparent outline-none text-center"
        />
      </div>
    </div>
  )
}

export default Price
