import React, { Component } from "react";

import { BASE_API_URL } from "./constants";

const Title = () => <h2>Add New Beverage</h2>;

class AddNewBeverage extends Component {
  state = {
    result: null,
    isFetching: false,
    // ---
    name: "",
    container_units: "",
    price_per_unit: "",
    size: "",
    size_measurement: "",
    special_offer: ""
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleFetch = () => {
    const {
      name,
      container_units,
      custom_order,
      price_per_unit,
      size,
      size_measurement,
      special_offer
    } = this.state;

    const { refreshList } = this.props;

    const body = JSON.stringify({
      name,
      container_units,
      custom_order,
      price_per_unit,
      size,
      size_measurement,
      special_offer
    });

    console.log({ body });

    const url = `${BASE_API_URL}`;
    const options = {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        this.setState(
          {
            isFetching: false,
            response: json
          },
          () => void refreshList()
        );
      })
      .catch(err => {
        this.setState({
          isFetching: false,
          response: err
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ isFetching: true }, () => void this.handleFetch());
  };

  render() {
    const { isFetching, result } = this.state;

    const textInputProps = {
      onChange: this.handleChange,
      type: "text"
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <Title />
        <label>
          Name:{" "}
          <input {...textInputProps} name="name" value={this.state.name} />{" "}
          <small>(Required)</small>
        </label>
        <br />
        <br />
        <label>
          Units:{" "}
          <input
            {...textInputProps}
            name="container_units"
            value={this.state.container_units}
          />
        </label>
        <br />
        <br />
        <label>
          $$$/Unit:{" "}
          <input
            {...textInputProps}
            name="price_per_unit"
            value={this.state.price_per_unit}
          />
        </label>
        <br />
        <br />
        <label>
          Size:{" "}
          <input {...textInputProps} name="size" value={this.state.size} />
        </label>
        <br />
        <br />
        <label>
          Measurement:{" "}
          <input
            {...textInputProps}
            name="size_measurement"
            value={this.state.size_measurement}
          />
        </label>
        <br />
        <br />
        <label>
          Order:{" "}
          <input
            {...textInputProps}
            name="order"
            value={this.state.custom_order}
          />
        </label>
        <br />
        <br />
        <label>
          Offer:{" "}
          <input
            {...textInputProps}
            name="special_offer"
            value={this.state.special_offer}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />{" "}
        {isFetching && <small>(Submitting!)</small>}
        <br />
        <br />
        {result && (
          <>
            <p>Result:</p>
            <pre>
              <code>{JSON.stringify(result, null, 2)}</code>
            </pre>
          </>
        )}
      </form>
    );
  }
}

export default AddNewBeverage;
