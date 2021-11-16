import React from 'react';
import Equipo from '../components/equipo';
import './styles/Experience.scss';

const Team = () => {
    return(
        <main className="Team">
          
                      <div className="containerExperience">
                <h1>EXPERIENCIA DEL JUEGO</h1>
            </div>  
          <section className="equipo__section">
                <Equipo />
          </section> 

        </main>
    )
}

export default Team