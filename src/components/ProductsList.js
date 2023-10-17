import React, { useContext } from 'react'
import { Context } from '../context/Context'
import ProductsItem from './ProductsItem'

function ProductsList() {

  const { products } = useContext(Context)

  return (
    <div className='ProductsList'>
        {products.map(el => (
          <ProductsItem 
          key={el.id} 
          data={el}
          />
        ))}
    </div>
  )
}

export default ProductsList
