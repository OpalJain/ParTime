// src/components/footer/common-footer/FooterContent.jsx
import React from 'react';
import footerContent from '../../../data/footerContent.jsx'; // Ensure this path is correct

const FooterContent = () => {
  return (
    <>
      {footerContent.map((item) => (
        <div
          className="footer-column col-lg-3 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="footer-widget links-widget">
            <h4 className="widget-title">{item.title}</h4>
            <div className="widget-content">
              <ul className="list">
                {item.menuList?.map((menu, i) => (
                  <li key={i}>
                    {/* Use a regular anchor tag since you're not using Next.js */}
                    <a href={menu.route}>{menu.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
