import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

export default class Footer extends React.Component {
    render() {
        return (
            <>
            <svg className="wave" width="100%" height="80px" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 C6.83050094,50 15.1638343,75 25,75 C41.4957514,75 62.4956597,0 81.2456597,0 C93.7456597,0 99.9971065,0 100,0 L100,100 L0,100" /></svg>
            <div className="footer">
                <div style={{minHeight: "auto"}} className="view-model footer-content">
                    <div className="footer-column">
                        <p>
                            <img src="/assets/favicon.png" alt="ArkFlame Logo" style={{marginLeft: "-8px", width:"70px"}} />
                        </p>
                        <p>
                            <div style={{marginBottom: "10px"}}><span className="footer-title">Acerca de:</span></div>
                            <div style={{marginBottom: "10px", maxWidth: "400px"}}><b>ArkFlame Network</b> es un servidor de Minecraft hispano con multiples modalidades para disfrutar solo o con amigos.</div>
                            <div style={{maxWidth: "400px"}}>Disponible para Java Edition en todas las versiones <b>desde 1.7 en adelante.</b></div>
                        </p>
                    </div>
                    <div className="footer-column">
                        <p>
                            <ul style={{listStyle: "none", textTransform: "uppercase"}}>
                                <li style={{marginBottom: "20px", textTransform: "none"}}>Copyright &copy; 2021 ArkFlame Network</li>
                                <li><div style={{marginBottom: "10px", textTransform: "none"}}><span className="footer-title">Links útiles:</span></div></li>
                                <li><a href={"https://status.arkflame.com"}>Estado del servidor</a></li>
                                <li><a href={"https://github.com/arkflame"}>Código fuente</a></li>
                                <li><Link to={"/store"}>Tienda</Link></li>
                                <li style={{marginBottom: "10px"}}><Link to={"/reglas"}>Reglas</Link></li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}