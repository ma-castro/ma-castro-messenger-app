import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import useLogic from './logic';
import Login from './Login';
import ResetPassword from './ResetPassword';

const Guest = () => {
  const navigate = useNavigate();
  const { pathname } = useLogic();

  useEffect(() => {
    navigate('/login');
  }, [pathname, navigate]);

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
  );
};

export default Guest;
