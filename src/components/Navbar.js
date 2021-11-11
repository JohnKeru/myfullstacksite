import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import {
  DarkAndGreen,
  GreenAndDark,
  disableBodyScroll,
  enableBodyScroll,
} from "../themes";
import { loggingOut, signOut } from "./axiosServices";

const Navbar = ({ isLog, setIsLog, role, setRole, changeTheme }) => {
  const [up, setUp] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const history = useHistory();
  const location = useLocation();
  function loggingout() {
    loggingOut({ active: false }).then(() => {
      setTimeout(() => {
        signOut();
        setRole("");
        setIsLog(false);
        history.push("/");
        enableBodyScroll();
        setLogOut(false);
      }, 2000);
      disableBodyScroll();
      setLogOut(true);
    });
  }
  function removeTopNav() {
    if (window.scrollY > 805) setUp(true);
    else setUp(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", removeTopNav);
    return () => window.removeEventListener("scroll", removeTopNav);
  }, []);
  return (
    <>
      <DarkAndGreen className="This_is_Navbar_Container" id='top'>
        <div className="This_is_For_Logo">
          <img src="icons/SchoolLogo.png" alt="logo" />
        </div>
        <GreenAndDark
          className="This_is_For_Navigation">
          <ul className="ulList">
            <div
              className={location.pathname === "/" ? "exact" : "navImage"}
              onClick={() => history.push("/")}
            >
              <img src="icons/whiteHouse.png" alt="" />
              <li>Home</li>
            </div>
            {isLog && (
              <div
                className={
                  location.pathname === "/profile" ? "exact" : "navImage"
                }
                onClick={() => history.push("/profile")}
              >
                <img src="icons/profile.png" alt="" />
                <li>Profile</li>
              </div>
            )}
            {role === "ROLE_ADMIN" && (
              <div
                className={
                  location.pathname === "/admin-page" ? "exact" : "navImage"
                }
                onClick={() => history.push("/admin-page")}
              >
                <img src="icons/list.png" alt="" />
                <li>Records</li>
              </div>
            )}
            {isLog ? (
              <div onClick={() => loggingout()} className="navImage">
                <img src="icons/logout.png" alt="" />
                <li className="navList">Logout</li>
              </div>
            ) : (
              <div
                onClick={() => history.push("/login")}
                className={
                  location.pathname === "/login" ? "exact" : "navImage"
                }
              >
                <img src="icons/login.png" alt="" />
                <li>Login</li>
              </div>
            )}
          </ul>
        </GreenAndDark>
      </DarkAndGreen>
      <img
        className={!up ? "theme_Icon" : "fixed_Icon"}
        onClick={() => changeTheme()}
        src="icons/theme.png"
        alt=""
      />
      {logOut && (
        <div className="loggingOut">
          <div>
            <h3>Logging out...</h3>
            <img src="icons/loggingout.gif" alt="" />
          </div>
        </div>
      )}
      {up && <a href='#top' className='scrollUp'>Scroll Up</a>}
    </>
  );
};
export default Navbar;
