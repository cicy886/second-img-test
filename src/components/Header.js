import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <h1>Tarot Reader</h1>
      <div className="row">
        <div className="column">
          <Link to="/">Home</Link>
        </div>
        <div className="column">
          <Link to="/cardSpread">Card Spread</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
