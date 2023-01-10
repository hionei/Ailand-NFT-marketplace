import React from 'react'

const DetailsPill = (props: any) => {
  return (
    <div className="p-3 bg-[#3E2A5F] rounded-full px-6 shadow-xl">
      <p className="text-[#AB7BFF]">{props.title}</p>
      <p className="text-white mt-1">{props.content}</p>
    </div>
  )
}

export default DetailsPill
