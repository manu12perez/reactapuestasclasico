import React, { Component } from 'react'
import axios from "axios";
import Global from "./Global";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {

    state = {
        equipos: [],
      };
    
      loadEquipos = () => {
        var request = "api/equipos";
        var url = Global.urlApi + request;
    
        axios.get(url).then((response) => {
          console.log("Leyendo Equipos");
          this.setState({
            equipos: response.data,
          });
        });
      };
    
      componentDidMount = () => {
        this.loadEquipos();
      };
    
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="https://cdn-icons-png.flaticon.com/512/8665/8665279.png" style={{ height: "40px", width: "40px" }} />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/apuestas">
                    Apuestas
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">
                    Nueva Apuesta
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Equipos
                  </a>

                  <ul className="dropdown-menu">
                  {this.state.equipos.map((equipo, index) => {
                      return (
                        <li key={index}>
                          <NavLink to={"/equipo/" + equipo.idEquipo} className="dropdown-item">
                            {equipo.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
