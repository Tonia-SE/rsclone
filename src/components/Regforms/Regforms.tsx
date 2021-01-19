import React from 'react';
//import { useTabIndex } from 'react-tabindex';

const tabIndex:number = -1;


export const LogInForm: React.FC = () => {
  return (
    <div className="modal" tabIndex={tabIndex} id="logInModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        {/* none */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Log in to your account</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter your email address" />
                <small id="emailHelpLogin" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                <small id="emailHelpPassword" className="form-text text-muted">Wrong email or password</small>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" id="loginBtn">Log in</button>
          </div>
        </div>
      </div>
    </div>
  )}
    
  export const SignUpForm: React.FC = () => {
  return (
    <div className="modal" tabIndex={tabIndex} id="signUpModal">
      <div className="modal-dialog" role="document">
        {/* none */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create your account</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="signUpEmail">Email</label>
                <input type="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter your email address" />
                <small id="emailHelpSignUp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="signUpPassword">Password</label>
                <input type="password" className="form-control" id="signUpPassword" placeholder="Password" />
                <small id="signUpHelpPassword" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="signUpConfirmPassword">Confirm your password</label>
                <input type="password" className="form-control" id="signUpConfirmPassword" placeholder="Password" />
                <small id="signUpHelpPasswordConfirm" className="form-text text-muted"></small>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" id="signUpBtn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )}
    
    