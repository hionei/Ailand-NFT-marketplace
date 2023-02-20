import { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Items from '../components/Items'
import BuyModal from '../components/BuyModal/BuyModal'
import { SelectedNft, StoreNfts } from '../types/types'
import { useDispatch } from 'react-redux'
import { setShoppingCarts } from '../store/slice/shoppingCartSlice'
import Layout from '../components/Trade/Layout'

function Store(): JSX.Element {
  const [showBuyModal, setShowBuyModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({} as SelectedNft)
  const dispatch = useDispatch()
  const handleOpenBuyModal = (item: SelectedNft) => {
    setSelectedItem(item)
    setShowBuyModal(true)
  }

  const handleCloseBuyModal = () => {
    setSelectedItem({} as SelectedNft)
    setShowBuyModal(false)
  }

  useEffect(() => {
    const cookies = document.cookie.split('; ')
    let data: StoreNfts[] = []
    const rawData = cookies.find((cookie) => cookie.startsWith('nfts='))
    if (!rawData) {
      data = []
    } else {
      let sNFTData = rawData.split('=')[1]
      data = JSON.parse(sNFTData)
    }
    console.log(data)
    dispatch(setShoppingCarts(data))
  }, [])

  return (
    <div className="flex flex-1 flex-col min-h-screen text-gray-500">
      {/* <div className="flex w-full">
        <Items showModal={handleOpenBuyModal} />
      </div> */}
      <div className="mx-24">
        {!!showBuyModal && (
          <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
        )}
      </div>
      <Layout />
    </div>
  )
}

export default Store
