import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Menu.scss';
import { AiFillHome } from 'react-icons/ai';
import { HiDocumentText, HiCode, HiMenu } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { BsFillPeopleFill} from "react-icons/bs";



const Menu = () => {

    const location = useLocation(); // Url
    const headerRef = useRef(null);
    const [activeWindow, setActiveWindow] = useState(location.pathname); // Url pathname
    useEffect(() => {
        setActiveWindow(location.pathname);

    }, [location]);

    const abrir = () => {
        
        let sidebar = document.querySelector(".navigation");
        sidebar.classList.toggle("active");

    }

    const animationE = () => {
        let animation = document.getElementById('animation');
        let position = animation.getBoundingClientRect().top;
        let size = window.innerHeight;

        if(position < size){
            animation.style.animation = 'fade 2s ease-out';
        }
    }

    const animationD = () => {
        let animation = document.getElementById('animation');
        let position = animation.getBoundingClientRect().top;
        let size = window.innerHeight;

        if(position < size){
            animation.style.animation = 'fade 2s ease-out';
        }
    }

    useEffect(() => {
        if(activeWindow === "/experiencia-del-juego"){
            window.addEventListener('scroll', animationE);
        }
        return () => {
            window.removeEventListener('scroll', animationE);
        }
    }, [activeWindow]);

    useEffect(() => {
        if(activeWindow === "/descripcion-del-juego"){
            window.addEventListener('scroll', animationD);
        }
        return () => {
            window.removeEventListener('scroll', animationD);
        }
    }, [activeWindow]);

    return (
        <header className="container" ref={headerRef}>
            <nav className="navigation">
                <div className="logo">
                    <HiMenu className="fontStyle" id="btn" onClick={abrir} />
                </div>
                <ul>
                    <li>
                        <Link className={activeWindow === "/" ? "active" : "null"} to="/">
                            <span className="icon"><AiFillHome className="fontStyle" /></span>
                            <span className="title">Inicio</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={activeWindow === "/descripcion-del-juego" ? "active" : "null"} to="/descripcion-del-juego">
                            <span className="icon"><HiDocumentText className="fontStyle" /></span>
                            <span className="title">Descripción del Juego</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={activeWindow === "/experiencia-del-juego" ? "active" : "null"} to="/experiencia-del-juego">
                            <span className="icon"><IoGameController className="fontStyle" /></span>
                            <span className="title">Experiencia del Juego</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={activeWindow === "/desarrollo-del-juego" ? "active" : "null"} to="/desarrollo-del-juego">
                            <span className="icon"><HiCode className="fontStyle" /></span>
                            <span className="title">Desarrollo del Juego</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={activeWindow === "/equipo-de-trabajo" ? "active" : "null"} to="/equipo-de-trabajo">
                            <span className="icon"><BsFillPeopleFill className="fontStyle" /></span>
                            <span className="title">Equipo de Trabajo</span>
                        </Link>
                    </li>
                    {/* <li>
                        <a href="#">
                            <span className="icon"><BsFillMoonFill className="fontStyle" /></span>
                            <span className="title">Modo Oscuro</span>
                        </a>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Menu