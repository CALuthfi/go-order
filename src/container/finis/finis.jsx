import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Jumbo from "../../components/jumbo";
export default class Finis extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Go-Ordering" />

        <Jumbo judul="Thank you for ordering good Luck" />
      </div>
    );
  }
}
