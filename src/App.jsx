import { Outlet } from "react-router-dom";
import "./App.css";

import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar/Navbar";


function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
       <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
