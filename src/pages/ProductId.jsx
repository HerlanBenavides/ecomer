import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/home/CardProducts/CardProduct'
import ProductInfo from '../components/home/CardProducts/productId/ProductInfo'
import SimilarProducts from '../components/home/CardProducts/productId/SimilarProducts'
import SliderProducts from '../components/home/CardProducts/productId/SliderProducts'

const ProductId = () => {

  const [product, setProduct] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [id])


  return (
    <div>
      {
        product && <SliderProducts product={product} />
      }
      <ProductInfo product={product} />
      <SimilarProducts product = {product} />
      
    </div>
  )
}

export default ProductId