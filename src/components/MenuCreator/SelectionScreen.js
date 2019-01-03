import React, { Component } from "react";
import firebase from "../../config/firebase";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner/Spinner";

class SelectionScreen extends Component {
  state = {
    restaurant_ids: [],
    loading: true
  };

  componentDidMount() {
    if (this.props.authUser == null) {
      this.props.history.push("/");
    }
    firebase
      .database()
      .ref(`/restaurants`)
      .on("value", snapshot => {
        if (this.isUnmounted) {
          return;
        }
        this.setState({
          restaurant_ids: snapshot.val(),
          loading: false
        });
      });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    const options = Object.keys(this.state.restaurant_ids).map(
      (item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      )
    );

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 m-auto text-center">
            <Link to="/create">
              <button type="button" className="btn btn-success btn-lg mb-3">
                Create New Restaurant
              </button>
            </Link>
            <br />
            <span>Or edit an existing one below:</span>
            {this.state.loading ? (
              <div>
                <br />
                <Spinner />
              </div>
            ) : (
              <div>
                <select className="mt-3 form-control" id="restaurant_dropdown">
                  {options}
                </select>
                <button className="btn btn-sm btn-primary mt-4">Load</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionScreen;
