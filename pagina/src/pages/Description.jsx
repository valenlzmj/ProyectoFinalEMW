import React from 'react';
import DescriptionTitle from '../components/DescriptionTitle';
import Goals from '../components/Goal';
import Character from '../components/Character';
import './styles/Description.scss';

const Description = () => {
    return(
        <main className="Description">
          <section className="title__section">
                <DescriptionTitle />
          </section>  
          <section className="goals__section">
                <Goals />
          </section> 
          <section className="character__section">
                <Character />
          </section> 
        </main>
    )
}

export default Description