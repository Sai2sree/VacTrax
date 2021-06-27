import { Pie } from "react-chartjs-2";
import React, { Component } from "react";
import "./pieChart.css";
import data from "../../data.json";
import ShareButton from "../ShareButton/share";

class PieChartComponent extends Component {
  state = {
    statuses: [],
    labels: [
      "Fully vaccinated",
      "Partially vaccinated",
      "Not vaccinated",
      "No Response Yet",
    ],
    datasets: [
      {
        data: [5, 2, 1, 2],
        backgroundColor: ["#87dea1", "#ffd966", "#ee919c", "#cccccc"],
      },
    ],
    counts: [],
  };

  componentDidMount() {
    let statuses = [];
    data.events.map((event) => {
      return event.guestsInfo.forEach((info) => {
        statuses.push(info.status);
      });
    });

    console.log(statuses);
    this.setState({ statuses });
    let datas = [0, 0, 0, 0];
    for (let i = 0; i < statuses.length; i++) {
      if (statuses[i] == "done") {
        datas[0] += 1;
      } else if (statuses[i] == "partial") {
        datas[1] += 1;
      } else if (statuses[i] == "none") {
        datas[2] += 1;
      } else {
        datas[3] += 1;
      }
    }
    this.setState({ counts: datas });
  }

  render() {
    let counts = this.state.counts;

    let l = this.state.statuses.length;
    return (
      <div>
        <h1 className="center" style={{ fontFamily: "copperplate" }}>
          pyTrax
        </h1>

        <div
          style={{
            border: "solid 10px #87dea1",
            display: "inline-block",
            margin: 2,
            padding: 10,
          }}
        >
          <h6>
            {Math.floor((counts[0] / l).toFixed(2) * 100)}% Fully vaccinated
          </h6>
        </div>
        <div
          style={{
            border: "solid 10px #ffd966",
            display: "inline-block",
            margin: 2,
            padding: 10,
          }}
        >
          <h6>
            {Math.floor((counts[1] / l).toFixed(2) * 100)}% Partially vaccinated
          </h6>
        </div>
        <div
          style={{
            border: "solid 10px #ee919c",
            display: "inline-block",
            margin: 2,
            padding: 10,
          }}
        >
          <h6>{Math.floor((counts[2] / l) * 100)}% Not vaccinated</h6>
        </div>
        <div
          style={{
            border: "solid 10px #cccccc",
            display: "inline-block",
            margin: 2,
            padding: 10,
          }}
        >
          <h6>
            {Math.floor((counts[3] / l).toFixed(2) * 100)}% No Response Yet
          </h6>
        </div>

        <div className="chart-container center">
          <Pie
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  data: this.state.counts,
                  backgroundColor: ["#87dea1", "#ffd966", "#ee919c", "#cccccc"],
                },
              ],
            }}
            height="50%"
          />
        </div>

        <br />
        <ShareButton />
      </div>
    );
  }
}

export default PieChartComponent;
