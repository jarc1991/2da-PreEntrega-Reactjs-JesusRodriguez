import './itemDetailContainer.css'
import {useState, useEffect} from 'react'
import { dataId } from '../async-mocks'
import ItemDetail from './itemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {

        dataId(15)
            .then(response => {

                setProduct(response)

            })
            .catch(error => {

                console.error(error)

            })

    }, [])

  return (

    <div className='itemDetailContainer'>
    
        <ItemDetail {...product}/>
        
    </div>

  )

}

export default ItemDetailContainer