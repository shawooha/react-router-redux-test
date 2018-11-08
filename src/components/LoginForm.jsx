import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { warnTxt: "" };
  }

  checkAuth(login, pass) {
    if(login === "Admin" && pass === "12345") {
      return true;
    }
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();
    const login = this.formLogin.value;
    const pass = this.formPass.value;
    if(this.checkAuth(login, pass)) {
      // login & pass ok
      this.setState({ warnTxt: "" } );
      this.props.dispatch( { type: "USER_LOGGED_IN" });
      // redirect to home
      //this.props.history.push("/"); //this can be accessed when withRouter() used
    } else {
      // login & pass NOT ok
      this.setState({ warnTxt: "Invalid login or password" });
    }
  }

  render() {
    const warn = this.state.warnTxt;
    const { userLogged } = this.props;
    if(userLogged) {
      return (
        <div className="notification is-success">
        Now logged in.
        </div>        
      );
    } else {
      return (
        <form onSubmit={(e) =>this.handleSubmit(e)}>
        {warn ? <div className="notification is-danger">{warn}</div> : "" }
        <div className="field">
          <label className="label">Login:</label>
          <div className="control">
            <input ref={input => this.formLogin = input} className="input" type="text" placeholder="login" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password:</label>
          <div className="control">
          <input ref={input => this.formPass = input} className="input" type="password" placeholder="password" />
          </div>
        </div>

        <div className="field">
          <div className="control">
          <input className="button is-primary" type="submit" value="Log In" />
          </div>
        </div>
        
        </form>
      );
    }
  }
}

export default withRouter(LoginForm);