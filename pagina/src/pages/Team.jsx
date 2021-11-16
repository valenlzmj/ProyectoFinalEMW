import React from 'react';
import Equipo from '../components/equipo';
import Unete from '../components/unete';
import './styles/Experience.scss';

const Team = () => {
    return(
        <main className="Team">
          
           <div className="containerExperience">
                <h1>EQUIPO DE TRABAJO</h1>
            </div>  
          <section className="equipo__section">
                <Equipo />
          </section> 
          <div className="containerExperience">
          <section className="unete__section">
          
            <h2> Únete al equipo, envíanos un mail</h2>
                <Unete />
          </section> 
</div>
        </main>
    )
}

export default Team