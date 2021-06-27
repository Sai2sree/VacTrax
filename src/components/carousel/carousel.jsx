import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

class AppCarousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  setIndex(index) {
    this.setState({ index: index });
  }

  handleSelect = (selectedIndex, e) => {
    this.setIndex(selectedIndex);
  };

  render() {
    return (
      <div className="app-carousel">
        <h2 className="carousel-title">This week's local events</h2>
        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/rutgers.jpg")}
              alt="rutgers football"
            />
            <Carousel.Caption>
              <h3>AYSO Soccer Playoff</h3>
              <span>TraxMeter: </span>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/dance.jpg")}
              alt="folk dance"
            />

            <Carousel.Caption>
              <h3>Asian folk dance</h3>
              <span>TraxMeter: </span>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../assets/pizza.jpg")}
              alt="pizza event"
            />

            <Carousel.Caption>
              <h3>Make your Pizza</h3>
              <span>TraxMeter: </span>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="legend">
          <h3 className="legend-title">TraxMeter Legend:</h3>
          <ul>
            <li>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />{" "}
              100% population fully vaccinated
            </li>
            <li>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              80% population fully vaccinated
            </li>
            <li>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              60% population fully vaccinated
            </li>
            <li>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              40% population fully vaccinated
            </li>
            <li>
              <img
                className="stars"
                src={require("../../assets/favourite-star.png")}
                alt="folk dance"
              />
              20% population fully vaccinated
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AppCarousel;
