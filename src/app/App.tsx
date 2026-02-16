import React from "react";
import "../css/app.css";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { About } from "./screens/About";
import { Users } from "./screens/Users";
import { Container } from "@mui/material";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";

 function App() {
  const location = useLocation();
  console.log("location:", location);

  return (
      <>
        { location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
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
        <Footer />
      </>
  );
}


export default App;




