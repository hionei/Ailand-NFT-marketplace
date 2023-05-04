import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useWallet } from '@mintbase-js/react'
import { StoreNfts, TokenListData } from '../../types/types'
import { execute, buy, BuyArgs, TransactionSuccessEnum } from '@mintbase-js/sdk'
import { nearToYocto } from '../../lib/numbers'
import { MAINNET_CONFIG } from '../../config/constants'

const Header = ({ price, nftData }: { price: string; nftData: StoreNfts }) => {
  const metaDataList = useSelector(
    (state: RootState) => state.metaDataSlicer.metaDataList
  )

  const { selector } = useWallet()

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

  const onBatchBuy = () => {
    let paramsOfNfts: BuyArgs[] = []

    const metaData = metaDataList.filter((metaData: TokenListData) => {
      if (!metaData.tokenData) return false
      return metaData.tokenData.tokenData[0].metadata_id === nftData.metadataId
    })

    if (metaData.length == 0) return

    paramsOfNfts.push({
      marketId: metaData[0].marketId,
      contractAddress: metaData[0].nftContractId,
      tokenId: metaData[0].tokenId,
      price: metaData[0].price.toString(),
      affiliateAccount: process.env.NEXT_PUBLIC_REFERRAL_ID,
    })

    multipleBuy(paramsOfNfts)
  }

  return (
    <>
      <div className="px-4 flex justify-between flex-col md:flex-row gap-4">
        <div className="flex justify-between flex-row md:flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div>
              <p className="text-md sm:text-2xl text-[#AB7BFF] whitespace-nowrap">
                Amber #1223
              </p>
              <p className="text-sm sm:text-lg text-white">1 of 1 available</p>
            </div>
            <img src="/icons/scan-icon.svg" alt="" className="w-6 md:w-10" />
          </div>

          <div className="text-[#441F84] max-w-[200px] text-[13px] sm:text-md text-right md:text-left">
            Amber Metaverse, Skin, Newest, Blue
          </div>
        </div>

        <div className="flex justify-between  flex-col gap-4">
          <div className="flex justify-between flex-row md:flex-col items-end">
            <p className="text-2xl text-[#AB7BFF]">Price</p>
            <p className="text-3xl text-white">{price} $</p>
          </div>
          <button
            className="bg-[#FC0FF54D] text-white border-0 py-4 px-5 sm:px-20 uppercase rounded-full text-[12px] sm:text-[18px]"
            onClick={onBatchBuy}
          >
            Buy
            <p className="text-[#D1D1D1] mt-1 block md:hidden">
              Balance ≈ 0.00 $
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
