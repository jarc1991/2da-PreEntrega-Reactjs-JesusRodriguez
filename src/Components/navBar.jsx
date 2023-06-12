import CardWid from './cardWidget'
import './navBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <>

    <nav>

      <div className='navContainer'>

            <Link to='/'>
            <h3 className="titleNav">Adele Store</h3>
            </Link>

            <NavLink to={`/categoria/indumentaria`}><button className="btn__nav">Indumentaria</button></NavLink>
            <NavLink to={`/categoria/discos`}><button className="btn__nav">Discos</button></NavLink>
            <NavLink to={`/categoria/deportes`}><button className="btn__nav">Deportes</button></NavLink>
            <NavLink to={`/categoria/box`}><button className="btn__nav">Box</button></NavLink>

                  

            <CardWid className="Card"/>

      </div>

    </nav>

    </>
  )
}

export default NavBar

/*<button className="btn__nav">Indumentaria</button>
<button className="btn__nav">Discos</button>
<button className="btn__nav">Deportes</button>
<button className="btn__nav">Box</button>*/