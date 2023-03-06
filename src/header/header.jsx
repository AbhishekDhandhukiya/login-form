import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  return (
    <div className="header-container">
      <div className="link-app">
        <Button onClick={logout} type="link" className="btn-logout">
          LogOut
        </Button>
        <Link to="/loop" className="page">
          Loop
        </Link>
        <Link to="/list" className="page">
          List
        </Link>
      </div>
    </div>
  );
}

export default Header;
