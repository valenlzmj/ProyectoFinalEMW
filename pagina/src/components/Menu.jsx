import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Menu.scss';
import { AiFillHome } from 'react-icons/ai';
import { HiDocumentText, HiCode, HiMenu } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { BsFillPeopleFill, BsFillMoonFill } from "react-icons/bs";

const Menu = () => {

    const abrir = () => {
        let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".navigation");
        btn.onclick = function(){
            sidebar.classList.toggle("active");
        }
    }

    return (
        <div className="container">
            <div className="navigation">
                <div className="logo">
                    <HiMenu className="fontStyle" id="btn" />
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <span className="icon"><AiFillHome className="fontStyle" /></span>
                            <span className="title">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><HiDocumentText className="fontStyle" /></span>
                            <span className="title">Descripción del Juego</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><IoGameController className="fontStyle" /></span>
                            <span className="title">Experiencia del Juego</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><HiCode className="fontStyle" /></span>
                            <span className="title">Desarrollo del Juego</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><BsFillPeopleFill className="fontStyle" /></span>
                            <span className="title">Equipo de Trabajo</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><BsFillMoonFill className="fontStyle" /></span>
                            <span className="title">Modo Oscuro</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu