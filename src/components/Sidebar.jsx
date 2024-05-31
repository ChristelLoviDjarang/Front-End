import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    const sidebarStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: "0",
      left: "0",
      height: "100%",
      width: "250px",
      backgroundColor: "#001F3F",
      color: "#fff",
    };

    const listItemStyle = {
      width: "100%",
      textAlign: "center",
      marginBottom: "20px", // Menambahkan jarak antara tombol
    };

    const buttonStyle = {
      background: "linear-gradient(90deg, #FF00FF, #00FFFF)",
      //backgroundSize: "auto",
      backgroundClip: "border-box",
      WebkitBackgroundClip: "text",
      backgroundSize: "300% 300%",
      fontSize: "30px", // Ubah ukuran font sesuai kebutuhan
      WebkitTextFillColor: "transparent",
    };

    const buttonHoverStyle = {
      backgroundColor: "#777",
    };

    return (
      <div className="sidebar ruth" style={sidebarStyle}>
        <div
          className="sidebar-header"
          style={{ padding: "20px", textAlign: "center" }}
        >
          {/* <h3></h3> */}
        </div>
        <ul
          className="list-unstyled"
          style={{ paddingLeft: "0", listStyle: "none", width: "100%" }}
        >
          <li style={listItemStyle}>
            <NavLink to="/" style={buttonStyle} activeStyle={buttonHoverStyle}>
              Home
            </NavLink>
          </li>
          <li style={listItemStyle}>
            <NavLink
              to="/chatbot"
              style={buttonStyle}
              activeStyle={buttonHoverStyle}
            >
              Chatbot
            </NavLink>
          </li>
          <li style={listItemStyle}>
            {/* <NavLink
              to="/about"
              style={buttonStyle}
              activeStyle={buttonHoverStyle}
            >
              About
            </NavLink> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
