import React from 'react';
import './styles/Goal.scss';
import goalI from '../images/goals.png'
import rulesI from '../images/rules.png'
import rewardsI from '../images/rewards.png'

const Goal = () => {
  
    return (
        <div className="containerGoal" id="animation">
            <div className="part">
                <img src={goalI} alt="Objetivo" />
                <div className="text">
                    <h3>OBJETIVOS</h3>
                    <p>Llegar a la meta atravesando el
                        laberinto geométrico.<br /><br />
                        Obtener las galletas en cada nivel.</p>
                </div>
            </div>
            <div className="part">
                <img src={rulesI} alt="Reglas" />
                <div className="text">
                    <h3>REGLAS</h3>
                    <p>El personaje solo se puede mover por el
                        camino.<br /><br />
                        Se debe llegar al final del camino
                        para poder completar el nivel.</p>
                </div>
            </div>
            <div className="part">
                <img src={rewardsI} alt="Recompensas" />
                <div className="text">
                    <h3>RECOMPENSAS</h3>
                    <p>Mover de forma correcta el mundo,
                        completa el camino.<br /><br />
                        Al conseguir todas las galletas de un
                        nivel, se desbloqueará el siguiente.</p>
                </div>
            </div>
        </div>
    )
}
export default Goal