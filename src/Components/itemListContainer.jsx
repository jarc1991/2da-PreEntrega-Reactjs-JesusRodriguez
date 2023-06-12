import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { data } from '../async-mocks'
import ItemList from './itemList'

import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])
  const {categoriaId} = useParams()

  const categoryFilter = categoriaId ? categoriaId : false;
    useEffect(() => {

      data(categoryFilter) 
        .then(response => {

          setProducts(response)
        })
        .catch(error => {

          console.error(error)
        })

    }, [categoryFilter])

  return (
    
    <div>

      <h1 className='saludo'>{greeting}</h1>
      <h2 className='h2Product'>Estos son los productos:</h2>

      <section className='products__section'>
      
          <div>

            <ItemList products={products}/>

          </div>

      </section>

    </div>


  )
}

export default ItemListContainer

