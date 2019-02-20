import React from "react";

//login = () => {};

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            value={this.state.username}
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <button>Log In</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
