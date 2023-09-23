import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header';
import Home from './Components/Home';
const App = () => {
    const Heading =  styled.h1`
    text-align: center;
    font-size: 3rem;
    `
    return (

        <>
      <div className="app">
        <Header />
        <Home />
      </div>
        </>
    )
}
export default App;