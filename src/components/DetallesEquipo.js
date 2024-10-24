import React, { Component } from "react";

import axios from "axios";
import Global from "./Global";

export default class DetallesEquipo extends Component {
  state = {
    equipo: null,
  };

  loadEquipo = () => {
    let idEquipo = this.props.id;
    let request = "api/equipos/" + idEquipo;
    let url = Global.urlApi + request;

    axios.get(url).then((response) => {
      console.log(response.data);
      this.setState({
        equipo: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadEquipo();
  };

  componentDidUpdate = (oldProps) => {
    if (this.props.id != oldProps.id) {
      this.loadEquipo();
    }
  };

  render() {
    return (
      <div className="list-group">
        {this.state.equipo && (
          <>
            <h5 className="list-group-item list-group-item-action active">
              Detalles del Equipo
            </h5>
            <div className="list-group-item">
              <strong>Id Equipo:</strong> {this.state.equipo.idEquipo}
            </div>
            <div className="list-group-item">
              <strong>Nombre:</strong> {this.state.equipo.nombre}
            </div>
            <div className="list-group-item">
              <strong>Imagen:</strong>
              <img
                src={this.state.equipo.imagen}
                alt={this.state.equipo.nombre}
                style={{ height: "100px", width: "100px", display: "block", margin: "10px 0" }}
              />
            </div>
            <div className="list-group-item">
              <strong>Nº Champions:</strong> {this.state.equipo.champions}
            </div>
            <div className="list-group-item">
              <strong>Web:</strong> <a href={this.state.equipo.web} target="_blank" rel="noopener noreferrer">{this.state.equipo.web}</a>
            </div>
            <div className="list-group-item">
              <strong>Descripción:</strong> {this.state.equipo.descripcion}
            </div>
            <div className="list-group-item">
              <strong>Nº Finales:</strong> {this.state.equipo.finalista}
            </div>
          </>
        )}
      </div>
    );
  }
}
