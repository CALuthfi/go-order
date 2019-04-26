import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, Button, CardBody, CardTitle, CardImg } from "reactstrap";

export default class Cards extends Component {
  render() {
    return (
      <div className="container">
        <Card>
          <CardBody>
            <CardImg top width="100%" src={this.props.gambar} alt="Card" />
          </CardBody>
          <CardTitle style={{ fontWeight: "bold" }}>
            {this.props.name}
          </CardTitle>
          <Link to={this.props.link}>
            <Button>jelajah</Button>
          </Link>
        </Card>
      </div>
    );
  }
}
