import { StoreNfts } from '../types/types'

export const addCookie = (item: StoreNfts) => {
  const cookies = document.cookie.split('; ')
  let data: StoreNfts[] = []
  const rawData = cookies.find((cookie) => cookie.startsWith('nfts='))
  if (!rawData) {
    data = []
  } else {
    let sNFTData = rawData.split('=')[1]
    data = JSON.parse(sNFTData)
  }
  data.push(item)
  document.cookie = `nfts=${JSON.stringify(data)}`
}

export const setCookie = (data: StoreNfts[]) => {
  document.cookie = `nfts=${JSON.stringify(data)}`
}

export const removeCookie = () => {}

export const clearCookie = () => {}
