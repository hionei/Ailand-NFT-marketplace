import React from 'react'
import DetailsPill from '../DetailsPill'
import LaunchIcon from '@mui/icons-material/Launch'

const About = () => {
  return (
    <div className="p-3">
      <p className="mt-2">Description</p>
      <p className="text-white mt-2">
        AMBER is a Metaverse and NFT game with a variety of battle modes in
        which NFTs are your digital property: characters, weapons, vehicles,
        real estate, land. The first 8888 unique 3D NFT avatars are your entry
        into a new virtual game world, your blockchain 'soul'.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <DetailsPill title="Store" content="client12342.buying.near" />
        <DetailsPill title="Minter" content="client.near" />
        <DetailsPill title="Type" content="3D-object" />
        <DetailsPill title="Minted NFTs" content="1" />
        <DetailsPill title="Listed NFTs" content="1" />
        <DetailsPill title="Token ID" content="#23476" />
        <DetailsPill title="Owner" content="client.near" />
      </div>
      <a
        href="#"
        className="flex items-center justify-center text-center text-[#AB7BFF] mt-3"
      >
        Website <LaunchIcon className="p-0.5" />
      </a>
    </div>
  )
}

export default About
