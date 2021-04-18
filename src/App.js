import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Products from './components/Products/Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import ControlPD from './components/Dashboard/ControlPD/ControlPD';
import AllDoctor from './components/Dashboard/AllDoctor/AllDoctor';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import Admin from './components/Dashboard/Admin/Admin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/products">
            <Products></Products>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allDoctors">
            <AllDoctor></AllDoctor>
          </PrivateRoute>
          <PrivateRoute path="/allProducts">
            <ControlPD></ControlPD>
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
