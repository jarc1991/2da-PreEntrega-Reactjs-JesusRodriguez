import './itemDetail.css'
import ItemCount from './itemCount'
const ItemDetail = ({ nombre, img, categoria, precio, stock, detalle, alt }) => {

  return (

    <div className='product'>

        <h2>{nombre}</h2>
        <img src={img} alt={alt} className='product__Img'></img>
        <p className='product__Price'>Precio: $ {precio}</p>
        <p>Categoria: {categoria}</p>
        <p>Stock disponible: {stock}</p>
        <p><strong>Detalle del producto: {detalle}</strong></p>

        
        <ItemCount  initial={1} stock={stock} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)}/>

    </div>


  )

}

export default ItemDetail