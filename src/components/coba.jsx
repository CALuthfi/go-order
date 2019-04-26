import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import Card from "./card";
class Body extends Component {
  state = {
    situs: [
      {
        link: "/about",

        nama: "Go-Food",
        gambar:
          "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5451_foto-dafafoodindocom.jpg"
      },
      {
        link: "/about",

        nama: "Go-Jek",
        gambar:
          "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
      },
      {
        link: "/about",

        nama: "Go-Grab",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw"
      },
      {
        link: "/about",

        nama: "Go-shoope",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyQ8YDdLZyuMzaDjtgPsjuEJDKth7JmJDFHcj_RhsWTb_VcDk"
      }
    ]
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.situs.map(item => (
            <Col xs="3">
              <Card gambar={item.gambar} name={item.nama} link={item.link} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Body;
