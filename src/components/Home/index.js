import React, { Component } from "react";
import Button from "../Button/Button";
import * as ROUTES from "../../constants/routes";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* <Greeting /> */}
        <div>
          <h1
            style={{
              color: "blue",
              fontWeight: "bold",
              fontFamily: "copperplate",
              fontSize: 200,
            }}
          >
            Vac
            <span
              style={{
                color: "red",
                fontFamily: "new",
                fontWeight: "bold",
                size: 300,
              }}
            >
              +
            </span>
            Rax
          </h1>
          <p
            style={{
              color: "blue",
              fontWeight: "bold",
              fontFamily: "copperplate",
              fontSize: 40,
            }}
          >
            Reopening safely starts with your neighborhood.
          </p>
        </div>
        <h2
          style={{
            margin: 50,
            fontSize: 50,
            color: "purple",
            fontWeight: "bold",
          }}
        >
          Are you a
        </h2>

        <Button name="HOST?" location={ROUTES.HOST} />
        <h4
          style={{
            margin: 50,
            fontSize: 70,
            color: "purple",
            fontWeight: "bold",
          }}
        >
          OR
        </h4>
        <Button name="GUEST?" location={ROUTES.GUEST} />
      </div>
    );
  }
}

export default HomePage;

function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours >= 17 && hours < 19) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }
  return <h1>Good {timeOfDay}!</h1>;
}
