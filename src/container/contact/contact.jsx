import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Daftar from "../../components/daftar";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Go-App" />
        <Daftar />
      </div>
    );
  }
}
