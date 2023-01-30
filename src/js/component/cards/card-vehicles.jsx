import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Context} from '../../store/appContext.js'

export const CardStarship = () => {
  const { store, actions } = useContext(Context);

  return (
  <>
      {store.starships.map((starshipInfo, index) => (
        <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <img className="card-img-top" alt="some-image"
            src={
              "https://starwars-visualguide.com/assets/img/starships/" +
              (index + 1) +
              ".jpg"
            }
          />
          <div className="card-body">
            <h5 className="card-title">{starshipInfo.name}</h5>
            <p className="card-text">
              Model: {starshipInfo.model} <br />
              Class: {starshipInfo.starship_class} <br />
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



