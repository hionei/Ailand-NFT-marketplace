import Button from '@mui/material/Button'
import React from 'react'
import Collapsible from './Collapsible'
import DummyItem from './DummyItem'

const FilterCard = (props: any) => {
  const data1 = [
    { title: 'Saved Filters', count: '0', children: <DummyItem /> },
    { title: 'Rarity', children: <DummyItem /> },
    { title: 'Price', children: <DummyItem /> },
  ]

  const data2 = [
    { title: 'Game', children: <DummyItem /> },
    { title: 'Type', children: <DummyItem /> },
    { title: 'Time range', children: <DummyItem /> },
    { title: 'Colour', children: <DummyItem /> },
    { title: 'Other', children: <DummyItem /> },
  ]

  return (
    <div
      className={`bg-violet-dark rounded-xl z-30 py-2 ${props.className} flex flex-col justify-between`}
    >
      <div>
        <p className="text-violet p-3 font-roboto leading-6">Filters</p>
        <hr className="border-2  border-b-0 border-violet" />

        <Collapsible data={data1} />
        <hr className="border-2  border-b-0 border-violet" />
        <Collapsible data={data2} />
      </div>

      <div className="flex gap-4 px-4 py-2">
        <Button
          variant="contained"
          sx={{
            borderRadius: '30px',
            width: '100%',
            padding: '10px',
            bgcolor: '#441F84',
            textTransform: 'capitalize',
            color: '#D1D1D1',
          }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: '30px',
            width: '100%',
            padding: '10px',
            bgcolor: '#8E52F5',
            textTransform: 'capitalize',
          }}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default FilterCard
