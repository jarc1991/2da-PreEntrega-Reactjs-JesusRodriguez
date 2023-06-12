import './App.css';
import ItemDetailContainer from './Components/itemDetailContainer';
import ItemListContainer from './Components/itemListContainer';
import NavBar from './Components/navBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (

    <div className='app'>

        <BrowserRouter>

            <NavBar />
            <Routes>

                <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la tienda de Adele'}/>}></Route>
                <Route path='/categoria/categoriaId' element={<ItemListContainer />}></Route>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
                <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>

            </Routes>

        </BrowserRouter>
      
    </div>

  );
}

export default App;

/*<ItemListContainer greeting={'Bienvenidos a la tienda de Adele'}/>
<ItemDetailContainer />*/
