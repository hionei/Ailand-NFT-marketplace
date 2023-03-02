import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Chain, Network } from 'mintbase'
import { ApolloProvider } from '@apollo/client'
import { getClient } from '../services/providers/apollo'
import { WalletProvider } from '../services/providers/WalletProvider'
import { WalletContextProvider } from '@mintbase-js/react'
import { store } from '../store'
import { Provider } from 'react-redux'
import { DEFAULT_NETWORK } from '../config/constants'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@near-wallet-selector/modal-ui/styles.css'
import '../public/assets/styles/Calendar.css'
import '../public/assets/styles/DatePicker.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const mjsKey = process.env.NEXT_PUBLIC_DEVELOPER_KEY || ''
  const network =
    (process.env.NEXT_PUBLIC_NETWORK as Network) || DEFAULT_NETWORK

  return (
    <WalletContextProvider
    // network={network}
    // chain={Chain.near as Chain}
    // apiKey={mjsKey}
    >
      <Provider store={store}>
        <ApolloProvider client={getClient({ network: network as Network })}>
          <Component {...pageProps} />
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ApolloProvider>
      </Provider>
    </WalletContextProvider>
  )
}

export default MyApp
