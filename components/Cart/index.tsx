import React, { useEffect, useState, useCallback } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Accordion from './Accordion'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeShoppingCart,
  setShoppingCarts,
} from '../../store/slice/shoppingCartSlice'
import { nearToYocto } from '../../lib/numbers'
import { MAINNET_CONFIG } from '../../config/constants'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useWallet } from '@mintbase-js/react'
import { execute, buy, BuyArgs, TransactionSuccessEnum } from '@mintbase-js/sdk'
import type { FinalExecutionOutcome } from '@near-wallet-selector/core'
import { StoreNfts, TokenListData } from '../../types/types'
import { useNearPrice } from '../../hooks/useNearPrice'
import { useRouter } from 'next/router'

interface IParamsOFNFTs {
  marketId: string
  nftContractId: string
  tokenId: string
  price: number
}

const Cart = (props: any) => {
  const [shoppingNFTs, setShoppingNFTs] = useState([])
  const dispatch = useDispatch()

  const storeShoppingNFTs = useSelector(
    (state: RootState) => state.shoppingCartSlicer.data
  )

  const metaDataList = useSelector(
    (state: RootState) => state.metaDataSlicer.metaDataList
  )

  const { nearPrice } = useNearPrice()

  const { selector } = useWallet()

  useEffect(() => {
    setShoppingNFTs(storeShoppingNFTs)
    storeShoppingNFTs.map((nft: StoreNfts) => {
      const metaData = metaDataList.filter((metaData: TokenListData) => {
        if (!metaData.tokenData) return false
        console.log(metaData)
        return metaData.tokenData.tokenData[0].metadata_id === nft.metadataId
      })
    })
  }, [storeShoppingNFTs])

  const multipleBuy = async (params: BuyArgs[]) => {
    const wallet = await selector.wallet()

    await execute(
      {
        wallet,
        callbackUrl: `${window.location.origin}/wallet-callback`,
        callbackArgs: {
          type: TransactionSuccessEnum.MAKE_OFFER,
          args: {
            tokenId: params[0].tokenId,
            price: nearToYocto(params[0].price.toString()),
          },
        },
      },
      params.map((param: BuyArgs) => {
        return buy({
          contractAddress: param.contractAddress,
          tokenId: param.tokenId,
          affiliateAccount:
            process.env.NEXT_PUBLIC_AFFILIATE_ACCOUNT ||
            MAINNET_CONFIG.affiliate,
          marketId: param.marketId,
          price: nearToYocto((Number(param.price) + 0.000001).toString()),
        })
      })
    )
  }

  const onRemoveShoppingCart = (eve: any, id: number) => {
    dispatch(removeShoppingCart(id))
  }

  const removeAllShoppingCarts = () => {
    dispatch(setShoppingCarts([]))
  }

  const onBatchBuy = () => {
    let paramsOfNfts: BuyArgs[] = []

    storeShoppingNFTs.map((nft: StoreNfts) => {
      const metaData = metaDataList.filter((metaData: TokenListData) => {
        if (!metaData.tokenData) return false
        console.log(metaData)
        return metaData.tokenData.tokenData[0].metadata_id === nft.metadataId
      })

      if (metaData.length == 0) return

      paramsOfNfts.push({
        marketId: metaData[0].marketId,
        contractAddress: metaData[0].nftContractId,
        tokenId: metaData[0].tokenId,
        price: metaData[0].price.toString(),
        affiliateAccount: process.env.NEXT_PUBLIC_REFERRAL_ID,
      })
    })

    multipleBuy(paramsOfNfts)
  }

  return (
    <div className="bg-violet-dark text-white p-6 h-full md:h-fit max-h-screen md:max-h-[35rem] overflow-auto cart-gradient md:rounded-bl-3xl rounded-none md:rounded-tl-3xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-center">
          <ChevronLeftIcon
            onClick={() => props.cartCloseHandler(false)}
            className="text-3xl text-[#cbb4f3] cursor-pointer block md:hidden"
          />
          <p className="text-[#cbb4f3] text-2xl font-medium">Trade Cart</p>
        </div>
        <button onClick={removeAllShoppingCarts}>
          <DeleteOutlineIcon />
        </button>
      </div>

      <div className=" flex flex-col gap-3">
        <div className="flex justify-between bg-[#181330] rounded-lg p-4 shadow-[rgba(0,0,0,_0.24)_0px_6px_4px_0px] ">
          <span>You offer on: $ 0.00</span>
        </div>
        <div className="flex justify-between bg-[#181330] rounded-lg p-4 shadow-[rgba(0,0,0,_0.24)_0px_6px_4px_0px] ">
          <span>You get on: $ 0.00 </span>
        </div>
        {/* <Accordion title="You offer on: $ 0.00" />
        <Accordion title="You get on: $ 0.00 " /> */}
      </div>

      {/* cart item */}
      {shoppingNFTs.map((nft: StoreNfts, index) => {
        return (
          <div
            key={'cart' + index}
            className="flex justify-between bg-[#181330] my-2 rounded-lg p-4 shadow-[rgba(0,0,0,_0.24)_0px_6px_4px_0px] "
          >
            <div className="flex gap-2">
              <img src={nft.media} alt="" className="w-[84px] h-[83px]" />
              <p className="mt-3">AMBER #1293</p>
            </div>
            <div className="flex flex-col my-2 justify-between items-end">
              <p>$112</p>
              <button onClick={(eve) => onRemoveShoppingCart(eve, index)}>
                <DeleteOutlineIcon />
              </button>
            </div>
          </div>
        )
      })}
      {/* cart button */}

      <div>
        <button
          onClick={onBatchBuy}
          className="w-full flex flex-col items-center justify-center p-2 rounded-full bg-[#441F84] text-white border-0 mt-5 leading-5 shadow-[rgba(0,0,0,_0.24)_0px_6px_6px_0px] "
        >
          BUY
          <span className="text-[#8E52F5]">Balance ≈ 0.00 $</span>
        </button>
      </div>
    </div>
  )
}

export default Cart
