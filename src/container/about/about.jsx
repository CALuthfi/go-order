import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Kartu from "../../components/kartu";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Go-App" />
        <Kartu />
        <Kartu />
        <Kartu />
        <Kartu />
      </div>
    );
  }
}
export default About;
