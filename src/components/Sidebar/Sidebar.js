import React, { useEffect } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useState, useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../../store/sidebarSlice";
import { FaTimes } from "react-icons/fa";
// get all category
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
      <button
        type="button"
        className="sidebar-hide-btn"
        onClick={() => dispatch(setSidebarOff())}
      >
        <FaTimes />
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          All Categories
        </div>
        <ul className="cat-list">
          {categories.map((category, idx) => (
            <li key={idx}>
              <Link
                to={`category/${category}`}
                className="cat-list-link text-capitalize"
              >
                {category.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
