import React from "react";
import { Row } from "react-bootstrap";
import "../../styles/home.css";
import { CardCharacter } from "../component/cards/card-character.jsx";
import { InfoDetail } from "../component/info-detail.jsx";
import { Card_Template } from "../component/cards/card-template.jsx";
import { CardPlanet } from "../component/cards/card-planets.jsx";
import { CardStarship } from "../component/cards/card-vehicles.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="p-3">
			<h2>Characters</h2>
			<row className="d-flex scrolling-wrapper">
				<Card_Template></Card_Template>
			</row>
			<h2>Vehicles</h2>
			<row className="d-flex scrolling-wrapper">
				<CardStarship></CardStarship>
			</row>
			<h2>Planets</h2>
			<row className="d-flex scrolling-wrapper">
				<CardPlanet></CardPlanet>
			</row>
		</div>
	
	</div>
);
