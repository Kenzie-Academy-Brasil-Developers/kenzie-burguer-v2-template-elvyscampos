import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from '../components/ProtectionRouter/indexShop';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShopPage from '../pages/ShopPage';

// eslint-disable-next-line arrow-body-style
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/shop' element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
