import React from 'react';
import './styles/HomeTitle.scss';
import dog from '../images/03. Ángelus.png'

const HomeTitle = () => {
    return (
            <div className="all">
            <div className="container">
                <h0>ÁNGELUS</h0><br /><br /> 
                                   
            </div>
            <div className="bg">
            <div className="datos" id="animation">
             <p>Documentación de videojuego</p>  
            <h2>¿Qué es Ángelus?</h2>
                <p>Ángelus será un videojuego con
                    un posible despliegue en <b>teléfonos
                    móviles con sistemas Android</b>,
                    teniendo como público objetivo a las
                    personas entre 14 y 21 años, pero
                    conteniendo material idóneo para <b>edades de 10 y más años</b>.
                    Además de eso, este videojuego será
                    para un <b>solo jugador,</b> y su
                    género principal será <b>Puzle</b>.</p>
            </div>
            </div>
            <div className="sinopsis">
            <div className="part">
            <img src={dog} alt="Ángelus" />
                <div className="text">
                    <h3>SINOPSIS</h3>
                        <p>Ángelus será una exploración surrealista 
                            de tipo rompecabezas, donde el jugador 
                            guiará a un perrito a través de un laberinto 
                            de ilusiones ópticas.</p>
                        <p>El jugador podrá manipular el mundo, 
                            descubriendo así los caminos que oculta 
                            la geometría sagrada.</p>
                    </div>
                </div>
            </div>
            </div>
            
            
    )
}
export default HomeTitle

