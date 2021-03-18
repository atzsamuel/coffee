import React, { PureComponent } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import CheckBox from '../../../shared/components/form/CheckBox';

class LogInForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { showPassword } = this.state;

    return (
      <div>
        <form className="form">
          <div className="form__form-group">
            <span className="form__form-group-label">Username</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <input
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Password</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <KeyVariantIcon />
              </div>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <button
                className={`form__form-group-button${showPassword ? ' active' : ''}`}
                onClick={e => this.showPassword(e)}
                type="button"
              ><EyeIcon />
              </button>
            </div>
            <div className="account__forgot-password">
              <a href="/">Forgot a password?</a>
            </div>
          </div>
          <div className="form__form-group">
            <div className="form__form-group-field">
              <CheckBox name="remember_me" label="Remember me" value="on" onChange={() => { }} />
            </div>
          </div>
          <Link className="btn btn-primary account__btn account__btn--small" to="/pages/usuarios">Login</Link>
          <Link className="btn btn-outline-primary account__btn account__btn--small" to="/log_in">Crear cuenta</Link>
          <Link className="btn btn-primary account__btn account__btn--small" to="/home">Home</Link>
        </form>
      </div>
    );
  }
}

export default LogInForm;
