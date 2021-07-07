import React from "react";

const withAuthinticate = App => Login => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    render() {
      if (
        localStorage.getItem("username") &&
        localStorage.getItem("password")
      ) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };
};

export default withAuthinticate;
