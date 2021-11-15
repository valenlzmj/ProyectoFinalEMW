import React from 'react';
import ExperienceTitle from '../components/ExperienceTitle';
import Environment from '../components/Environment';
import Art from '../components/Art';
import Puzzle from '../components/Puzzle';
import './styles/Experience.scss';

const Experience = () => {
    return(
        <main className="Experience">
          <section className="title__section">
                <ExperienceTitle />
          </section> 
          <section className="environment__section">
                <Environment />
          </section> 
          <section className="art__section">
                <Art />
          </section> 
          <section className="puzzle__section">
                <Puzzle />
          </section> 
        </main>
    )
}

export default Experience