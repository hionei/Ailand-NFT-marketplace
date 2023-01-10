import { Button } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const Footer = () => (
  <>
    <footer className="bg-violet-dark flex flex-col lg:flex-row">
      <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 lg:grid-cols-9 mx-auto">
        <div className="flex flex-col  col-span-2">
          <a href="/" className="title-font font-medium ">
            <img src="/logo-main.svg" alt="logo" className="max-w-[150px]" />
          </a>
          <p className="text-[#D1D1D1] text-xs mt-3">
            © 2022 HustleStacks OÜ - All Rights Reserved.
          </p>
        </div>
        <div className="">
          <h2 className="title-font font-normal text-violet tracking-widest text-lg mb-3">
            Trade
          </h2>
          <nav className="list-none mb-10">
            <ul className="text-sm leading-6 mt-4">
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Trade
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Auction
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Prime
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <h2 className="title-font font-normal text-violet tracking-widest text-lg mb-3">
            Mint
          </h2>
          <nav className="list-none mb-10">
            <ul className="text-sm leading-6 mt-4">
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  History
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <h2 className="title-font font-medium text-violet tracking-widest text-lg mb-3">
            Market
          </h2>
          <nav className="list-none mb-10">
            <ul className="text-sm leading-6 mt-4">
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Cashout
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  History
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <h2 className="title-font font-medium text-violet tracking-widest text-lg mb-3">
            Additional
          </h2>
          <nav className="list-none mb-10">
            <ul className="text-sm leading-6 mt-4">
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Personal area
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Visual settings
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Item status
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Trade bots
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <h2 className="title-font font-medium text-violet tracking-widest text-lg mb-3">
            Terms
          </h2>
          <nav className="list-none mb-10">
            <ul className="text-sm leading-6 mt-4">
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Subscription terms
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Price policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#D1D1D1]">
                  Bug bounty
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <h2 className="text-violet leading-6 text-lg font-normal">
            Mobile App
          </h2>
          <div className="flex flex-col items-start gap-4 mt-4">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#441F84',
                textTransform: 'capitalize',
                borderRadius: '30px',
                padding: '0',
              }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5">
                <img src="/icons/apple-logo.svg" className="w-8 h-8" />
                App Store
              </div>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#441F84',
                textTransform: 'capitalize',
                borderRadius: '30px',
                padding: '0',
              }}
            >
              <div className="flex items-center gap-2 px-4 py-2.5">
                <img src="/icons/google-play-logo.svg" className="w-6 h-6" />
                Google Play
              </div>
            </Button>
          </div>
        </div>
        <div className="">
          <h2 className="text-violet leading-6 text-lg font-normal">Media</h2>
          <div className="flex  items-start gap-4 mt-4 flex-wrap w-full md:w-20">
            <a href="#" className="">
              <img src="/icons/twitter-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icons/discord-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icons/email-icon.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icons/instagram-logo.svg" alt="" />
            </a>
            <a href="#">
              <img src="/icons/steam-logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    {/* gap placeholder for fixed nav */}
    <div className="w-screen h-[4.5rem] block lg:hidden"></div>
  </>
)

export default Footer
