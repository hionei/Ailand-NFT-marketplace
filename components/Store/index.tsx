import React from 'react'
import Header from './Header'
import Accordion from './Accordion'
import About from './DetailCards/About'
import Date from './DetailCards/Date'
import Provenance from './DetailCards/Provenance'
import Splits from './DetailCards/Splits'
import Carousel from './Carousel'

const index = () => {
  return (
    <div className="bg-[#181330] min-h-screen">
      <div className="max-w-[1100px] mx-auto p-4">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-3xl  col-span-1 flex justify-center">
            <img
              src="/images/store-image.png"
              alt=""
              className="w-full sm:w-full max-h-none sm:max-h-[35rem] mx-auto"
            />
          </div>
          <div className="col-span-2">
            <Header />
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
          <p className="text-violet mb-4">More from this contract</p>
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default index
