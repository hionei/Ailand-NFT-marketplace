import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
const SavedFilters = ({ filters, clearIndividual }: any) => {
  return (
    <>
      {filters.length === 0 ? (
        <div className="bg-[#441F84] text-center px-6 py-3 rounded-3xl">
          <h4 className="text-xl font-semibold">Nothing Here</h4>
          <p className="text-lg font-medium">
            Apply any filter and click "Save" Button
          </p>
        </div>
      ) : (
        <>
          {filters.map((item: any, index: number) => {
            return (
              <div
                className="flex justify-between items-center capitalize text-lg my-3"
                key={`SavedFilters${index}`}
              >
                <p>{item.title}</p>
                <DeleteOutlineIcon
                  className="cursor-pointer"
                  onClick={() => clearIndividual(item.title)}
                />
              </div>
            )
          })}
        </>
      )}
    </>
  )
}

export default SavedFilters
