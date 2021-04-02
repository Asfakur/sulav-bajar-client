
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";
import DashBoard from "./components/Admin/DashBoard";

export const UserContext = createContext(); //must be export 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
          <Header/>
          
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/admin">
              <DashBoard></DashBoard>
            </Route>  

            <PrivateRoute path="/product/:productId">
              <Checkout></Checkout>
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/">
              <Home />
            </Route>


          </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
