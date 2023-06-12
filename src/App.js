import './App.css';
import ItemDetailContainer from './Components/itemDetailContainer';
import ItemListContainer from './Components/itemListContainer';
import NavBar from './Components/navBar';

function App() {

  return (

    <div className='app'>

      <NavBar />

      <ItemListContainer greeting={'Bienvenidos a la tienda de Adele'}/>
      <ItemDetailContainer />

    </div>

  );
}

export default App;
