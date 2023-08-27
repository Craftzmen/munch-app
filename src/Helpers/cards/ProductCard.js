import React from 'react'

const ProductCard = (props) => {
  return (
    <div className={props.className} >
      {props.children}
    </div>
  )
}

export default ProductCard
