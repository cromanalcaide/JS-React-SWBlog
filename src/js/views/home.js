import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardTemplate } from "../component/card.jsx";
import { InfoDetail } from "../component/info-detail.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<CardTemplate></CardTemplate>
		<InfoDetail></InfoDetail>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
