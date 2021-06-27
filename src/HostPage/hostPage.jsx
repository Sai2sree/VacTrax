import React, { Component } from "react";
import FormInput from "../components/Form-input/form-input";
import "./hostPage.css";
import Carousel from "../components/carousel/carousel";
import SubmitButton from "../components/SubmitButton/submit";
class HostsPage extends Component {
  constructor() {
    super();
    this.state = {
      hostName: "",
      eventName: "",
      eventDate: "",
      venue: "",
      description: "",
    };
  }

  onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  onChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <React.Fragment>
        <h3 style={{ textAlign: "center", marginBottom: 10, color: "black", color: 'grey', fontStyle: 'italic' }}>
          “You can’t control what goes on outside, but you CAN control what goes
          on inside.”
        </h3>
        <div className="host-page">
          <div className="form">
            <h2 className="form-title">Please register your event:</h2>
            <form onSubmit={this.onSubmitHandler}>
              <FormInput
                name="hostName"
                type="text"
                value={this.state.hostName}
                label="Name of the host*"
                onChangeHandler={this.onChangeHandler}
                required
              />

              <FormInput
                name="eventName"
                type="text"
                value={this.state.eventName}
                label="Name of the event*"
                onChangeHandler={this.onChangeHandler}
                required
              />
              <div className="radio-options">
                <input type="radio" id="public" name="type" value="HTML" />
                <label htmlFor="moderna">Public</label>
                <input type="radio" id="private" name="type" value="CSS" />
                <label htmlFor="pfizer">Private</label>
              </div>
              <span className="event-date">
                <FormInput
                  name="eventDate"
                  type="date"
                  value={this.state.eventDate}
                  label="Event Date*"
                  onChangeHandler={this.onChangeHandler}
                  className="date"
                  required
                />
              </span>

              <FormInput
                name="venue"
                type="text"
                value={this.state.venue}
                label="Venue*"
                onChangeHandler={this.onChangeHandler}
                required
              />

              <FormInput
                name="description"
                type="text"
                value={this.state.description}
                label="Description"
                onChangeHandler={this.onChangeHandler}
                required
              />

              <label style={{ display: "block" }} htmlFor="guestList">
                Guest list
              </label>
              <textarea
                id="guestList"
                name="guestList"
                rows="4"
                cols="50"
                placeholder="please enter your guests' emails, separated by commas"
                style={{ marginBottom: 50 }}
              ></textarea>

              <div className="buttons">
                <SubmitButton name="Register" />
              </div>
            </form>
          </div>
          <Carousel />
        </div>
      </React.Fragment>
    );
  }
}

export default HostsPage;
