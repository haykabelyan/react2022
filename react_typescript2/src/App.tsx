import {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AuthPage } from './pages/AuthPage';

const App = () => {
  return (
    <>
      <div className="container mx-auto pt-4">
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/auth'} element={<AuthPage/>}/>
          <Route path={'/product/:id'} element={<ProductDetailPage/>}/>
        </Routes>
    </div>
  </>
  )
}

export default App
