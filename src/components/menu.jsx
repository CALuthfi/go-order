import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardImg,
  Navbar
} from "reactstrap";

export default class Menu extends Component {
  state = {
    qty: 0
  };

  tambah = () => {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.tambahTotalHarga(this.props.harga);
  };

  kurang = () => {
    if (this.state.qty === 0) {
      return;
    }
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.kurangTotalHarga(this.props.harga);
  };
  render() {
    return (
      <div
        style={{
          padding: "10px"
        }}
      >
        <Card>
          <CardHeader tag="h3">{this.props.paket}</CardHeader>
          <CardBody>
            <CardImg
              top
              style={{ height: "200px", width: "100%" }}
              src={this.props.gambar}
              alt="Card"
            />
            <CardTitle>paket hemat</CardTitle>
            <Navbar>
              <Button onClick={this.tambah}>+</Button>
              <h4>{this.state.qty}</h4>
              <Button onClick={this.kurang}>-</Button>
            </Navbar>
          </CardBody>
          <CardFooter className="text-muted">{this.props.harga}</CardFooter>
        </Card>
      </div>
    );
  }
}
