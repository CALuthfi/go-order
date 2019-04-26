import React from "react";
import "../asset/all.css";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Jumbo = props => {
  return (
    <div>
      <Jumbotron className="ct">
        <h1 className="display-3">{props.judul}</h1>

        <p className="lead">
          <Button color="primary" tag={Link} to="/">
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
