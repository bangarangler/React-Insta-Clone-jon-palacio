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
      if (localStorage.getItem("username")) {
        return <App />;
      } else {
        return <Login name={"jon"} />;
      }
    }
  };
};

export default withAuthinticate;
