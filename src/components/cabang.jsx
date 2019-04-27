import React, { Component } from "react";
import { Card, Button, Row, Col, CardImg } from "reactstrap";

import { Link } from "react-router-dom";

export default class Cabang extends Component {
  render() {
    return (
      <div
        style={{
          padding: "10px"
        }}
      >
        <Card
          body
          inverse
          style={{
            backgroundColor: "#333",
            borderColor: "#333"
          }}
        >
          <Row>
            <Col xs="6">
              <CardImg
                top
                style={{ height: "350px", width: "100%" }}
                src={this.props.gambar}
                alt="Card"
              />
            </Col>
            <Col xs="6" style={{ textAlign: "center" }}>
              <h4>
                <center>{this.props.toko}</center>
              </h4>
              <hr />

              <h5>Alamat : {this.props.jalan}</h5>

              <Button onClick={this.props.pilihResto} tag={Link} to="/contact">
                Kunjungi
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
