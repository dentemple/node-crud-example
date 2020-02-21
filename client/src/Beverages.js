import React, { Component } from "react";

import { BASE_API_URL } from "./constants";

const Title = () => <h2>Current Inventory</h2>;

class Beverages extends Component {
  state = {
    data: null,
    err: null,
    isLoading: true
  };

  componentDidMount() {
    fetch(`${BASE_API_URL}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json,
          err: null,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          data: null,
          err,
          isLoading: false
        });
      });
  }

  render() {
    const { data, err, isLoading } = this.state;

    if (isLoading) {
      return (
        <>
          <Title />
          <p>Loading data...</p>
        </>
      );
    }

    if (err) {
      return (
        <>
          <Title />
          <p>Failed to retrieve data.</p>
          <pre>
            <code>{JSON.stringify(err, null, 2)}</code>
          </pre>
        </>
      );
    }

    return (
      <>
        <Title />
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </>
    );
  }
}

export default Beverages;
