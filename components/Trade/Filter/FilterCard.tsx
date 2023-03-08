import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import Collapsible from './Collapsible'
import DummyItem from './DummyItem'
import Price from './FilterInner/Price'
import Rarity from './FilterInner/Rarity'
import Date from './FilterInner/Date'
import SavedFilters from './FilterInner/SavedFilters'

const FilterCard = (props: any) => {
  const [filters, setFilters] = useState([])
  const [rarity, setRarity] = useState({ min: 0, max: 0 })
  const [price, setPrice] = useState({ min: 0, max: 0 })
  const [date, setDate] = useState({ min: null, max: null })

  useEffect(() => {
    props.onFilter(filters)
  }, [filters])

  useEffect(() => {
    var applied = []
    if (price.min > 0 || price.max > 0) {
      applied.push({ title: 'price', values: price })
    }
    if (date.min !== null || date.max !== null) {
      applied.push({ title: 'date', values: date })
    }

    if (applied.length > 0) setFilters(applied)
  }, [price, date])

  const setFiltersData = () => {
    var applied = []
    if (rarity.min > 0 || rarity.max > 0) {
      applied.push({ title: 'rarity', values: rarity })
    }
    if (price.min > 0 || price.max > 0) {
      applied.push({ title: 'price', values: price })
    }
    if (date.min !== null || date.max !== null) {
      applied.push({ title: 'date', values: date })
    }

    if (applied.length > 0) setFilters(applied)
  }

  const resetFilters = () => {
    setFilters([])
    setRarity({ min: 0, max: 0 })
    setPrice({ min: 0, max: 0 })
    setDate({ min: null, max: null })
  }

  const deleteFilter = (key: String) => {
    setFilters((prev: any) => {
      const data = [...prev]
      return data.filter((item) => item.title !== key)
    })
  }

  const data1 = [
    {
      title: 'Saved Filters',
      count: filters.length.toString(),
      children: (
        <SavedFilters filters={filters} clearIndividual={deleteFilter} />
      ),
    },
    // {
    //   title: 'Rarity',
    //   children: <Rarity value={rarity} setValues={setRarity} />,
    // },
    {
      title: 'Price',
      children: <Price value={price} setValues={setPrice} />,
    },
    { title: 'Date', children: <Date value={date} setValues={setDate} /> },
  ]

  return (
    <div
      className={`bg-violet-dark rounded-xl z-30 py-2 ${props.className} flex flex-col justify-between`}
    >
      <div className="min-h-[50vh]">
        <p className="text-violet p-3 font-roboto leading-6">Filters</p>
        <hr className="border-2  border-b-0 border-violet" />

        <Collapsible data={data1} />
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
          onClick={resetFilters}
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
          onClick={setFiltersData}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default FilterCard
