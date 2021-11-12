import React from 'react';
import './styles/Menu.scss';

const Menu = () => {
    return (
        <div className="container">
            <div className="navgation">
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"></span>
                            <span className="title">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"></span>
                            <span className="title">Descripción del Juego</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"></span>
                            <span className="title">Experiencia del Juego</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"></span>
                            <span className="title">Desarrollo del Juego</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"></span>
                            <span className="title">Equipo de Trabajo</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"></span>
                            <span className="title">Modo Oscuro</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu