import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import ProductList from "./components/main/ProductList";
import Details from "./components/details/Details";
import Default from "./components/page404/Default";
import Modal from "./components/main/Modal";
import Cart from "./components/cart/Cart";
import Footer from "./components/main/Footer";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

        <Modal />
        <Footer />
      </>
    );
  }
}

export default App;
