import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaBagShopping,
  FaMagnifyingGlass,
  FaCartShopping,
} from "react-icons/fa6";
// solve sidebar
import { setSidebarOn } from "../../store/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            onClick={() => dispatch(setSidebarOn())}
            type="button"
            className="sidebar-show-btn text-white"
          >
            <FaBars />
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <FaBagShopping />
            </span>
            <span className="navbar-brand-txt mx-2">
              <span className="fw-7">Shopping</span>
            </span>
          </Link>
        </div>
        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                type="text"
                className="form-control fs-14"
                placeholder="Search your preferred items here"
              />
              <Link
                to=""
                className="text-white search-btn flex align-center justify-center"
              >
                <FaMagnifyingGlass />
              </Link>
            </div>
          </div>
          <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            <li className="nav-item no-wrap">
              <Link to="" className="nav-link text-capitalize">
                Category here
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <FaCartShopping />
            <div className="cart-items-value">0</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
