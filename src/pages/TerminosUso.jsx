import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/TerminosUso.css';

function TerminosUso() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ContainerTerms">
            <div className="useTerms">
                <h1>Términos de Uso</h1>
                <p className="lastUpdate">Última actualización: 20 de enero de 2026</p>
            </div>

            <section className="termsIntro">
                <h2>1. Aceptación de los Términos</h2>
                <p>
                    Al acceder y utilizar Escena del Crimen, usted acepta estar sujeto a estos Términos de Uso,
                    todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de
                    todas las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos,
                    tiene prohibido usar o acceder a este sitio.
                </p>
            </section>

            <section className="contentUse">
                <h2>2. Uso del Contenido</h2>
                <p>
                    El contenido proporcionado en Escena del Crimen es únicamente para uso personal
                    y no comercial. Está prohibida la descarga, redistribución o grabación del contenido.
                </p>
                <p><strong>Restricciones de uso:</strong></p>
                <ul>
                    <li>No compartir tu cuenta con terceros fuera de tu hogar</li>
                    <li>No descargar ni redistribuir contenido</li>
                    <li>No usar el servicio con fines comerciales</li>
                    <li>No manipular el reproductor de video</li>
                </ul>
            </section>

            <section className="usuaryAccount">
                <h2>3. Cuenta de Usuario</h2>
                <p>
                    Para acceder a ciertas funciones del sitio, es posible que deba crear una cuenta.
                    Usted es responsable de:
                </p>
                <ul>
                    <li>Mantener la confidencialidad de su contraseña</li>
                    <li>Todas las actividades que ocurran bajo su cuenta</li>
                    <li>Notificarnos inmediatamente de cualquier uso no autorizado</li>
                    <li>Proporcionar información precisa y actualizada</li>
                </ul>
            </section>

            <section className="lsensitiveContent">
                <h2>4. Contenido Sensible</h2>
                <p>
                    Nuestro catálogo incluye películas y series con violencia, crimen y
                    temáticas para adultos.
                </p>
                <p className="warning">
                    ⚠️ Contenido recomendado para mayores de 16 años.
                </p>
            </section>

            <section className="lprivacyData">
                <h2>5. Privacidad y Protección de Datos</h2>
                <p>
                    Su privacidad es importante para nosotros. Recopilamos y procesamos datos personales de
                    acuerdo con el RGPD (Reglamento General de Protección de Datos) y la legislación española
                    aplicable. Los datos recopilados incluyen:
                </p>
                <ul>
                    <li>Información de registro (nombre, email)</li>
                    <li>Datos de navegación y cookies</li>
                    <li>Preferencias y configuraciones del usuario</li>
                </ul>
                <p>
                    Nunca compartiremos su información personal con terceros sin su consentimiento expreso,
                    excepto cuando sea requerido por ley.
                </p>
            </section>

            <section className="intellectualProperty">
                <h2>6. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido original en Escena del Crimen, incluyendo textos, gráficos, logos,
                    imágenes y software, es propiedad de Escena del Crimen S.L. y está protegido por las
                    leyes de propiedad intelectual españolas e internacionales.
                </p>
            </section>

            <section className="responsibilityLimit">
                <h2>7. Limitación de Responsabilidad</h2>
                <p>
                    Escena del Crimen no será responsable de ningún daño directo, indirecto, incidental,
                    especial o consecuente que resulte del uso o la imposibilidad de usar nuestro servicio,
                    incluso si hemos sido advertidos de la posibilidad de tales daños.
                </p>
            </section>

            <section className="modifications">
                <h2>8. Modificaciones</h2>
                <p>
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios
                    entrarán en vigor inmediatamente después de su publicación en el sitio web. Su uso
                    continuado del sitio después de cualquier cambio constituye su aceptación de los nuevos términos.
                </p>
            </section>

            <section className="contactSection">
                <h2>9. Contacto</h2>
                <p>
                    Si tiene preguntas sobre estos Términos de Uso, puede contactarnos en:
                </p>
                <ul>
                    <li>Email: legal@escenadelcrimen.com</li>
                    <li>Teléfono: +34 900 123 456</li>
                    <li>Dirección: Calle Ejemplo, 123, 46001 Valencia, España</li>
                </ul>
            </section>

            <div className="backLink">
                <Link to="/">← Volver al inicio</Link>
            </div>
        </div>
    );
}

export default TerminosUso;
