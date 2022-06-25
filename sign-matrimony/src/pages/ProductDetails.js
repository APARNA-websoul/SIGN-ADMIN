import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const {id} = useParams();
  const [posts, setPosts] = useState({})
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`https://fakestoreapi.com/products/${id}`)
        const body = await result.json()
        setPosts(body)
        
        debugger
      } catch (err) {
        // error handling code
      }
    }

    // call the async fetchData function
    fetchData()
  }, [])

  debugger
  return (
    <div className='product-details-container'>
      <div className='product-name'>category:{posts.category}</div>
      <img
        src={posts.image}
        alt=''
        className='product-image-details'
      ></img>
      <div className='product-name'>Description:{posts.description} </div>
      <div className='product-name'>price:{posts.price}</div>
      <div className='product-name'>title:{posts.title} </div>
      <button type='button' class='btn btn-primary'>
        Buy Now
      </button>
    </div>
  )
}

export default ProductDetails