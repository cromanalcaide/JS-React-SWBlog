import React, { Component, useContext, useEffect } from "react";
import {Context} from '../../store/appContext.js'
import { Link } from "react-router-dom";

export const CardPlanet = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.planets.map((planetInfo, index) => (
        <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img className="card-img-top" alt="some-image"
            src={
              "https://starwars-visualguide.com/assets/img/planets/" +
              (index + 1) +
              ".jpg"
            }
          />
          <div className="card-body">
            <h5 className="card-title">{planetInfo.name}</h5>
            <p className="card-text">
              Population: {planetInfo.population} <br />
              Climate: {planetInfo.climate} <br />
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
};
