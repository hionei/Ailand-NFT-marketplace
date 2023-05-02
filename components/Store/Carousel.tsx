import React, { useCallback, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ItemCard from '../Trade/ItemCard'
import useStoreNfts from '../../hooks/useStoreNfts'
import { StoreNfts } from '../../types/types'

const index = () => {
  const { nfts, loading } = useStoreNfts()
  const [selectedStore, setSelectedStore] = useState('')

  const filteredThings = nfts.filter(
    (nft: StoreNfts) => selectedStore === '' || nft.storeId === selectedStore
  )

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  const itemClicked = useCallback((item: StoreNfts) => {
    // setProductModalOpen(true)
    // setItemData(item)
  }, [])

  return (
    <Carousel responsive={responsive} ssr={true} itemClass="p-2">
      {filteredThings.map((nft: StoreNfts) => (
        <ItemCard
          key={'carousel' + nft.metadataId}
          item={nft}
          onItemClicked={itemClicked}
        />
      ))}
    </Carousel>
  )
}

export default index
