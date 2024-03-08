import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ShopRouters from "./ShopRouters";
import { useEffect } from "react";
import { getProductsFromBE } from './store/products/productsRequest';
import {useDispatch} from 'react-redux';
import LoginModal from './modals/Login/LoginModal'


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getProductsFromBE(dispatch);
  },[dispatch]) 

  return (
      <BrowserRouter>
        <LoginModal/>
        <ShopRouters />
      </BrowserRouter> 
  );
}

export default App;