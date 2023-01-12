import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
// import { CardTemplate } from "../component/card.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		{/* <CardTemplate></CardTemplate> */}
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
