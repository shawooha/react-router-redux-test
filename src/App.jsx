import React, { Component } from 'react';
import PropTypes from 'prop-types';
// application
import Home from "./components/Home.jsx";
import News from "./components/News.jsx";
import Profile from "./components/Profile.jsx";
import LoginForm from "./components/LoginForm.jsx";

// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// redux
import { connect } from "react-redux";


class App extends Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.dispatch({ type: "USER_LOGGED_OUT" });
    // here can be redirect to home
  }

  render() {
    return (
      <Router>
      <React.Fragment>

      <section className="section has-background-dark">
        <div className="level">
          <div className="level-left buttons">
              <Link className="button" to="/">Home</Link>
              <Link className="button" to="/news">News</Link>
              <Link className="button" to="/profile">Profile</Link>
          </div>

          <div className="level-right">
            { this.props.userLogged ?
            <button className="button is-primary" onClick={(e) => this.handleLogout(e)}>Log Out</button> :
            <Link className="button is-primary" to="/login">Log In</Link> }
          </div>
        </div>
      </section>

      <section className="section">
        <div className="containter">
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/profile" render={() => <Profile userLogged={this.props.userLogged} /> } />
          <Route path="/login"  render={() => <LoginForm dispatch={this.props.dispatch} userLogged={this.props.userLogged} /> } />
        </div>
      </section>
      </React.Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  userLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    userLogged: state.userLogged,
  }
}

// const mapDispatchToProps = () => {}

export default connect(mapStateToProps)(App);
