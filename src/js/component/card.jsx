import React, { Component } from "react";
// import { Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardTemplate = () => {
  return (
  <div className="card">
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://sportshub.cbsistatic.com/i/2021/08/04/97a6643b-074d-41fc-a756-919e5923a792/the-simpsons-fans-celebrate-homer-simpson-65th-birthday-1268026.jpg" />
      <Card.Body>
        <Card.Title>Luke Skywalker</Card.Title>
        <Card.Text>
        Gender: <br/>
        Hair color: <br/>
        Eye color:
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="primary">❤️</Button>
      </Card.Body>
    </Card>
  </div>
  );
}

















// export const CardTemplate = () => {

//     return (
//                 <div>
//                     <div className="card">
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5>Luke SkyWalker</h5>
//                             <p>Darth Vader's Son - Sorry for the spoiler</p>
//                             <button><a href="#">Learn more</a></button>
//                             <button><a href="#">Fave</a></button>
//                         </div>
//                     </div>
//                 </div>
//     );
// }





//  // switch (cardType) {
//     //     case "character":
//             return (
//             <div>
//                 <div>
//                     <div className="card" style="width: 18rem;">
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Luke SkyWalker</h5>
//                             <p className="card-text">Darth Vader's Son - Sorry for the spoiler</p>
//                             <button><a href="#" className="btn btn-primary" onClick={goTo}>Learn more</a></button>
//                             <button><a href="#" className="btn btn-primary" onClick={addFave}>Fave</a></button>
//                         </div>
//                     </div>
//                 </div>
//         {/* //);
//         // case "planets":
//         //     return( */}
//                 <div>
//                     <div className="card" style="width: 18rem;">
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">Tatooine</h5>
//                             <p className="card-text">Luke was born here</p>
//                             <button><a href="#" className="btn btn-primary" onClick={goTo}>Learn more</a></button>
//                             <button><a href="#" className="btn btn-primary" onClick={addFave}>Fave</a></button>
//                         </div>
//                     </div>
//                 </div>
//         {/* //     );
//         // case "vehicles":
//         //     return ( */}
//                 <div>
//                     <div className="card" style="width: 18rem;">
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">The Millennium Falcon</h5>
//                             <p className="card-text">Han Solo was here</p>
//                             <button><a href="#" className="btn btn-primary" onClick={goTo}>Learn more</a></button>
//                             <button><a href="#" className="btn btn-primary" onClick={addFave}>Fave</a></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             );
//     }
// // }