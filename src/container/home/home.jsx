import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Coba from "../../components/coba";
import Jumbo from "../../components/jumbo";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar subjudul="Go-Order" />
        <Jumbo css="contoh" judul="Welcome to the Go-Order" />
        <Coba />
      </div>
    );
  }
}
export default Home;
