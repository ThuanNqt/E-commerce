import "./App.scss";
// react router v6
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// page
import {
  Home,
  Cart,
  CategoryProduct,
  ProductSingle,
  Search,
} from "./pages/index";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
