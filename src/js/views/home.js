import React from "react";
import { Row } from "react-bootstrap";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardTemplate } from "../component/cards/card-character.jsx";
import { InfoDetail } from "../component/info-detail.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="p-3">
			<h2>Characters</h2>
			<row className="d-flex scrolling-wrapper">
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
			</row>
			<h2>Vehicles</h2>
			<row className="d-flex scrolling-wrapper">
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
			</row>
			<h2>Planets</h2>
			<row className="d-flex scrolling-wrapper">
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
				<CardTemplate></CardTemplate>
			</row>
		</div>
	
	</div>
);
