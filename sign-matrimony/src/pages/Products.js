import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Products = (props) => {
  const [product, setProduct] = useState([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`https://fakestoreapi.com/products`)
        const body = await result.json()
        setProduct(body)
        setLoding(false)
        debugger
      } catch (err) {
        // error handling code
      }
    }

    // call the async fetchData function
    fetchData()
  }, [])

  return (
    <React.Fragment>
      {loading ? (
        <div className='loader'>
          LOADING...
        </div>
      ) : (
        <div className='product'>
          {product.map((data) => (
            <NavLink
              to={{
                pathname: `/product-details/${data.id}`,
                state: { ProductData: data },
              }}
              style={{ fontWeight: 'bolder' }}
            >
              <div key={data.id} className='product-item'>
                <div className='product-name'>{data.category}</div>
                <img src={data.image} alt='' className='product-image'></img>
                <div className='product-price'>price:${data.price}</div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default Products