import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Login from '../pages/Login';
import Layout from '../components/Layout';
import { AuthContextProvider } from '../contexts/AuthContext';

export const MainRouter = (): JSX.Element => {

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default MainRouter;