import React, { Component, useContext, useEffect } from "react";
// import { Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Context} from '../../store/appContext.js'
import { Link } from "react-router-dom";

export const CardCharacter = () => {
  const {store, actions} = useContext(Context)
  // console.log(store.jedi.name) --> Me da undefined

  return (
  <>
  {store.jedi.map((jediInfo) => (
    <div className="card">
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src="https://sportshub.cbsistatic.com/i/2021/08/04/97a6643b-074d-41fc-a756-919e5923a792/the-simpsons-fans-celebrate-homer-simpson-65th-birthday-1268026.jpg" />
          <Card.Body>
            {/* <Card.Title>{store.jediDetail.result.name}</Card.Title> */}
            <Card.Title>Luke</Card.Title>
            <Card.Text>
            Gender: <br/>
            Hair color: <br/>
            Eye color:
            </Card.Text>
            <Link to="/demo">
              <Button variant="primary">Go somewhere</Button>
            </Link>
            <Button variant="primary">❤️</Button>
          </Card.Body>
        </Card>
    </div>
  ))}
  </>
  );
}


