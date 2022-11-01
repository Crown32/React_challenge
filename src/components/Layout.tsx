import { AppProps } from '../interfaces/AppProps';
import ProtectedRoute from './ProtectedRoute';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = ():JSX.Element => {
  return (
    <ProtectedRoute>
      <Header />
      <div className='flex flex-col items-center w-full h-screen'>
        <div className='w-3/4'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </ProtectedRoute>
  )

}

export default Layout;