import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const Daftar = props => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">Makanan</CardHeader>
        <CardBody>
          <CardTitle>Nasi pecel</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button tag={Link} to="/finis">
            Pesan sekarang
          </Button>
        </CardBody>
        <CardFooter className="text-muted">Rp.50.000</CardFooter>
      </Card>
    </div>
  );
};

export default Daftar;
