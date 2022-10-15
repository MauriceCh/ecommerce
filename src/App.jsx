
import { HashRouter, Route, Routes } from 'react-router-dom'
import "./styles.css";
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import Purchases from './pages/Purchases'
import MyNavBar from './componnets/MyNavBar';
import LoadingScreen from './componnets/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from './store/slices/products.slice';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ProtectedRoutes from './componnets/ProtectedRoutes';

function App() {
  const isLoading =useSelector(state => state.isLoading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk())
}, [])
  return (
    <HashRouter>
      <MyNavBar />
      {isLoading && <LoadingScreen />}
      <Container className="mt-5" >
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Product/:id" element = {<Product />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/Purchases" element = {<Purchases />} />
        </Route> 
        
      </Routes>
      </Container>
      
    </HashRouter>
  );
}

export default App

