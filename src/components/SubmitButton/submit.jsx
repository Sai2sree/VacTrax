import React from "react";
import "./submit.css";
import { useHistory } from "react-router-dom";

const SubmitButton = ({ name }) => {
  const history = useHistory();
  return (
    <div className="wrap">
      <button
        className="button"
        style={{ margin: "200" }}
        onClick={() => {
          history.push("/events");
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default SubmitButton;
