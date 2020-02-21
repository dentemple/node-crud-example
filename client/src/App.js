import React, { Component } from "react";

import AddNewBeverage from "./AddNewBeverage";
import Beverages from "./Beverages";

class App extends Component {
  state = {
    // Flip this toggle when the main list needs to be refreshed
    toggle: false
  };

  refreshList = () => void this.setState({ toggle: !this.state.toggle });

  render() {
    const { toggle } = this.state;

    return (
      <>
        <AddNewBeverage refreshList={this.refreshList} />
        <Beverages key={+toggle} />
      </>
    );
  }
}

export default App;
