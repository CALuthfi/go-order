import React, { Component } from "react";
import { Card, Button, CardText } from "reactstrap";
import { Link } from "react-router-dom";

export default class Kartu extends Component {
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
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button tag={Link} to="/contact">
            pesan
          </Button>
        </Card>
      </div>
    );
  }
}
