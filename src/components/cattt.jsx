import React, { Component } from "react";
import Menu from "./menu";
import { Row, Col, Jumbotron, Button, Table } from "reactstrap";

class Cattt extends Component {
  state = {
    menus: [
      {
        paket: "Kepala krispi",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",
        harga: 5000
      },
      {
        paket: "Dada krispi",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",

        harga: 6000
      },
      {
        paket: "Sayap krispi",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",

        harga: 4500
      },
      {
        paket: "Ceker krispi",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",

        harga: 3000
      },
      {
        paket: "Kulit krispi",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",

        harga: 2000
      },
      {
        paket: "Bandeng Presto",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",
        harga: 5000
      },
      {
        paket: "Paha krispi",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",

        harga: 6000
      },
      {
        paket: "Pindang presto",
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSy_r4kpuLRcqj6StSSP-M0_Lk83XFXxFIzgwJzvq6Qf5B20Lw",

        harga: 4500
      }
    ],
    total: 0,
    resto: [],
    qty: 0
  };

  tambahTotalHarga = harga => {
    this.setState({
      total: this.state.total + harga
    });
    var getRestoFromStorage = sessionStorage.getItem("resto");
    var convert = JSON.parse(getRestoFromStorage);
    this.setState({
      resto: convert
    });
  };

  render() {
    return (
      <div>
        <Row>
          {this.state.menus.map(menu => (
            <Col xs="3">
              <Menu
                paket={menu.paket}
                gambar={menu.gambar}
                harga={menu.harga}
                tambahTotalHarga={this.tambahTotalHarga}
              />
            </Col>
          ))}
        </Row>
        <Jumbotron>
          <h1 className="display-3">Ordering!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <Table>
            <thead>
              <tr>
                <th>Nama Restoran</th>
                <th>lokasi</th>
                <th>Menu pesanan</th>
                <th>jumlah pesanan</th>
                <th>jumlah harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  {this.state.resto.map(item => {
                    return <h5>{item.toko}</h5>;
                  })}
                </th>

                <th>
                  {this.state.resto.map(item => {
                    return <h5>{item.jalan}</h5>;
                  })}
                </th>
                <th>{this.state.paket}</th>
                <th>{this.state.qty}</th>
                <th>{this.state.total}</th>
              </tr>
            </tbody>
          </Table>
          <p className="lead">
            <Button color="primary">Pesan sekarang</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Cattt;
