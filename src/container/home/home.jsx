import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Coba from "../../components/coba";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Go-App" />

        <h1>welcome Home</h1>
        <Coba />
      </div>
    );
  }
}
export default Home;
