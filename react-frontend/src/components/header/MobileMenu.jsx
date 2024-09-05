import MobileSidebar from "./mobile-sidebar";

const MobileMenu = () => {
  return (
    <header className="main-header main-header-mobile">
      <div className="auto-container">
        <div className="inner-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                {/* Logo can be added here */}
              </div>
            </div>
            <MobileSidebar />
          </div>
          <div className="outer-box">
            <div className="login-box">
              <a href="#" className="call-modal" data-bs-toggle="modal" data-bs-target="#loginPopupModal">
                <span className="fas fa-user"></span>
              </a>
            </div>
            <a href="#" className="mobile-nav-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
              <span className="flaticon-menu-1"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;