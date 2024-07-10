import { Suspense,lazy } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import EmptyCart from './components/EmptyCart';
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./components/Cart'));
const Menus = lazy(() => import('./components/Menus'));
const Success = lazy(() => import('./pages/Success'));

function App() {

  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Suspense fallback ={<div>loading...</div>}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path= '/menus' element={<Menus/>}/>
       <Route path='/success' element={<Success/>}/>  
       <Route path = '/emptyCart' element={<EmptyCart/>}/>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
