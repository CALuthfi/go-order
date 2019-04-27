import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  Navbar
} from "reactstrap";

export default class MenuList extends Component {
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
              <Button>pilih</Button>
            </Navbar>
          </CardBody>
        </Card>
      </div>
    );
  }
}
