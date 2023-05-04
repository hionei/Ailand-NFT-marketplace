import React, { useEffect, useState } from 'react'
import Header from './Header'
import Accordion from './Accordion'
import About from './DetailCards/About'
import Date from './DetailCards/Date'
import Provenance from './DetailCards/Provenance'
import Splits from './DetailCards/Splits'
import { useNearPrice } from '../../hooks/useNearPrice'
import Carousel from './Carousel'
import { StoreNfts, TokenListData } from '../../types/types'
import ModelViewer from '../ModelViewer'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const index = ({ itemData }: { itemData: StoreNfts }) => {
  const metaDataList = useSelector(
    (state: RootState) => state.metaDataSlicer.metaDataList
  )

  const { nearPrice } = useNearPrice()

  const [metaData, setMetaData] = useState<TokenListData>()

  useEffect(() => {
    if (metaDataList.length != 0 && itemData) {
      const metaDataPackage = metaDataList.filter((metaData: TokenListData) => {
        if (!metaData.tokenData) return false
        return (
          metaData.tokenData.tokenData[0].metadata_id === itemData.metadataId
        )
      })

      setMetaData(metaDataPackage[0])
    }
  }, [])

  return (
    <div className="bg-[#181330] min-h-screen">
      <div className="max-w-[1100px] mx-auto p-4">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-3xl  col-span-1 flex justify-center h-[480px]">
            {metaData?.tokenData.tokenData[0].animationUrl ? (
              <ModelViewer
                modelPath={metaData?.tokenData.tokenData[0].animationUrl}
              />
            ) : (
              <img
                src={itemData.media}
                alt=""
                className="w-full sm:w-full max-h-none sm:max-h-[35rem] mx-auto"
              />
            )}
          </div>
          <div className="col-span-2">
            <Header
              price={Number(parseFloat(nearPrice) * metaData?.price).toFixed(2)}
              nftData={itemData}
            />
            {/* accordion */}
            <div className="flex flex-col gap-4 p-4">
              <Accordion title="About">
                <About />
              </Accordion>
              <Accordion title="Splits">
                <Splits />
              </Accordion>
              <Accordion title="Date">
                <Date />
              </Accordion>
              <Accordion title="Provenance">
                <Provenance />
              </Accordion>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-violet mb-4 pl-5">More from this contract</p>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default index
