import { useState } from "react";
import { NavLink } from "react-router-dom";

// IMPORTING CSS AND COMPONENTS---------------------------------------------------
import "./navbar.css";

// IMPORTING IMAGE --------------------------------------
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";

// COMPONENT --------------------------------------------
const Navbar = (props) => {
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
            <h1>Name</h1>
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
            <NavLink to="/customer_support" className="links">
              Customer Support
            </NavLink>
            <NavLink to="/contact" className="links">
              Contact
            </NavLink>
          </div>
          <div className="sec2component" id="navLogCon">
            <button id="login" onClick={props.showLSform}>
              Login
            </button>
            <NavLink to="/cart" id="cart">
              <LocalMallIcon />
            </NavLink>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
