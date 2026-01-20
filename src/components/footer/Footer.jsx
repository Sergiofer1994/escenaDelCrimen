import './Footer.css';
import facebookLogo from '../../images/logos/facebookLogo.png';
import instagramIcon from '../../images/logos/instagramIcon.png';
import logoTiktok from '../../images/logos/logoTiktok.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="siteWrapper">
      <main className="mainContent">
        <h1>Contenido principal</h1>
        <p>Aquí va tu aplicación...</p>
      </main>

      <footer className="customFooter">
        <div className="footerGlowLine"></div>

        <div className="footerInner">
          <div className="footerGrid">

            <div>
              <h3 className="footerLogoText">
                Escena del <span>Crimen</span>
              </h3>
            </div>

            <div className="footerNav">
              <a href="#">Avisos Legales</a>
              <a href="#">Términos de uso</a>
              <a href="#">Sobre nosotros</a>
              
            </div>

            <div className="socialList">
              <Link to="#" className="socialLink">
                <img src={facebookLogo} alt="Facebook logo" />
                Facebook</Link>
              
              <Link to="#" className="socialLink">Instagram
              <img src={instagramIcon} alt="Instagram logo" /></Link>
              
              <Link to="#" className="socialLink">Tiktok
              <img src ={logoTiktok} alt="Tiktok logo" /></Link>
              
            </div>

          </div>

          <div className="footerBottom">
            <p>© 2026 Escena del Crimen</p>
            <p>Hecho con precisión forense</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
