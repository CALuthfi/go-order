import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, Button, CardBody, CardHeader, CardImg } from "reactstrap";

export default class Cards extends Component {
  render() {
    return (
      <div style={{ margin: "50px" }}>
        <Link to={this.props.link}>
          <Card>
            <CardBody>
              <CardImg
                top
                style={{ height: "300px", width: "100%" }}
                src={this.props.gambar}
                alt="Card"
              />
            </CardBody>
            <CardHeader style={{ fontWeight: "bold", textAlign: "center" }}>
              {this.props.name}
            </CardHeader>
          </Card>
        </Link>
      </div>
    );
  }
}
