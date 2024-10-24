import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import Menu from './Menu'
import Home from './Home'
import DetallesEquipo from './DetallesEquipo'
import Apuestas from './Apuestas'
import CreateApuesta from './CreateApuesta'

export default class Router extends Component {
  render() {
    function DetallesEquiposElement () {
        var {id} = useParams();
        return <DetallesEquipo id={id} />
    }

    return (
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipo/:id" element={<DetallesEquiposElement />}/>
            <Route path="/apuestas" element={<Apuestas />} />
            <Route path="/create" element={<CreateApuesta />} />
        </Routes>
    </BrowserRouter>
    )
  }
}
