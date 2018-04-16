import React, { Component } from "react";
import Carousel from "./Carousel/Carousel";
import Card from "./Card/Card";
import "./Carousel/Carousel.css";
import "./Card/Card.css";

class HomePage extends Component {
  render() {
    return (
      <div>
         <Card /> 
      </div>
    );
  }
}

export default HomePage;
