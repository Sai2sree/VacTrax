import React, { Component } from "react";
import FormInput from "../components/Form-input/form-input";
import "./guestPage.css";
import SubmitButton from "../components/SubmitButton/submit";

class HostsPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dose1date: "",
      dose2date: "",
    };
  }

  onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  onChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onDateChange() {}

  render() {
    return (
      <React.Fragment>
        <h3 style={{ textAlign: "center", marginBottom: 80, color: "grey", fontStyle: 'italic' }}>
          "The power of community to create health is far greater than any
          physician, clinic, or hospital." -Mark Hyman
        </h3>
        <div className="form">
          <button className="upbutton upbutton2">
            Upload your vaccination card
          </button>
          <h2 style={{ margin: 25, marginLeft: 120 }}> OR</h2>
          <h2 className="form-title">Please enter your details:</h2>

          <form onSubmit={this.onSubmitHandler}>
            <FormInput
              name="name"
              type="text"
              value={this.state.name}
              label="name*"
              onChangeHandler={this.onChangeHandler}
              required
            />

            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              label="email*"
              onChangeHandler={this.onChangeHandler}
              required
            />
            <div className="label">Vaccine</div>
            <div className="radio-options">
              <input type="radio" id="moderna" name="vaccine" value="HTML" />
              <label htmlFor="moderna">Moderna</label>
              <input type="radio" id="pfizer" name="vaccine" value="CSS" />
              <label htmlFor="pfizer">Pfizer</label>
              <input type="radio" id="jj" name="vaccine" value="JavaScript" />
              <label htmlFor="jj">Johnson &amp; Johnson</label>
            </div>

            <div className="label">Vaccine completion status*</div>
            <div className="radio-options">
              <input type="radio" id="done" name="status" value="Done" />
              <label htmlFor="done">Done</label>
              <input type="radio" id="partial" name="status" value="Partial" />
              <label htmlFor="partial">Partial</label>
              <input type="radio" id="none" name="status" value="None" />
              <label htmlFor="none">None</label>
            </div>
            <span className="vaccine-date">
              <FormInput
                name="dose1date"
                type="date"
                value={this.state.dose1date}
                label="Date of dose 1"
                onChangeHandler={this.onChangeHandler}
                className="date"
                required
              />
              <FormInput
                name="dose2date"
                type="date"
                value={this.state.dose2date}
                label="Date of dose 2 (if applicable)"
                onChangeHandler={this.onChangeHandler}
                className="date"
                required
              />
            </span>
            <div>
              {/*
            <button
              type="submit"
              className="submit-button"
              onClick={this.onSubmitHandler}
            >
              Submit
            </button> */}
              <SubmitButton name="Submit" />
            </div>
          </form>
        </div>
        <div>OR</div>
      </React.Fragment>
    );
  }
}

export default HostsPage;
