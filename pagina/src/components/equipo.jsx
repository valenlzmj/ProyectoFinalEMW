import React from 'react';
import './styles/equipo.scss';
import Andres from '../images/18. Andres.png'
import Valentina from '../images/19. Valen.png'
import Alejo from '../images/20. Alejo.png'
import Andrea from '../images/21. Andrea.png'


const equipo = () => {
    return (
        <div className="allC">
            <div className="containerequipo" id="animation">
            <div className="equipoTitle">
                <h2>Nuestro equipo de trabajo fue seleccionado por 
                    sus habilidades tanto en el desarrollo del juego 
                    como en la publicidad y estrategias de mercado.</h2>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Alejo} alt="Fire" />
                </div>
                <div className="Content">
                    <h2>ALEJANDRO CRUZ</h2>
                    <p>Encargado del diseño de niveles.</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Valentina} alt="Land" />
                </div>
                <div className="Content">
                    <h2>VALENTINA LOAIZA</h2>
                    <p>Encargada de la publicidad y diseño web.</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Andrea} alt="Air" />
                </div>
                <div className="Content">
                    <h2>ANDREA VIVEROS</h2>
                    <p>Encargada de la ambientación del juego y su estilo estético.</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Andres} alt="Air" />
                </div>
                <div className="Content">
                    <h2>ANDRES CALERO</h2>
                    <p>Encargado de modelar y animar al personaje principal.</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default equipo