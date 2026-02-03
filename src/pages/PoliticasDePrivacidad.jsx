import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/PoliticasPrivacidad.css';  

function PoliticasPrivacidad() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pageContainer">
            <div className="privacyTitle">
                <h1>Política de Privacidad</h1>
                <p className="lastUpdate">Última actualización: 20 de enero de 2026</p>
            </div>

            <section className="generalInfo">
                <h2>1. Información General</h2>
                <p>
                    En <strong>Escena del Crimen S.L.</strong> nos comprometemos a proteger tu privacidad y 
                    tus datos personales conforme al <strong>Reglamento General de Protección de Datos (RGPD)</strong> 
                    (UE) 2016/679 y la <strong>Ley Orgánica 3/2018</strong> de Protección de Datos Personales.
                </p>
            </section>

            <section className="dataController">
                <h2>2. Responsable del Tratamiento</h2>
                <ul>
                    <li><strong>Titular:</strong> Escena del Crimen S.L.</li>
                    <li><strong>NIF:</strong> B-12345678</li>
                    <li><strong>Domicilio:</strong> Calle Real, 51, 15003 A Coruña</li>
                    <li><strong>Email:</strong> privacidad@escenadelcrimen.com</li>
                    <li><strong>Delegado de Protección de Datos:</strong> dpo@escenadelcrimen.com</li>
                </ul>
            </section>

            <section className="dataCollected">
                <h2>3. Datos que Recopilamos</h2>
                <p>Recopilamos los siguientes datos personales:</p>
                <div className="dataTypes">
                    <div className="dataType">
                        <h3>📧 Datos de Registro</h3>
                        <ul>
                            <li>Nombre completo</li>
                            <li>Email</li>
                            <li>Contraseña (encriptada)</li>
                        </ul>
                    </div>
                    <div className="dataType">
                        <h3>🎥 Datos de Uso</h3>
                        <ul>
                            <li>Películas vistas</li>
                            <li>Preferencias de género</li>
                            <li>Historial de reproducción</li>
                        </ul>
                    </div>
                    <div className="dataType">
                        <h3>📱 Datos Técnicos</h3>
                        <ul>
                            <li>Dirección IP</li>
                            <li>Navegador y dispositivo</li>
                            <li>Cookies de sesión</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="legalBasis">
                <h2>4. Base Legal del Tratamiento</h2>
                <ul>
                    <li><strong>Ejecución de contrato:</strong> Prestación del servicio de streaming</li>
                    <li><strong>Interés legítimo:</strong> Mejora de la experiencia del usuario</li>
                    <li><strong>Consentimiento:</strong> Envío de comunicaciones comerciales</li>
                </ul>
            </section>

            <section className="purposes">
                <h2>5. Finalidades del Tratamiento</h2>
                <ul>
                    <li>Gestión de tu cuenta de usuario</li>
                    <li>Personalización de recomendaciones</li>
                    <li>Procesamiento de reservas de películas</li>
                    <li>Envío de notificaciones sobre nuevos contenidos</li>
                    <li>Análisis estadístico anónimo</li>
                </ul>
            </section>

            <section className="cookiesSection">
                <h2>6. Cookies</h2>
                <p>
                    Utilizamos cookies técnicas, de preferencias y de análisis. Puedes 
                    configurarlas en cualquier momento desde nuestro 
                    <Link to="/cookies" className="inlineLink">Centro de Preferencias</Link>.
                </p>
            </section>

            <section className="userRights">
                <h2>7. Tus Derechos</h2>
                <p>Tienes derecho a:</p>
                <div className="rightsGrid">
                    <div className="rightCard">
                        <h3>📋 Acceso</h3>
                        <p>Conocer qué datos tenemos sobre ti</p>
                    </div>
                    <div className="rightCard">
                        <h3>✏️ Rectificación</h3>
                        <p>Modificar datos incorrectos</p>
                    </div>
                    <div className="rightCard">
                        <h3>🗑️ Supresión</h3>
                        <p>"Derecho al olvido"</p>
                    </div>
                    <div className="rightCard">
                        <h3>⏸️ Oposición</h3>
                        <p>Dejar de recibir comunicaciones</p>
                    </div>
                </div>
            </section>

            <section className="retention">
                <h2>8. Conservación de Datos</h2>
                <ul>
                    <li><strong>Cuenta activa:</strong> Mientras uses nuestros servicios</li>
                    <li><strong>Cuenta inactiva:</strong> 2 años máximo</li>
                    <li><strong>Reservas:</strong> 5 años por obligación legal</li>
                </ul>
            </section>

            <section className="security">
                <h2>9. Seguridad de los Datos</h2>
                <p>
                    Aplicamos medidas técnicas y organizativas avanzadas:
                </p>
                <ul>
                    <li>🔒 Encriptación SSL/TLS</li>
                    <li>🛡️ Servidores seguros en España</li>
                    <li>🔐 Contraseñas con hash bcrypt</li>
                    <li>📋 Copias de seguridad cifradas</li>
                </ul>
            </section>

            <section className="thirdParties">
                <h2>10. Cesión de Datos</h2>
                <p>
                    No cedemos tus datos a terceros, salvo:
                </p>
                <ul>
                    <li>📮 Proveedores de servicios (hosting, email)</li>
                    <li>⚖️ Obligación legal (Autoridades judiciales)</li>
                </ul>
            </section>

            <section className="minors">
                <h2>11. Menores de Edad</h2>
                <p>
                    Nuestro contenido está dirigido a mayores de 16 años. No recopilamos 
                    datos de menores sin consentimiento parental verificado.
                </p>
            </section>

            <div className="backLink">
                <Link to="/">← Volver al inicio</Link>
            </div>
        </div>
    );
}

export default PoliticasPrivacidad;
