import React, { Component } from "react";

import axios from "axios";
import Global from "./Global";

export default class Apuestas extends Component {
  state = {
    apuestas: [],
  };

  loadApuestas = () => {
    let request = "api/apuestas";
    let url = Global.urlApi + request;

    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({
        apuestas: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadApuestas();
  };
  render() {
    return (
      <div>
        <div className="list-group">
          <h5 className="list-group-item list-group-item-action active">
            Apuestas
          </h5>
          {this.state.apuestas.map((apuesta) => (
            <div className="list-group-item" key={apuesta.idApuesta}>
              <h5 className="mb-1">{apuesta.usuario}</h5>
              <p className="mb-1">
                <strong>Resultado:</strong> {apuesta.resultado}
              </p>
              <small>
                <strong>Fecha:</strong> {apuesta.fecha}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
