import {useNavigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useEffect } from 'react';
import { AppProps } from '../interfaces/AppProps';

const ProtectedRoute = ({ children }:AppProps):JSX.Element => {
  const authContext = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext?.user) {
      navigate('/login');
    }
  }
  , [navigate,authContext?.user]);
  return <>{authContext?.user ? children : null}</>;

}

export default ProtectedRoute;