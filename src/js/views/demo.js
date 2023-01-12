import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";
import { InfoDetail } from "../component/info-detail.jsx";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<InfoDetail></InfoDetail>
		</div>
	);
};
