import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo_acciona.png"
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<div className="d-flex justify-content-between align-items-center px-3" style={{ width: '100%' }}>
					<Link to="/">
						<img className="navbar-brand mb-0" src={Logo} alt="Logo" />
					</Link>
					<div className="d-flex align-items-center">
						<Link to="/demo" className="me-2">
							<button className="btn">Proyectos</button>
						</Link>
						<Link to="/datos" className="me-2">
							<button className="btn">Asistente</button>
						</Link>
						{/* <Link to="/soluciones">
							<button className="btn">Soluciones</button>
						</Link> */}
					</div>
				</div>
			</div>
		</nav>

	);
};
