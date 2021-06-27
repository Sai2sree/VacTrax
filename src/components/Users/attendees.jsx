import React, { Component } from "react";
import PieChartComponent from "../PieChart/PieChart";
import UsersTable from "./usersTable";
import "./attendees.css";

//import Button from "../../components/Button/Button";

class Attendees extends Component {
  state = { clicked: false };

  clicker = () => {
    this.setState({ clicked: true });
  };

  render() {
    if (!this.state.clicked) {
      return (
        <React.Fragment>
          <UsersTable />
          <div className="wrapper2">
            <a href="#" className="load" onClick={() => this.clicker()}>
              <span style={{ fontFamily: "copperplate" }}>GENERATE pyTrax</span>
            </a>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div className="row">
          <div className="column">
            <UsersTable />
          </div>
          <div className="column">
            <PieChartComponent />
          </div>
        </div>
      );
    }
  }
}

export default Attendees;
