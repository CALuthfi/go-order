import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

export default class Btn extends Component {
  render() {
    return (
      <div>
        <Button tag={Link} to={this.props.to}>
          kehome
        </Button>
      </div>
    );
  }
}
