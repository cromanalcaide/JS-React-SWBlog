import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export const CardTemplate = () => {
    
    // switch (cardType) {
    //     case "character":
            return (
            <div>
                <div>
                    <div class="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Luke SkyWalker</h5>
                            <p className="card-text">Darth Vader's Son - Sorry for the spoiler</p>
                            <button><a href="#" className="btn btn-primary" onClick={goTo}>Learn more</a></button>
                            <button><a href="#" className="btn btn-primary" onClick={addFave}>Fave</a></button>
                        </div>
                    </div>
                </div>
        {/* //);
        // case "planets":
        //     return( */}
                <div>
                    <div class="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tatooine</h5>
                            <p className="card-text">Luke was born here</p>
                            <button><a href="#" className="btn btn-primary" onClick={goTo}>Learn more</a></button>
                            <button><a href="#" className="btn btn-primary" onClick={addFave}>Fave</a></button>
                        </div>
                    </div>
                </div>
        {/* //     );
        // case "vehicles":
        //     return ( */}
                <div>
                    <div class="card" style="width: 18rem;">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Millennium Falcon</h5>
                            <p className="card-text">Han Solo was here</p>
                            <button><a href="#" className="btn btn-primary" onClick={goTo}>Learn more</a></button>
                            <button><a href="#" className="btn btn-primary" onClick={addFave}>Fave</a></button>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
// }