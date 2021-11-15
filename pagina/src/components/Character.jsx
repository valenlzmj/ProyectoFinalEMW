import React from 'react';
import './styles/Character.scss';
import dog from '../images/perrito.gif'

const Character = () => {



    return (
        <div className="containerCharacter">
            <div className="CharacterTitle">
                <h1>¿QUIÉN ES EL PERSONAJE PRINCIPAL?</h1>
            </div>
            <div className="part">
                <img src={dog} alt="Dog" />
                <div className="text">
                    <h3>ÁNGELUS</h3>
                    <p>Él sería el personaje principal, será
                        por ahora el único con el que el
                        jugador podrá atravesar los diferentes
                        niveles.<br /><br />

                        Tiene siete meses, es cafecito con 
                        manchas de varios tonos en todo su 
                        cuerpo. Le encanta bañar, adora el 
                        agua. Es un perrito lleno de mucho 
                        amor por las galletas de huesitos.<br /><br />

                        Dentro de sus habilidades encontramos
                        que es muy buen nadador, corre rápido, 
                        es ágil y puede saltar muy alto.</p>
                </div>
            </div>
        </div>
    )
}
export default Character