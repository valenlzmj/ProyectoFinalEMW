import React from 'react';
import ExperienceTitle from '../components/ExperienceTitle';
import Environment from '../components/Environment';
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
        </main>
    )
}

export default Experience