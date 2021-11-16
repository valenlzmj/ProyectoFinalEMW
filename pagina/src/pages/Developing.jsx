import React from 'react';
import ReactPlayer from 'react-player';


const Developing = () => {
    return(
        <main className="Developing" >
            <div className="all">
            <div className="container" id="animation">
                <h1>DESEARROLLO DEL JUEGO</h1>
            </div>
            <div className="bg">
            <div className="history">
                <h3>INICIOS</h3>
                <p>Lo que marcó el inicio de Ángelus, fue el desarrollo del mapa, empezamos a comprender cómo realizar los mapas para poder generar el efecto de ilusión óptica que deseamos.<br /><br />

                   </p>
                  
                       <ReactPlayer
                       url='https://youtu.be/1OPMK6KDCws'
                       width='20%'
                       height='20%'
                       controls
                       playing
                       volume='0.5'
                       />
                        <h3>creando el mundo </h3>
                <p>para iniciar la creación del mundo se pensaba primero en la estetica que se quería plasmar en el juego, por ende se optó por un diseño minimalista con colores vivos.<br /><br />

                   </p>
                   <ReactPlayer
                       url='https://youtu.be/BDmh5L0MPpw'
                       width='20%'
                       height='20%'
                       controls
                       playing
                       volume='0.5'
                       />
                        <h3>primeros niveles </h3>
                <p>con la idea del diseño definida se creó el primer nivel del videojuego aunque aún faltaba animar a un personaje agradable para la experiencia  .<br /><br />
                     </p>  
                      <ReactPlayer
                       url='https://youtu.be/lOWR6YwyO0I'
                       width='25%'
                       height='25%'
                       controls
                       playing
                       volume='0.5'
                       />
                       </div>
                    
            </div>
        </div>
        
        </main>
    )
}

export default Developing