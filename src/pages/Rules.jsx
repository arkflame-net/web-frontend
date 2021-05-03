import React from "react";
import Container from "../components/layout/Container";

import './Rules.css'

export default class Rules extends React.Component {
    render() {
        return (
            <div className="rules" style={{color: "white"}}>
                <Container
                    id="niveles-de-gravedad"
                    header={["Reglas > ", <a href="#niveles-de-gravedad">{"0. Niveles de Gravedad"}</a>]}
                >
                    <div>
                        <p className="rule-item">
                            <span className="rule-level rl-muy-baja">0.1 Muy Baja: 12 Horas de sancion.</span>
                        </p>
                        <p className="rule-item">
                            <span className="rule-level rl-baja">0.2 Baja: 3 Dias de sancion.</span>
                        </p>
                        <p className="rule-item">
                            <span className="rule-level rl-media-baja">0.3 Media Baja: 7 Dias de sancion.</span>
                        </p>
                        <p className="rule-item">
                            <span className="rule-level rl-media">0.4 Media: 12 Dias de sancion.</span>
                        </p>
                        <p className="rule-item">
                            <span className="rule-level rl-media-alta">0.5 Media Alta: 18 Dias de sancion.</span>
                        </p>
                        <p className="rule-item">
                            <span className="rule-level rl-alta">0.6 Alta: 24 Dias de sancion.</span>
                        </p>
                        <p className="rule-item">
                            <span className="rule-level rl-maxima">0.7 Máxima: 30 Dias de sancion.</span>
                        </p>
                    </div>
                </Container>

                <Container
                    id="reglas-de-chat"
                    header={["Reglas > ", <a href="#reglas-de-chat">{"1. Reglas de Chat"}</a>]}
                >
                    <div>
                        <p className="rule-item">
                            <b>1.01</b> Las agresiones (Toxicidad, Insultos, Amenazas) estan prohibidas a menos que sean leves. <br />
                            <span className="rule-level rl-muy-baja">(Gravedad: Muy Baja Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.02</b> La publicidad de productos ajenos a usuarios esta prohibida. (Aplica en ambito privado) <br />
                            <span className="rule-level rl-media-baja">(Gravedad: Media Baja Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.03</b> Esta prohibido enviar contenido explicito o inducir a visualizar el mismo. <br />
                            <span className="rule-level rl-maxima">(Gravedad: Máxima Tipo: Mute (ArkFlame) Ban (Discord))</span>
                        </p>

                        <p className="rule-item">
                            <b>1.04</b> Hacer flood (tapar el chat con texto) no esta permitido excepto en los canales que lo permitan. <br />
                            <span className="rule-level rl-muy-baja">(Sancion: 6 Horas Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.05</b> Esta prohibido el acoso a usuarios del servidor. <br />
                            <span className="rule-level rl-media">(Gravedad: Media Tipo: Mute (ArkFlame) Ban (Discord))</span>
                        </p>

                        <p className="rule-item">
                            <b>1.06</b> Esta prohibido compartir datos privados de otras personas. <br />
                            <span className="rule-level rl-alta">(Gravedad: Alta Tipo: Mute (ArkFlame) Ban (Discord))</span>
                        </p>

                        <p className="rule-item">
                            <b>1.07</b> Esta prohibido "absorber" usuarios del server a otros server. <br />
                            <span className="rule-level rl-alta">(Gravedad: Alta Tipo: Mute (ArkFlame) Ban (Discord))</span>
                        </p>

                        <p className="rule-item">
                            <b>1.08</b> Esta prohibido estafar a otros usuarios del server por rango. <br />
                            <span className="rule-level rl-alta">(Gravedad: Alta Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.09</b> Las amenazas al servidor estan prohibidas. <br />
                            <span className="rule-level rl-media">(Gravedad: Media Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.10</b> Los renames, nicks o carteles que incumplan normas de chat estan prohibidos. <br />
                            <span className="rule-level rl-muy-baja">(Gravedad: Muy Baja Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.11</b> Esta prohibido desinformar a los usuarios con informacion falsa a menos que sea sin contexto. <br />
                            <span className="rule-level rl-muy-baja">(Gravedad: Muy Baja Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.12</b> Esta prohibido fomentar el odio y atacar al servidor. <br />
                            <span className="rule-level rl-muy-baja">(Gravedad: Muy Baja Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.13</b> Esta prohibido el mal uso de canales en nuestro Discord. <br />
                            <span className="rule-level rl-muy-baja">(Gravedad: Muy Baja Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>1.14</b> Esta prohibido impersonar a otros usuarios sin su permiso. <br />
                            <span className="rule-level rl-muy-baja">(Gravedad: Muy Baja Tipo: Mute)</span>
                        </p>
                    </div>
                </Container>

                <Container
                    id="cheating"
                    header={["Reglas > ", <a href="#cheating">{"2. Reglas relacionadas al Cheating"}</a>]}
                >
                    <div>
                        <p className="rule-item">
                            <b>2.1</b> Cualquier tipo de uso de ventaja ilegal esta prohibido en el servidor. <br />
                            <span className="rule-level rl-maxima">(Gravedad: Máxima Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>2.2</b> Los cheats encontrados en ScreenShare que tengan menos de 14 dias de antiguedad son considerados ilegales. <br />
                            <span className="rule-level rl-maxima">(Gravedad: Máxima Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>2.3</b> El uso de modificadores de internet (bats/regedit) esta prohibido. Si se permite que el staff lo borre se aplica sancion Media Baja. <br />
                            <span className="rule-level rl-alta">(Gravedad: Alta Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>2.4</b> Cualquier tipo de botting es ilegal. <br />
                            <span className="rule-level rl-maxima">(Gravedad: Máxima Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>2.5</b> El abuso de bugs en el servidor es ilegal. <br />
                            <span className="rule-level rl-media-baja">(Gravedad: Media Baja Tipo: Ban)</span>
                        </p>
                    </div>
                </Container>

                <Container
                    id="staff"
                    header={["Reglas > ", <a href="#staff">{"3. Reglas relacionadas al Staff"}</a>]}
                >
                    <div>
                        <p className="rule-item">
                            <b>3.1</b> Los usuarios no pueden trollear al staff si piden ayuda. <br />
                            <span className="rule-level rl-muy-baja">(Gravedad: Muy Baja Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>3.2</b> Esta prohibido no aceptar ScreenShares en caso de sospecha. <br />
                            <span className="rule-level rl-alta">(Gravedad: Alta Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>3.3</b> No se permite cerrar las ScreenShares a menos que tarde mas de 1 hora 30 min. y/o hay riesgo de privacidad. <br />
                            <span className="rule-level rl-media-alta">(Gravedad: Media Alta Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>3.4</b> Las screenshares deben tener registros de Minecraft. <br />
                            <span className="rule-level rl-media-alta">(Gravedad: Media Alta Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>3.5</b> Los Staff requieren pruebas antes de sancionar a un usuario.
                    </p>

                        <p className="rule-item">
                            <b>3.6</b> Los Staff no pueden compartir datos de usuarios o del Chat de staff.
                    </p>

                        <p className="rule-item">
                            <b>3.7</b> Los Staff deben cumplir su rol correctamente, no corromper y aplicar sanciones solo segun lo que digan las reglas.
                    </p>
                    </div>
                </Container>

                <Container
                    id="otras"
                    header={["Reglas > ", <a href="#otras">{"4. Otras reglas"}</a>]}
                >
                    <div>
                        <p className="rule-item">
                            <b>4.1</b> Los reportes deben tener pruebas con antiguedad de menos del tiempo de sancion correspondiente
                    </p>

                        <p className="rule-item">
                            <b>4.2</b> Los reportes no pueden tener pruebas manipuladas. <br />
                            <span className="rule-level rl-baja">(Gravedad: Baja Tipo: Mute)</span>
                        </p>

                        <p className="rule-item">
                            <b>4.3</b> Campear en [SkyWars/ArenaPvP] es ilegal. <br />
                            <span className="rule-level rl-baja">(Gravedad: Baja Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>4.4</b> Hacer teaming en [SkyWars/ArenaPvP/CTW] es ilegal a menos que se especifique que sea legal. <br />
                            <span className="rule-level rl-baja">(Gravedad: Baja Tipo: Ban)</span>
                        </p>

                        <p className="rule-item">
                            <b>4.5</b> No se permite el uso de alts para evadir sancion. <br />
                            <span className="rule-level rl-baja">(Se aplica tiempo restante de sancion sumado de tiempo de sancion baja [Se mantiene el tipo de sancion])</span>
                        </p>

                        <p className="rule-item">
                            <b>4.6</b> Esta prohibido incumplir el TOS del servicio de terceros que aplique en nuestro servidor. <br />
                            <span className="rule-level rl-baja">(Gravedad: Baja Tipo: Ban)</span>
                        </p>
                    </div>
                </Container>

                <Container
                    id="notas"
                    header={["Reglas > ", <a href="#notas">{"Notas adicionales"}</a>]}
                >
                    <ul style={{marginLeft: "40px", marginBottom: "10px"}}>
                        <li>Las reglas solo aplican para nuestro servidor.</li>
                        <li>No aplican en ambito privado a menos que se especifique.</li>
                        <li>Cualquier pedido de modificacion de reglas puede ser realizado en nuestro Discord.</li>
                    </ul>
                </Container>
            </div>
        )
    }
}