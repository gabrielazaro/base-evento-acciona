import React from "react";

export const Hero = () => {

    return (
        <div className="p-5 text-start bg-image rounded-3" style={{
            background: "url('https://mediacdn.acciona.com/media/kqfme1qi/cabecera-business-as-unusual-acciona.jpg') no-repeat",
            backgroundSize: "cover",
            height: "75vh"
        }}>
            <div className="mask h-100" >
                <div className="d-flex flex-column justify-content-center align-items-start h-100 w-100">
                    <div className="text-white">
                        <h1 className="mb-3">UNA COMPAÑÍA CON UN PROPÓSITO</h1>
                        <h4 className="mb-3">En ACCIONA creemos que existe una manera diferente de hacer negocios</h4>
                        <a data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="/" role="button">Call to action</a>
                    </div>
                </div>
            </div>
        </div>



    )
}

