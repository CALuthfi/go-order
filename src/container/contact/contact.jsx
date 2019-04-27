import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Daftar from "../../components/menu";
import Kartus from "../../components/kartus";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Ordering" />
        <div style={{ textAlign: "center", padding: "30px", color: "red" }}>
          <h1>Menu Makanan</h1>
          <hr style={{ width: "30%", textAlign: "center" }} />
        </div>
        <Kartus />
      </div>
    );
  }
}
