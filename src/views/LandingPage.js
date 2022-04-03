import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import habiLogo from "../assets/habi.svg";
import { DataContext } from "../contexts/UserContext";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { goToForm: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ goToForm: true });
    }, 3000);
  }

  render() {
    const { goToForm } = this.state;

    return !goToForm ? (
      <div className="animation">
        <img src={habiLogo} id="habiLogo" alt="habiLogo" />
      </div>
    ) : (
      <DataContext.Consumer>
        {(value) => <Navigate to={value.routes[0].path} replace />}
      </DataContext.Consumer>
    );
  }
}

export default Login;
