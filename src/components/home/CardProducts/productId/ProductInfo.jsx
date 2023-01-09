import React, { useState } from 'react'
import './style/productInfo.css'

const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState (1)

    const handleMinus = () =>{
        if(counter - 1 > 0){
            setCounter(counter-1)
        }
        
    }

    const handlePlus = () => {

        setCounter (counter +  1)
    }

    return (
        <article className='product-info'>
            
            <h2 className='product-info_title'>{product?.title}</h2>
            <p className='product-info_description'>{product?.description}</p>
            <footer className='product-info_footer'>
                <div className='product-info_price-container'>
                    <h3 className='product-info_price-label'>price</h3>
                    <span className='product-info_price-number'>{product?.price}</span>
                </div>
                <div className='product-info_quantity-container'>
                    <h3 className='product-info_quantity-label'>Quantity</h3>
                    <div className='counter'>
                        <div onClick={handleMinus} className='counter_minus'>-</div>
                        <div className='counter_number'>{counter}</div>
                        <div onClick={handlePlus} className='counter_plus'>+</div>
                    </div>
                </div>
                <button className='product-info_btn'>Add to Cart
                    <i className="product_icon fa-solid fa-cart-shopping"></i>
                </button>
            </footer>
        </article>
    )
}

export default ProductInfo