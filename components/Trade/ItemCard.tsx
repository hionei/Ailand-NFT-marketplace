import { useEffect, useState } from 'react'
import { StoreNfts } from '../../types/types'
import { useTokenListData } from '../../hooks/useTokenListData'
import { useNearPrice } from '../../hooks/useNearPrice'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addShoppingCart } from '../../store/slice/shoppingCartSlice'
import { addMetaData } from '../../store/slice/metaDataSlice'
import { RootState } from '../../store'

const ItemCard = ({ item }: { item: StoreNfts }): JSX.Element => {
  const { metadataId } = item
  const [amountLeft, setAmountLeft] = useState(0)
  const curMetaData = useTokenListData({ metadataId })
  const shoppingNfts = useSelector(
    (state: RootState) => state.shoppingCartSlicer.data
  )
  const { nearPrice } = useNearPrice()
  const dispatch = useDispatch()

  useEffect(() => {
    setAmountLeft(curMetaData.amountAvailable)
  }, [])

  useEffect(() => {
    dispatch(addMetaData(curMetaData))
  }, [curMetaData])

  const saveToCart = () => {
    let count: any = {}
    shoppingNfts.forEach((nft) => {
      if (count[JSON.stringify(nft)]) {
        count[JSON.stringify(nft)]++
      } else {
        count[JSON.stringify(nft)] = 1
      }
    })
    console.log(count[JSON.stringify(item)], curMetaData.amountAvailable)

    if (count[JSON.stringify(item)] >= curMetaData.amountAvailable) {
      toast.warn('No NFTs available to buy')
      return
    }

    dispatch(addShoppingCart(item))
  }

  return (
    <div
      className="max-w-[200px] overflow-hidden  flex items-center flex-col font-roboto rounded-[10px] w-[154px] min-h-[168px]"
      style={{
        background: 'linear-gradient(180deg, #231941 0%, #181330 100%)',
        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.5)',
      }}
    >
      <img src={item.media} alt="" className="w-full h-[103px]" />
      <p className="text-md font-roboto text-white">
        $ {Number(parseFloat(nearPrice) * curMetaData.price).toFixed(2)}
      </p>
      <div className="flex gap-2 p-2">
        <button
          type="button"
          className="bg-[#231841] px-4 py-1 rounded-lg border-none flex items-center justify-center cursor-pointer"
        >
          <img src="/icons/heart.svg" alt="" />
        </button>
        <button
          type="button"
          onClick={saveToCart}
          className="bg-[#231841] px-4 py-1 rounded-lg border-none cursor-pointer"
        >
          <img src="/icons/cart.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default ItemCard
