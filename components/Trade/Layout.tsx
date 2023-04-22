import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SideNav from '../Navbar/SideNav'
import FilterCard from './Filter/FilterCard'
import ItemCard from './ItemCard'
import TradeHeader from './Header'
import Cart from '../Cart/index'
import useStoreNfts from '../../hooks/useStoreNfts'
import { useStores } from '../../hooks/useStores'
import { Store, StoreNfts, TokenListData } from '../../types/types'
import Drawer from '@mui/material/Drawer'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useClickOutside } from '@mantine/hooks'
import { useNearPrice } from '../../hooks/useNearPrice'
import Modal from '../Modal'

type SORT = {
  price: boolean
  rarity: boolean
  date: boolean
}

const Layout = () => {
  const [filterOpen, setFilterOpen] = React.useState(false)
  const [cartOpen, setCartOpen] = React.useState(false)
  const [productModalOpen, setProductModalOpen] = React.useState(false)
  const ref = useClickOutside(() => setCartOpen(false))

  const { nfts, loading } = useStoreNfts()
  const { stores } = useStores()
  const [selectedStore, setSelectedStore] = useState('')
  const [filteredThings, setFilteredThings] = useState([])
  const [itemData, setItemData] = useState<StoreNfts>(null)
  const metaDataList = useSelector(
    (state: RootState) => state.metaDataSlicer.metaDataList
  )

  const { nearPrice } = useNearPrice()

  useEffect(() => {
    if (nfts.length !== 0) {
      setFilteredThings(
        nfts.filter(
          (nft: StoreNfts) =>
            selectedStore === '' || nft.storeId === selectedStore
        )
      )
    }
  }, [nfts])

  const onFilter = (filterSettings: any) => {
    console.log(filterSettings)
    const filteredNfts = nfts.filter(
      (nft: StoreNfts) => selectedStore === '' || nft.storeId === selectedStore
    )

    let newArr = filteredNfts

    for (let filterSetting of filterSettings) {
      if (filterSetting.title == 'price') {
        const minPrice = filterSetting.values.min
        const maxPrice = filterSetting.values.max

        newArr = newArr.filter((filteredThing) => {
          const metaData = metaDataList.filter((metadata: TokenListData) => {
            if (!metadata.tokenData) return false
            return (
              metadata.tokenData.tokenData[0].metadata_id ===
              filteredThing.metadataId
            )
          })

          const curPrice = Number(
            parseFloat(nearPrice) * metaData[0].price
          ).toFixed(2)

          if (maxPrice > curPrice && curPrice > minPrice) return true
          else return false
        })
      }

      if (filterSetting.title == 'date') {
        const minDate = filterSetting.values.min
        const maxDate = filterSetting.values.max

        newArr = newArr.filter((filteredThing) => {
          const curDate = filteredThing.createdAt
          const curDateTime = new Date(curDate)
          const minDateTime = new Date(minDate)
          const maxDateTime = new Date(maxDate)

          if (curDateTime > minDateTime && maxDateTime > curDateTime)
            return true
          else return false
        })
      }
    }

    setFilteredThings(newArr)
  }

  const onSort = (type: number, status: boolean) => {
    if (type === 0) {
      setFilteredThings(
        nfts.filter(
          (nft: StoreNfts) =>
            selectedStore === '' || nft.storeId === selectedStore
        )
      )
    }

    if (type === 1) {
      let filteredNFTS = [...filteredThings]
      filteredNFTS.sort((a, b) => {
        const aMetadata = metaDataList.filter((metaData: TokenListData) => {
          if (!metaData.tokenData) return false
          return metaData.tokenData.tokenData[0].metadata_id === a.metadataId
        })
        const bMetadata = metaDataList.filter((metaData: TokenListData) => {
          if (!metaData.tokenData) return false
          return metaData.tokenData.tokenData[0].metadata_id === b.metadataId
        })

        if (aMetadata[0].price > bMetadata[0].price) {
          return !status ? -1 : 1
        }
        if (aMetadata[0].price < bMetadata[0].price) {
          return status ? -1 : 1
        }

        return 0
      })
      setFilteredThings(filteredNFTS)
    }

    if (type === 2) {
      let filteredNFTS = [...filteredThings]
      filteredNFTS.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return !status ? -1 : 1
        }
        if (a.createdAt < b.createdAt) {
          return status ? -1 : 1
        }
        return 0
      })
      setFilteredThings(filteredNFTS)
    }
  }

  const itemClicked = useCallback((item: StoreNfts) => {
    setProductModalOpen(true)
    setItemData(item)
  }, [])

  return (
    <div className="overflow-x-hidden relative">
      <Header />

      <div className="min-h-[80vh]  flex">
        <div className="flex bg-[#1d1435] trade-gradient w-full">
          <SideNav className="h-[100%] hidden lg:block pt-4" heartIcon={true} />
          <div className="px-4 py-2 hidden lg:block">
            <FilterCard
              className="max-w-[300px] shadow-xl mt-4"
              onFilter={onFilter}
            />
          </div>
          <div className="w-full  mt-4">
            <TradeHeader cartOpenHandler={setCartOpen} onSort={onSort} />
            <div className="grid grid-cols-3 sm:flex gap-4 py-2 px-4 flex-wrap items-center justify-center lg:justify-start ">
              {filteredThings.map((nft: StoreNfts, index: number) => (
                <ItemCard
                  key={`${nft.metadataId}-${index}`}
                  item={nft}
                  onItemClicked={itemClicked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <SideNav
        className="fixed bottom-0 left-0 flex-row flex h-min w-screen z-50 justify-center lg:hidden"
        heartIcon={false}
        accountIcon={true}
        openFilters={setFilterOpen}
      />

      <Footer />

      <Drawer
        anchor="left"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <p
          className="text-right p-4 cursor-pointer text-white"
          onClick={() => setFilterOpen(false)}
        >
          x
        </p>
        <FilterCard
          className=" shadow-xl  overflow-auto mx-10 my-5"
          handleClose={setFilterOpen}
          onFilter={onFilter}
        />
      </Drawer>

      {cartOpen && (
        <div
          className="fixed right-0 md:right-10 z-50 top-0 md:top-[15%] w-full h-full md:w-[40%] min-w-[25rem] max-w-screen-sm md:max-w-md  overflow-hidden"
          ref={ref}
        >
          <Cart cartCloseHandler={setCartOpen} />
        </div>
      )}

      <Modal
        open={productModalOpen}
        setProductModalOpen={setProductModalOpen}
        itemData={itemData}
      />
    </div>
  )
}

export default Layout
