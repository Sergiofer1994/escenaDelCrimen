// Footer.jsx - Componente actualizado
import './Footer.css';
import facebookLogo from '../../images/logos/facebookLogo.png';
import instagramIcon from '../../images/logos/instagramIcon.png';
import logoTiktok from '../../images/logos/logoTiktok.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
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
            <Link to="/avisos-legales">Avisos Legales</Link>
            <Link to="/terminos-uso">Términos de uso</Link>
            <Link to="/sobre-nosotros">Sobre nosotros</Link>
          </div>

          <div className="socialList">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialLink">
              <img src={facebookLogo} alt="Facebook logo" />
              <span>Facebook</span>
            </a>
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialLink">
              <img src={instagramIcon} alt="Instagram logo" />
              <span>Instagram</span>
            </a>
            
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="socialLink">
              <img src={logoTiktok} alt="Tiktok logo" />
              <span>Tiktok</span>
            </a>

          </div>

        </div>

        <div className="footerBottom">
          <p>© 2026 Escena del Crimen</p>
          <p>Hecho con precisión forense</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;