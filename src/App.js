import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products/:catId' element={<ProductPage />} />
        <Route path='/products/detail/:id' element={<ProductDetailPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
