import './itemDetailContainer.css'
import {useState, useEffect} from 'react'
import { dataId } from '../async-mocks'
import ItemDetail from './itemDetail'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        dataId(itemId)
            .then(response => {

                setProduct(response)

            })
            .catch(error => {

                console.error(error)

            })

    }, [itemId])

  return (

    <div className='itemDetailContainer'>
    
        <ItemDetail {...product}/>
        
    </div>

  )

}

export default ItemDetailContainer