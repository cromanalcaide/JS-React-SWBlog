import React, { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";
import { Context } from "../store/appContext.js"


export const InfoDetail = () => {
    const {store, actions} = useContext(Context)
    
    return (
    <div>
        <div className="container">
            <div className="col-5">
                <Image width="100%" src="https://sportshub.cbsistatic.com/i/2021/08/04/97a6643b-074d-41fc-a756-919e5923a792/the-simpsons-fans-celebrate-homer-simpson-65th-birthday-1268026.jpg"></Image>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
                <h2>Hello World Cabesa</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
            </div>
        </div>
        <hr/>
        <div className="container">
            <div className="col-2 profData">Jony<br /> Jony 2</div>
            <div className="col-2 profData">Jony<br /> Jony 2</div>
            <div className="col-2 profData">Jony<br /> Jony 2</div>
            <div className="col-2 profData">Jony<br /> Jony 2</div>
            <div className="col-2 profData">Jony<br /> Jony 2</div>
            <div className="col-2 profData">Jony<br /> Jony 2</div>
        </div>
    </div>
    )
}