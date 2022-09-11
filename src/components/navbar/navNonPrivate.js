import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css"
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from "../../assets/logo.png"



const NavNonPrivate = () => {
  const navigate = useNavigate()
  // this will toggle the visibility of responsive navbar
  const [state, update] = useState("section2");
  function toggle() {
    if (state == "section2") {
      update("section2 visible");
    }
    if (state == "section2 visible") {
      update("section2");
    }
  }
  return (
    <section
      className="navBack"
      onClick={() => {
        document.documentElement.scrollTop = 0;
      }}
    >
      <nav className="navCon">
        <div className="section1">
          <NavLink to="/" className="navLogoCon">
          <img src={logo} alt='Logo' />
            <h1>Food-cart</h1>
          </NavLink>
          <div className="navResCon">
            <button id="responsiveBtn" onClick={toggle}>
              <MenuIcon />
            </button>
          </div>
        </div>

        <div className={state}>
          <div className="sec2component" id="navLinkCon">
            <div className="links dropdown">
              <NavLink to="/" className="linksProducts">
                Products
              </NavLink>
            </div>
            <NavLink to="/about" className="links">
              About
            </NavLink>
            <NavLink to="/contact" className="links">
              Contact
            </NavLink>
          </div>
          <div className="sec2component" id="navLogCon">
            <button id="login" onClick={()=>{navigate("/login")}}>
              Login
            </button>            
          </div>
        </div>
      </nav>
    </section>
  );  
};

export default NavNonPrivate;
