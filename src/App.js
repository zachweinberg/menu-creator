import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import SelectionScreen from "./components/MenuCreator/SelectionScreen";
import MainForm from "./components/MenuCreator/MainForm";
import LoginForm from "./components/Login/LoginForm";

class App extends Component {
  state = {
    authUser: null
  };

  setSession = user => {
    this.setState({
      authUser: user
    });
  };

  render() {
    return (
      <>
        <Router>
          <div>
            <Header authUser={this.state.authUser} />
            <div className="container">
              <Route
                exact
                path="/"
                render={props => (
                  <LoginForm
                    {...props}
                    setSession={this.setSession}
                    authUser={this.state.authUser}
                  />
                )}
              />
              <Route
                exact
                path="/select"
                render={props => (
                  <SelectionScreen
                    {...props}
                    setSession={this.setSession}
                    authUser={this.state.authUser}
                  />
                )}
              />
              <Route
                exact
                path="/create"
                render={props => (
                  <MainForm
                    {...props}
                    setSession={this.setSession}
                    authUser={this.state.authUser}
                  />
                )}
              />
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
