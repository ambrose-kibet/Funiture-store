import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { useProductsContext } from "../Context/ProductsProvider";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { useCartContext } from "../Context/CartProvider";
import { useUserContext } from "../Context/UserProvider";
const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { myUser, loginWithRedirect, logout } = useUserContext();
  return (
    <nav className="nav-container">
      <div className="nav-header">
        <Link to="/" className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <button type="button" onClick={openSidebar}>
          <FaBars className="bars-icon" />
        </button>
      </div>
      <div className="nav-body">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/products" className="link">
          Products
        </Link>
        {myUser && (
          <Link to="/checkout" className="link">
            Checkout
          </Link>
        )}
      </div>
      <div className="nav-footer">
        <Link to="/cart" className="cart-nav link">
          Cart <FaShoppingCart className="cart-icon" />
          <p className="pill">{total_items}</p>
        </Link>

        {myUser ? (
          <button
            className="login-nav"
            onClick={() => {
              logout({ returnTo: window.location.origin });
              clearCart();
            }}
          >
            Logout <FaUserMinus className="icon" />
          </button>
        ) : (
          <button className="login-nav" onClick={loginWithRedirect}>
            Login <FaUserPlus className="icon" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
