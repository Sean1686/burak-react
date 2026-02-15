import React from "react";
import "../css/app.css";
import { Link, Route, Switch } from "react-router-dom";
import { About } from "./screens/About";
import { Users } from "./screens/Users";
import { Container } from "@mui/material";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";

 function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UserPage</Link>
            </li>
              <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/products">
            <ProductsPage  />
           </Route>
           <Route path="/orders">
            <OrdersPage />
           </Route>
          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
  );
}


export default App;




