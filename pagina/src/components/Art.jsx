import React from 'react';
import './styles/Art.scss';
import img1 from '../images/tetraedro.png'
import img2 from '../images/cubo.png'
import img3 from '../images/octaedro.png'
import img4 from '../images/icosaedro.png'
//import { useLocation } from 'react-router-dom';

const Art = () => {
    // const location = useLocation(); // Url
    // const [activeWindow, setActiveWindow] = useState(location.pathname); // Url pathname

    // const animationE = () => {
    //     let animation = document.getElementById('animation');
    //     let position = animation.getBoundingClientRect().top;
    //     let size = window.innerHeight;

    //     if(position < size){
    //         animation.style.animation = 'fade 3s ease-out';
    //     }
    // }

    // useEffect(() => {
    //     setActiveWindow(location.pathname);

    // }, [location]);

    // useEffect(() => {
    //     if(activeWindow === "/experiencia-del-juego"){
    //         window.addEventListener('scroll', animationE);
    //     }
    //     return () => {
    //         window.removeEventListener('scroll', animationE);
    //     }
    // }, [activeWindow]);

    return (

        <div className="containerArt">
            <div className="ArtTitle">
                <h1>ARTES CONCEPTUALES Y NIVELES</h1>
            </div>
            <div className="allCA" id="animation">
                <div className="Card">
                    <div className="imgBx">
                        <img src={img1} alt="tetraedro" />
                    </div>
                    <div className="Content">
                        <h2>NIVELES TETRAEDRO</h2>
                        <p>Los cinco primeros niveles serán en el
                            ambiente fuego, donde el jugador
                            guiará al personaje dentro de un
                            volcán.<br /><br />

                            El enemigo es el mapa, y en cada nivel
                            hay dos puzles para poder completar el
                            camino. Además de eso, hay una galleta
                            en cada uno de los niveles.</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="imgBx">
                        <img src={img2} alt="cubo" />
                    </div>
                    <div className="Content">
                        <h2>NIVELES CUBO</h2>
                        <p>El cubo comprende los niveles del seis
                            al diez, nuestro peludo amigo se
                            encuentra en oscuridad, y solo se ve
                            el camino y algunas estructuras, debe
                            realizar dos puzles en cada pantalla
                            para poder llegar a la meta. Además de
                            eso, en cada nivel hay dos galletas. Al
                            igual que en los anteriores niveles, el
                            enemigo es el mismo mapa.</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="imgBx">
                        <img src={img3} alt="octaedro" />
                    </div>
                    <div className="Content">
                        <h2>NIVELES OCTAEDRO</h2>
                        <p>Los niveles entre el once y el quince
                            se encuentran en el octaedro, el
                            ambiente aire. Aquí se deben realizar
                            dos puzles por cada pantalla para
                            completar el camino, y en el trayecto
                            encontrará dos galletas coleccionables.</p>
                    </div>
                </div>
                <div className="Card">
                    <div className="imgBx">
                        <img src={img4} alt="icosaedro" />
                    </div>
                    <div className="Content">
                        <h2>NIVELES ICOSAEDRO</h2>
                        <p>Estos son los últimos niveles, del
                            dieciséis hasta el veinte. El ambiente
                            del agua es de mayor dificultad, ya
                            que en cada pantalla hay tres puzles y
                            tres galletas. Pero, en el nivel veinte,
                            solo se puede obtener una galleta, la
                            dorada que marca el fin del juego.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art