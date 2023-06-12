import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { data } from '../async-mocks'
import ItemList from './itemList'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

    useEffect(() => {

      data()
        .then(response => {

          setProducts(response)

        })
        .catch(error => {

          console.error(error)

        })

    }, [])

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