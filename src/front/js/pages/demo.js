import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	// Función para generar texto aleatorio
	const generateRandomText = () => {
		const texts = ["Texto 1", "Texto 2", "Texto 3", "Texto 4", "Texto 5"];
		return texts[Math.floor(Math.random() * texts.length)];
	};

	return (
		<div className="container">
			<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
					</div>
					<div className="carousel-item">
						<img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			<button className="alert alert-success alert-btn" onClick={() => alert("¡Texto de alerta!")}>Mostrar Alerta</button>
			<div className="card">
				<img src="https://via.placeholder.com/150" className="card-img-left d-block" alt="..." />
				<div className="card-body">
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
			<Link to="/">
				<button className="btn inicio-btn">Inicio</button>
			</Link>
		</div>
	);
};

// export const Demo = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container">
// 			<div
// 				id="carouselExampleControls"
// 				className="carousel slide"
// 				data-bs-ride="carousel"
// 			>
// 				<div className="carousel-inner">
// 					<div className="carousel-item active">
// 						<img src="" className="d-block w-100" alt="..." />
// 					</div>
// 					<div className="carousel-item">
// 						<img src="..." className="d-block w-100" alt="..." />
// 					</div>
// 					<div className="carousel-item">
// 						<img src="..." className="d-block w-100" alt="..." />
// 					</div>
// 				</div>
// 				<button
// 					className="carousel-control-prev"
// 					type="button"
// 					data-bs-target="#carouselExampleControls"
// 					data-bs-slide="prev"
// 				>
// 					<span className="carousel-control-prev-icon" aria-hidden="true" />
// 					<span className="visually-hidden">Previous</span>
// 				</button>
// 				<button
// 					className="carousel-control-next"
// 					type="button"
// 					data-bs-target="#carouselExampleControls"
// 					data-bs-slide="next"
// 				>
// 					<span className="carousel-control-next-icon" aria-hidden="true" />
// 					<span className="visually-hidden">Next</span>
// 				</button>
// 			</div>
// 			<Link to="/">
// 				<button className="btn inicio-btn">Inicio</button>
// 			</Link>
// 		</div>
// 	);
// };
