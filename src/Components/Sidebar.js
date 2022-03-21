import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { FaShoppingCart, FaUserPlus, FaUserMinus } from "react-icons/fa";
import { useProductsContext } from "../Context/ProductsProvider";
import { useCartContext } from "../Context/CartProvider";
import { useUserContext } from "../Context/UserProvider";
const Sidebar = () => {
  const { isSideBarOpen, closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { myUser, loginWithRedirect, logout } = useUserContext();
  return (
    <section
      className={
        isSideBarOpen ? "sidebar-overlay show-sidebar" : "sidebar-overlay"
      }
    >
      <div className="Sidebar-header">
        <Link to="/" className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <button type="button" onClick={closeSidebar}>
          <FaTimes className="bars-icon" />
        </button>
      </div>
      <div className="sidebar-body">
        <Link to="/" className="link" onClick={closeSidebar}>
          Home
        </Link>
        <Link to="/about" className="link" onClick={closeSidebar}>
          About
        </Link>
        <Link to="/products" className="link" onClick={closeSidebar}>
          Products
        </Link>
        {myUser && (
          <Link to="/checkout" className="link" onClick={closeSidebar}>
            Checkout
          </Link>
        )}
      </div>
      <div className="sidebar-footer">
        <Link to="/cart" className="cart-nav link" onClick={closeSidebar}>
          Cart <FaShoppingCart className="cart-icon" />
          <p className="pill">{total_items}</p>
        </Link>
        {myUser ? (
          <button
            className="login-nav"
            onClick={() => {
              logout({ returnTo: window.location.origin });
              clearCart();
              closeSidebar();
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
    </section>
  );
};

export default Sidebar;
