import React, { Component, useContext, useEffect } from "react";
// import { Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Context} from '../../store/appContext.js'
import { Link } from "react-router-dom";

export const CardCharacter = () => {
  const {store, actions} = useContext(Context)
  // 

  return (
  <>
      {store.jedi.map((jediInfo, index) => (
        <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img className="card-img-top" alt="some-image"
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              (index + 1) +
              ".jpg"
            }
          />
          <div className="card-body">
            <h5 className="card-title">{jediInfo.name}</h5>
            <p className="card-text">
              Gender: {jediInfo.gender} <br />
              Hair color: {jediInfo.hair_color} <br />
              Eye color: {jediInfo.eye_color}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <a href="#" className="btn btn-primary">
              ❤️
            </a>
          </div>
        </div>
      ))}
    </>
  );
}


