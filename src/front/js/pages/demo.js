import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container m-5">
			<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
				<h1 class="carousel-title w-auto">Living as unusual</h1>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="" src="https://www.lavanguardia.com/files/image_948_465/uploads/2019/04/11/5fa51c66e52ad.jpeg" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img class="" src="https://inarquia.es/wp-content/uploads/casa-ecologica-sostenible-autosuficiente-min.jpg" class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img class="" src="https://media.licdn.com/dms/image/C4E12AQGKa6Rr8jo2sA/article-cover_image-shrink_600_2000/0/1611302781034?e=2147483647&v=beta&t=i1RLHIb0yLedQGScPT_QpiBil3zRk1SSgtCuod4vDxw" class="d-block w-100" alt="..." />
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<div class="m-3"></div>
			<Link to="/datos">
				<div class="d-grid gap-2 col-6 mx-auto">
					<button class="btn btn-success" type="button">Veamos el asistente</button>
				</div>
			</Link>
			<Link to="/">
				<button className="btn inicio-btn mt-3 ms-5">Acciona</button>
			</Link>
		</div>
	);
};
