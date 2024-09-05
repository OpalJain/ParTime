import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderNavContent from "./HeaderNavContent";
import LoginPopup  from "../common/form/login/LoginPopup";

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const openLoginModal = () => {
    setIsRegister(false);
    setIsModalVisible(true);
  };

  const openRegisterModal = () => {
    setIsRegister(true);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <header className={`main-header ${navbar ? "fixed-header animated slideInDown" : ""}`}>
      <div className="main-box">
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              {/* Logo can be added here */}
            </div>
          </div>
          <HeaderNavContent />
        </div>
        <div className="outer-box">
        <div>
      <div className="btn-box">
        <button onClick={openLoginModal} className="theme-btn btn-style-three">
          Login
        </button>
        <button onClick={openRegisterModal} className="theme-btn btn-style-four">
          Register
        </button>
      </div>

      {/* Render the LoginPopup modal with visibility control */}
      <LoginPopup
        isVisible={isModalVisible}
        onClose={closeModal}
        isRegister={isRegister}
      />
    </div>

          <div className="btn-box">
         {/*  <button onClick={openModal} className="theme-btn btn-style-three call-modal">
              Login / Register
            </button> */}
            <LoginPopup show={isModalVisible} onClose={closeModal} />
            <a href="/employers-dashboard/post-jobs" className="theme-btn btn-style-one">
              Job Post
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
