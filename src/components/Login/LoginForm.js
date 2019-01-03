import React, { Component } from "react";
import firebase from "../../config/firebase";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  onSubmit = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        if (user.user.email === "menu@tapapps.support") {
          this.props.setSession(user);
          this.props.history.push("/select");
        } else {
          this.setState({ error: "Invalid account." });
        }
      })
      .catch(err => this.setState({ error: err }));
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 m-auto">
          <h2 className="text-center mb-3">Log In</h2>
          <form onSubmit={this.onSubmit}>
            {this.state.error && (
              <p style={{ color: "red", textAlign: "center" }}>Invalid login</p>
            )}
            <div className="form-group">
              <input
                className="form-control form-control-lg text-center"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg text-center"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
