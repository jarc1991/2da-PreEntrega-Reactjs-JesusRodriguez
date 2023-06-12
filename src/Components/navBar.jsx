import CardWid from './cardWidget'
import './navBar.css'

const NavBar = () => {
  return (
    
    <>

    <nav>

      <div className='navContainer'>

            <h3 className="titleNav">Adele Store</h3>

                  <button className="btn__nav">Indumentaria</button>
                  <button className="btn__nav">Discos</button>
                  <button className="btn__nav">Deportes</button>
                  <button className="btn__nav">Box</button>

            <CardWid className="Card"/>

      </div>

    </nav>

    </>
  )
}

export default NavBar