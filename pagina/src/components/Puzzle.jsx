import React from 'react';
import './styles/Puzzle.scss';
import Puzzles from '../images/Puzzles.gif'

const Puzzle = () => {



    return (
        <div className="containerCharacter">
            <div className="part">
                <img src={Puzzles} alt="puzle" />
                <div className="text">
                    <h3>PUZLES Y COLECCIONABLES</h3>
                    <p>Podremos encontrar varios puzles a lo 
                        largo de todo el juego, estos serán la 
                        clave para poder completar los caminos 
                        y seguir avanzando por todos lo mundos 
                        mágicos que hay. La geometría sagrada 
                        te ayudará a comprender estos 
                        laberintos que serán ilusiones ópticas 
                        para el jugador.<br /><br />

                        Los coleccionables serán las galletas 
                        que se podrán encontrar en el mapa. 
                        Estas serán importantes para lograr 
                        pasar el juego, ya que si no tomas 
                        todas las galletas de un nivel, no será 
                        posible avanzar al siguiente.</p>
                </div>
            </div>
        </div>
    )
}
export default Puzzle