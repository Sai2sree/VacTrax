import { grey } from "@material-ui/core/colors";
import React from "react";
import { Carousel } from "react-bootstrap";
import AppCarousel from "../carousel/carousel";
import './localEvents.css'

const LocalEvents = () => {
  return (
    <div className="local-events">
      <h1 style={{ textAlign: "center", marginTop: 50, color: 'grey', fontStyle: 'italic' }}>
        Where Safety Comes to the Party.
      </h1>
      <h1 style={{ textAlign: "center", marginTop: 70, fontSize: 50 }}>
        Where will you leave your{" "}
        <span
          style={{
            fontFamily: "copperplate",
            color: "blue",
            textDecoration: "underline",
            fontSize: 100,
          }}
        >
          TRAX
        </span>
        {"   "}
        today?
      </h1>
      <AppCarousel />
    </div>
  );
};

export default LocalEvents;
