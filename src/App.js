import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmptyCart from './components/EmptyCart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';


const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./components/Cart'));
const Menus = lazy(() => import('./components/Menus'));
const Success = lazy(() => import('./pages/Success'));

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/menus' element={<Menus />} />
              <Route path='/success' element={<Success />} />
              <Route path='/emptyCart' element={<EmptyCart />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
