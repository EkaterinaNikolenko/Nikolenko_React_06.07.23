import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import NoPage from './components/NoPage/NoPage';
import Categories from './components/Categories/Categories'

const ShopRouters = () => {
  return (
    <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="categories/:id" element={<Categories />}/>  
          <Route path="*" element={<NoPage />} />
          {/* TODO */}
          {/* <Route path="profile" element={<Profile />} />
          <Route path="bucket" element={<Bucket />} />
           */}
        </Route>
    </Routes>
  )
};

export default ShopRouters;