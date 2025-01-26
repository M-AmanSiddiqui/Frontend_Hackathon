import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect} from "react";
import WeddingLoan from "./pages/WeddingLoans";
import HomeConstruction from "./pages/HomeConstruction";
import Business from "./pages/Business";
import Education from "./pages/Education";
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
    <Route path="/education" element={<Education />} />
    <Route path="/weddingloan" element={<WeddingLoan />} />
    
    <Route path="/homeconstruction" element={<HomeConstruction />} />
    
     <Route path="/business" element={<Business />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
export default App;


