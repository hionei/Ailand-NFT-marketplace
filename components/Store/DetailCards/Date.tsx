import React from 'react'
import DetailsPill from '../DetailsPill'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
const Date = () => {
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <DetailsPill title="End Date" content="2022.12.21" />
        <DetailsPill title="Start Date" content="2022.12.14" />
      </div>
    </div>
  )
}

export default Date
