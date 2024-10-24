import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}>
        <img 
          src='https://dinerogeeks.com/wp-content/uploads/2019/06/Apuestas-deportivas-online.jpg' 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Esto asegura que la imagen cubra el área sin distorsionarse
          }} 
          alt="Background" 
        />
      </div>
      </div>
    )
  }
}