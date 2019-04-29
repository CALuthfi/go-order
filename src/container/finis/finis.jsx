import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Jumbo from "../../components/jumbo";
export default class Finis extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Go-Ordering" />

        <Jumbo css="bb" judul="Thank you orderan kamu akan di kirim" />
      </div>
    );
  }
}
