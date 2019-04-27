import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Call from "../../components/call";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Restoran" />
        <Call />
      </div>
    );
  }
}
export default About;
