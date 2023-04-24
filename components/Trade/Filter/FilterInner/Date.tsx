import React, { useState } from 'react'
import DatePicker from 'react-date-picker'

import RemoveIcon from '@mui/icons-material/Remove'

const DateFilter = ({ value, setValues }: any) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="bg-[#441F84] rounded-full max-w-[120px] flex items-center justify-center w-full font-medium p-1">
        <DatePicker
          onChange={(e: any) =>
            setValues((prev: any) => {
              return { ...prev, min: e }
            })
          }
          value={value.min}
          clearIcon={null}
          className="text-black bg-[#441F84] rounded-full text-center"
          format="dd/M/y"
          // defaultValue={new Date()}
          calendarClassName="rounded-xl mt-4"
        />
      </div>
      <RemoveIcon className="text-[#441F84]" />

      <div className="bg-[#441F84] rounded-full max-w-[120px] flex items-center justify-center w-full font-medium p-1">
        <DatePicker
          onChange={(e: any) =>
            setValues((prev: any) => {
              return { ...prev, max: e }
            })
          }
          value={value.max}
          // defaultValue={new Date()}
          minDate={value.min}
          clearIcon={null}
          className="text-black bg-[#441F84] rounded-full text-center"
          format="dd/M/y"
          calendarClassName="rounded-xl mt-4"
        />
      </div>
    </div>
  )
}

export default DateFilter
