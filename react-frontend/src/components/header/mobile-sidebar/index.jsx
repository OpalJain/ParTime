"use client";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import mobileMenuData from "../../../data/mobileMenuData.jsx";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import { useLocation, useNavigate } from 'react-router-dom';

// Utility function to check if a link is active
const isActiveLink = (path, currentPath) => currentPath === path;
const isActiveParentChaild = (items, currentPath) => items.some(item => item.routePath === currentPath);

// Custom hook to get the current pathname
const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const Index = () => {
  const navigate = useNavigate();
  const pathname = usePathname();

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}
      <Sidebar>
        <Menu>
          {mobileMenuData.map((item) => (
            <SubMenu
              className={isActiveParentChaild(item.items, pathname) ? "menu-active" : ""}
              label={item.label}
              key={item.id}
            >
              {item.items.map((menuItem, i) => (
                <MenuItem
                  onClick={() => navigate(menuItem.routePath)}
                  className={isActiveLink(menuItem.routePath, pathname) ? "menu-active-link" : ""}
                  key={i}
                >
                  {menuItem.name}
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sidebar>
      <SidebarFooter />
    </div>
  );
};

export default Index;
