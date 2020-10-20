import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "./logo.svg";
import SearchNav from "./SearchNav";
import { NavWrapper } from "./styles/styles";
import { ButtonModel } from "../baseComponents/Button.js";
import { ProductContext } from "../../context";

export default function Navbar() {
  const {
    cleanFilteredSearch,
    cart,
    filteredProducts,
    search,
    setInputSearch,
  } = useContext(ProductContext);

  return (
    <NavWrapper className="navbar navbar-expand-sm align-items-center py-0 px-sm-5">
      <Link to="/" onClick={() => cleanFilteredSearch()}>
        <img src={logo} alt="store logo" className="navbar-brand" />
      </Link>

      <ul className="navbar-nav d-flex flex-row-reverse">
        <li className="nav-item ml-5">
          <HashLink
            to="/#productList"
            onClick={() => {
              cleanFilteredSearch();
            }}
            className="nav-link"
          >
            products
          </HashLink>
        </li>

        <li className="nav-item">
          <SearchNav
            className="nav-link"
            search={search}
            handleInput={setInputSearch}
            filteredProducts={filteredProducts}
          />
        </li>
      </ul>

      <Link to="/cart" className="ml-auto ">
        <ButtonModel>
          <span className="mr-2">
            <span>{cart.length}</span>
            <i className="fas fa-cart-plus" />
          </span>
        </ButtonModel>
      </Link>
    </NavWrapper>
  );
}
