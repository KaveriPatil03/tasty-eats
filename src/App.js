import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import SingleProduct from './components/SingleProduct';
import Login from './components/admin/login/Login';
import ErrorPage from './components/error/ErrorPage';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Footer from './components/Footer';
import Loader from './components/loader/Loader';
import { useEffect, useState } from 'react';
import Payment from './components/Payment';
import Services from './components/Services';

// import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []);
    
  return (
   <>
   <div>
    {/* <Navbar /> */}
    {/* <Navbar />
    <Hero />
    <HeadlineCards />
    <Food />
    <Category /> */}
    {/* <BrowserRouter> */}
   {loading ? <Loader /> :
    <Routes>
    {/* ADMIN */}
    <Route path="*" element={<ErrorPage />} />
    <Route path='/admin_login' element={<Login />}/>

    <Route
        element={
          <>
            <Navbar />
            <Outlet />
            <Footer />
          </>
        }
      >
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/menu' element={<Menu />}/>
    <Route path='/login' element={<SignIn />}/>
    <Route path='/register' element={<SignUp />}/>
    <Route path='/food/:id' element={<SingleProduct />}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<CheckOut/>}/>
    <Route path='/payment' element={<Payment />}/>
    <Route path='/service' element={<Services />}/>
    </Route>
    
    
  </Routes>}
   
    {/* </BrowserRouter> */}

   </div>
   </>
  );
}

export default App;
