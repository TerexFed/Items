import React, { useContext } from 'react'
import { Context } from '../context/Context'
import Stars from './Stars'


function ProductsItem({ data }) {

  const { removeProduct } = useContext(Context)


  return (
    <div className='ProductsItem' onDoubleClick={() => removeProduct(data.id)}>
      <img src={data.images[0]} alt='' ></img>
      <h2>Title: {data.title}</h2>
      <h3>Price: {data.price}</h3>
      <Stars rating={data.rating} />
    </div>
  )
}

export default ProductsItem