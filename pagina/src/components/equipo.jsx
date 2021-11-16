import React from 'react';
import './styles/equipo.scss';
import Alejo from '../images/alejo.png'
import Andrea from '../images/andrea.png'
import Valentina from '../images/valentina.png'
import Andres from '../images/andres.png'


const equipo = () => {
    return (
        <div className="allC">
            <div className="containerequipo" id="animation">
            <div className="equipoTitle">
                <h1>nuestro equipo de trabajo fue seleccionado por sus habilidades tanto en el desarrollo del juego como en la publicidad y estrategias de mercado </h1>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Alejo} alt="Fire" />
                </div>
                <div className="Content">
                    <h2>ALEJANDRO CRUZ</h2>
                    <p>encargado del diseño de niveles </p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Valentina} alt="Land" />
                </div>
                <div className="Content">
                    <h2>VALENTINA LOAIZA</h2>
                    <p>encargada de la publicidad y diseño web</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Andrea} alt="Air" />
                </div>
                <div className="Content">
                    <h2>ANDREA VIVEROS</h2>
                    <p>encargado de la ambientación del juego y su estilo estético</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Andres} alt="Air" />
                </div>
                <div className="Content">
                    <h2>ANDRES </h2>
                    <p>encargado de modelar y animar al personaje principal</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default equipo