import React, { useRef } from "react";
import Logo from "../../Elements/svgs/Logo";
import { NavLink } from "react-router-dom";

// Stylesheet
import "./navStyles.css";
import UserPopup from "./UserPopup";
import ProfileSvg from "../../Elements/svgs/ProfileSvg";

function Navbar() {
  const modalRef = useRef();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-2">
      <div className="container-fluid">
        <div
          className="navbar-brand d-flex align-items-center"
          style={{ gap: "0.3em" }}
        >
          <Logo />
          <h4 className="m-0 fw-2">Parish Portal</h4>
        </div>
        <ul
          className="navbar-nav ms-auto align-items-center"
          style={{ gap: "1.6em", fontSize: "0.95rem" }}
        >
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/parish" className="nav-link">
              Parish
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/groups" className="nav-link">
              Groups
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/members" className="nav-link">
              Members
            </NavLink>
          </li>
          <li
            className="nav-item "
            onClick={() => {
              modalRef.current.classList.toggle("modal__hidden");
            }}
            style={{
              cursor: "pointer",
            }}
          >
            {/* <img src="./profile.png" alt="Profile Pic" /> */}
            <ProfileSvg/>
          </li>
          <UserPopup modalRef={modalRef} />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
