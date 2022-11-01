import { AppProps } from '../interfaces/AppProps';
import ProtectedRoute from './ProtectedRoute';
import { Outlet } from 'react-router-dom';

import Header from './Header';

const Layout = ():JSX.Element => {
  return (
    <ProtectedRoute>
      <div className='flex flex-col items-center w-screen h-screen'>
        <Header />
        <div className='w-3/4'>
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  )

}

export default Layout;