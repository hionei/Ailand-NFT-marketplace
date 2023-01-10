import Button from '@mui/material/Button'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const CartBtn = (props: any) => {
  if (props.mobile) {
    return (
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#830A86',
          borderRadius: '100px',
          gap: '10px',
          ':hover': {
            background: '#830A86',
          },
          width: '100%',
        }}
        className="flex justify-between py-3 text-[#FFAEFD]"
        onClick={props.onClick}
      >
        <span>0 &nbsp;&nbsp;$ 0.00</span>
        <ShoppingCartOutlinedIcon />
        <span>$ 0.00 &nbsp;&nbsp; 0</span>
      </Button>
    )
  }

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#830A86',
        borderRadius: '100px',
        gap: '10px',
        ':hover': {
          background: '#830A86',
        },
      }}
      startIcon={<ShoppingCartOutlinedIcon />}
      onClick={props.onClick}
    >
      $ 0.00
    </Button>
  )
}

export default CartBtn
