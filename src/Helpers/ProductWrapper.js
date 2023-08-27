import React from 'react'

const ProductWrapper = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    )
}

export default ProductWrapper
