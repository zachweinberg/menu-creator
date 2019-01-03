import React, { Component } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import saveToFirebase from "../../helpers/saveToFirebase";

class MainForm extends Component {
  componentDidMount() {
    if (this.props.authUser == null) {
      this.props.history.push("/");
    }
  }
  state = {
    page: 1,
    pageOne: {},
    pageTwo: {},
    pageThree: {},
    pageFour: {},
    pageFive: {}
  };

  prevPage = () => {
    this.setState(state => ({ page: state.page - 1 }));
  };

  nextPage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  saveToPage = (page, values) => {
    this.setState(
      {
        [page]: values
      },
      () => {
        if (page === "pageFive") {
          saveToFirebase({
            ...this.state.pageOne,
            ...this.state.pageTwo,
            ...this.state.pageThree,
            ...this.state.pageFour,
            ...this.state.pageFive
          });
        }
      }
    );
  };

  render() {
    const { page } = this.state;

    switch (page) {
      case 1:
        return <StepOne save={this.saveToPage} next={this.nextPage} />;
      case 2:
        return (
          <StepTwo
            save={this.saveToPage}
            back={this.prevPage}
            next={this.nextPage}
          />
        );
      case 3:
        return (
          <StepThree
            save={this.saveToPage}
            back={this.prevPage}
            next={this.nextPage}
          />
        );
      case 4:
        return (
          <StepFour
            save={this.saveToPage}
            back={this.prevPage}
            next={this.nextPage}
          />
        );
      case 5:
        return (
          <StepFive
            save={this.saveToPage}
            back={this.prevPage}
            next={this.nextPage}
          />
        );
      case 6:
        return <p>Saved</p>;
      default:
        return <div>Unknown Page</div>;
    }
  }
}

export default MainForm;
