import Button from '@mui/material/Button'
import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import Link from 'next/link'
import { useWallet } from '@mintbase-js/react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Chain, Network } from 'mintbase'
import { DEFAULT_NETWORK } from '../../config/constants'

const Header = (props: any) => {
  const [currency, setCurrency] = React.useState('USD')
  const mjsKey = process.env.NEXT_PUBLIC_DEVELOPER_KEY || ''
  const network =
    (process.env.NEXT_PUBLIC_NETWORK as Network) || DEFAULT_NETWORK

  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    signMessage,
    isConnected,
    errorMessage,
  } = useWallet()

  if (errorMessage) {
    return (
      <div>
        <p>Major bummer! Could not connect to NEAR {errorMessage}</p>
        <button onClick={connect}>Try Again</button>
      </div>
    )
  }

  const buttonLabel = isConnected ? `Sign Out ${activeAccountId}` : ' Sign in'

  const buttonAction = isConnected ? disconnect : connect

  return (
    <>
      <div
        className={`bg-violet-dark py-4 px-2 md:px-10 flex items-center justify-between fixed z-50 top-0 left-0 w-screen ${props.children}`}
      >
        <div className="flex items-center gap-14">
          <Link href="$">
            <img src="/logo-main.svg" alt="" className="w-[80%] md:w-full" />
          </Link>

          <ul className="hidden lg:flex gap-8 ">
            <li>
              <a href="#" className="text-[#D1D1D1] whitespace-nowrap">
                My Items
              </a>
            </li>
            <li>
              <a href="#" className="text-[#D1D1D1]">
                Market
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 ">
          <div className="text-[#D1D1D1] hidden lg:flex flex-col items-center">
            <EmojiEmotionsOutlinedIcon sx={{ width: '20px', height: '20px' }} />
            <p>Account</p>
          </div>

          <div className="hidden lg:block">
            <FormControl
              variant="standard"
              sx={{ margin: 1, minWidth: 70, color: 'white' }}
            >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={currency}
                sx={{ color: '#D1D1D1', border: 'none' }}
                onChange={(e) => {
                  setCurrency(e.target.value)
                }}
                disableUnderline={true}
                IconComponent={ExpandMoreOutlinedIcon}
                classes={{ icon: 'text-[#D1D1D1]' }}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="CAD">CAD</MenuItem>
                <MenuItem value="AUD">AUD</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            type="button"
            variant="contained"
            onClick={isConnected ? disconnect : connect}
            sx={{
              backgroundColor: '#AB7BFF',
              color: '#441F84',
              fontWeight: 'bold',
              textTransform: 'capitalize',
              borderRadius: '30px',
              padding: '8px 25px ',
            }}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
      {/* gap placeholder for fixed nav */}
      <div className="w-screen h-[4.5rem]"></div>
    </>
  )
}

export default Header
