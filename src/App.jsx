import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
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
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
     
    </Routes>
  </BrowserRouter>
);
export default App;
