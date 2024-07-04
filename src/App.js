import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import Menus from './components/Menus';
import Success from './pages/Success';
// import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path= '/menus' element={<Menus/>}/>
       <Route path='/success' element={<Success/>}/>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
