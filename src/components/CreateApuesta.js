import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { NavLink, Navigate } from "react-router-dom";

export default class CreateApuesta extends Component {
  cajaId = React.createRef();
  cajaUsuario = React.createRef();
  cajaResultado = React.createRef();
  cajaFecha = React.createRef();

  state = {
    status: false,
    fecha: new Date().toISOString().split("T")[0],
  };

  crearApuesta = (e) => {
    e.preventDefault();

    let id = parseInt(this.cajaId.current.value);
    let usuario = this.cajaUsuario.current.value;
    let resultado = this.cajaResultado.current.value;
    let fecha = this.state.fecha;

    let apuesta = {
      idApuesta: id,
      usuario: usuario,
      resultado: resultado,
      fecha: fecha,
    };

    let request = "api/apuestas";
    let url = Global.urlApi + request;

    axios.post(url, apuesta).then((response) => {
      console.log("Apuesta insertado");
      this.setState({
        status: true,
      });
    });
  };

  render() {
    return (
      <div className="container mt-4">
        {this.state.status == true && <Navigate to="/apuestas" />}
        <h1>Añadir Nueva Apuesta</h1>
        <form onSubmit={this.crearApuesta}>
          <div className="mb-3">
            <label className="form-label">
              Id Apuesta
            </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaId}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaUsuario}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Resultado
            </label>
            <input
              type="text"
              className="form-control"
              ref={this.cajaResultado}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              value={this.state.fecha} // Usar la fecha del estado
              readOnly // Hacerlo solo lectura para evitar cambios
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Crear Apuesta
          </button>
        </form>
      </div>
    );
  }
}
