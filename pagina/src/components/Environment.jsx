import React from 'react';
import './styles/Environment.scss';
import Fire from '../images/Fuego.png'
import Land from '../images/Tierra.png'
import Air from '../images/Aire.png'
import Water from '../images/Agua.png'

const Environment = () => {
    return (
        <div className="allC">
            <div className="containerEnvironment">
            <div className="EnvironmentTitle">
                <h1>AMBIENTES DENTRO DEL MUNDO</h1>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Fire} alt="Fire" />
                </div>
                <div className="Content">
                    <h2>AMBIENTE FUEGO</h2>
                    <p>Primero el jugador pasará un ambiente de
                        fuego, donde encontrará muchas rocas
                        rodeadas de lava. Esto será en los cinco
                        primeros niveles.</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Land} alt="Land" />
                </div>
                <div className="Content">
                    <h2>AMBIENTE TIERRA</h2>
                    <p>Pasado en ambiente de fuego, el jugador 
                        subirá a un entorno oscuro rodeado por 
                        rocas. Esto será en los cinco niveles 
                        siguientes.</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Air} alt="Air" />
                </div>
                <div className="Content">
                    <h2>AMBIENTE AIRE</h2>
                    <p>Al llegar al nivel quince, el jugador 
                        encontrará el ambiente aire, donde el 
                        mundo estará flotando en un hermoso 
                        cielo azul.</p>
                </div>
            </div>
            <div className="Card">
                <div className="imgBx">
                    <img src={Water} alt="Water" />
                </div>
                <div className="Content">
                    <h2>AMBIENTE AGUA</h2>
                    <p>Al final, el jugador en los últimos 
                        cinco niveles, encontrará el ambiente 
                        agua, donde encontrará un mundo 
                        rodeado por cascadas, ríos y lagos.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Environment