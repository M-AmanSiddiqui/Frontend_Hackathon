import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect} from "react";
const root = document.getElementById("root");
function ScrollToTop() {
 const location = useLocation();

 useEffect(() => {
   window.scrollTo(0, 0);  
 }, [location]);

 return null;  
}
ReactDOM.createRoot(root).render(
  <BrowserRouter>
<ScrollToTop />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
export default App;


