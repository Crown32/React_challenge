import { AppProps } from '../interfaces/AppProps';
import ProtectedRoute from './ProtectedRoute';
import { Outlet } from 'react-router-dom';

const Layout = ():JSX.Element => {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  )

}

export default Layout;