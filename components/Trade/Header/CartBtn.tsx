import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import { useNearPrice } from '../../../hooks/useNearPrice'
import { useTokenListData } from '../../../hooks/useTokenListData'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { StoreNfts, TokenListData } from '../../../types/types'

const CartBtn = (props: any) => {
  const [sumPrice, setSumPrice] = useState(0.0)
  const { nearPrice } = useNearPrice()
  const storeShoppingNFTs = useSelector(
    (state: RootState) => state.shoppingCartSlicer.data
  )

  const metaDataList = useSelector(
    (state: RootState) => state.metaDataSlicer.metaDataList
  )

  useEffect(() => {
    let totalAmount = 0.0
    storeShoppingNFTs.map((nft: StoreNfts) => {
      const metaData = metaDataList.filter((metaData: TokenListData) => {
        if (!metaData.tokenData) return false
        return metaData.tokenData.tokenData[0].metadata_id === nft.metadataId
      })

      if (metaData.length == 0) return
      totalAmount += metaData[0].price * Number(nearPrice)
    })
    setSumPrice(totalAmount)
  }, [storeShoppingNFTs, metaDataList])

  if (props.mobile) {
    return (
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#830A86',
          borderRadius: '100px',
          gap: '10px',
          ':hover': {
            background: '#830A86',
          },
          width: '100%',
        }}
        className="flex justify-between py-3 text-[#FFAEFD]"
        onClick={props.onClick}
      >
        <span>0 &nbsp;&nbsp;$ {sumPrice}</span>
        <ShoppingCartOutlinedIcon />
        <span>$ {sumPrice} &nbsp;&nbsp; 0</span>
      </Button>
    )
  }

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#830A86',
        borderRadius: '100px',
        gap: '10px',
        ':hover': {
          background: '#830A86',
        },
      }}
      startIcon={<ShoppingCartOutlinedIcon />}
      onClick={props.onClick}
    >
      $ {sumPrice.toFixed(2)}
    </Button>
  )
}

export default CartBtn
