import Register from "../register/Register";
import FormContent from "./FormContent";
import React from 'react';

const LoginPopup = ({ isVisible, onClose, isRegister }) => {
  return (
    <>
      {isVisible && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
            <div className="modal-content">
              <button
                type="button"
                className="closed-modal"
                onClick={onClose}
              ></button>
              <div className="modal-body">
                {isRegister ? (
                  <div id="register-modal">
                    <div className="login-form default-form">
                      <Register />
                    </div>
                  </div>
                ) : (
                  <div id="login-modal">
                    <div className="login-form default-form">
                      <FormContent />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default LoginPopup;
