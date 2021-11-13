import React from 'react';
import DescriptionTitle from '../components/DescriptionTitle';
import './styles/Description.scss';

const Description = () => {
    return(
        <main className="Description">
          <section className="title__section">
                <DescriptionTitle />
          </section>  
        </main>
    )
}

export default Description