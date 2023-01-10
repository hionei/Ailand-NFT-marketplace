import React from 'react'
import DetailsPill from '../DetailsPill'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
const Splits = () => {
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <DetailsPill title="Forever Royalties" content="14.5%" />
        <DetailsPill title="Split Revenue" content="83%" />
        <DetailsPill title="Market" content="2.5%" />
      </div>

      <div className="flex flex-col items-start gap-3 mt-6">
        <p>Forever Royalities Account</p>

        <AvatarGroup total={4}>
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#8E52F5' }} />
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#AB7BFF' }} />
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#8E52F5' }} />
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#AB7BFF' }} />
        </AvatarGroup>
      </div>

      <div className="flex flex-col items-start gap-3 mt-4">
        <p>Split Revenue Account</p>

        <AvatarGroup total={4}>
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#8E52F5' }} />
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#AB7BFF' }} />
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#8E52F5' }} />
          <Avatar alt=" " src="/" sx={{ backgroundColor: '#AB7BFF' }} />
        </AvatarGroup>
      </div>
    </div>
  )
}

export default Splits
