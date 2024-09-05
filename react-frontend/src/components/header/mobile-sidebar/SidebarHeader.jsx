import React from "react";

const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <a href="/">
      <img src="/images/logo.svg" alt="brand" width="154" height="50" />
      </a>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
