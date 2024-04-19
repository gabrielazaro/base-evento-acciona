import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";


export const Datos = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <div className="card mt-4">
                <h1 className="card-title m-3">Medición, Consumo e Impacto</h1>
                <img src="https://www.paradigmadigital.com/wp-content/uploads/2018/09/panel-conversion.png" className="card-img-top" alt="..." />
                <div className="card-body d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-danger btn-asistente" onClick={() => alert("¡Vigila tu consumo de energía!")}>¿Cómo voy?</button>
                </div>
            </div>
            <div className="mt-3">
                <Link to="/">
                    <button className="btn btn-warning">Acciona</button>
                </Link>
            </div>
        </div>
    );
};

