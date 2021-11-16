import React from 'react';
import './styles/Footer.scss';

const Footer = () => {

    return (
            <div class="main-footer">
                <div class="container">
                    <div className="row">
                        <p className="col-sm">
                            {new Date().getFullYear()} |
                            <a href="mailto:alejandro.cruz_vil@uao.edu.co">  alejandro.cruz_vil@uao.edu.co </a> | 
                            <a href="mailto:valentina.loaiza@uao.edu.co">  valentina.loaiza@uao.edu.co </a> |  
                            <a href="mailto:andrea.saavedra@uao.edu.co">  andrea.saavedra@uao.edu.co </a> | 
                            <a href="mailto:andres_fel.calero@uao.edu.co">  andres_fel.calero@uao.edu.co </a> 
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Footer
