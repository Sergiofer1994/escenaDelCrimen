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
        {/* ⬅️ VERSION DESKTOP (Grid completo) */}
        <div className="footerGrid footerDesktop">
          <div>
            <h3 className="footerLogoText">
              Escena del <span>Crimen</span>
            </h3>
          </div>

          <div className="footerNav">
            <Link to="/avisos-legales">Avisos Legales</Link>
            <Link to="/terminos-uso">Términos de uso</Link>
            <Link to="/sobre-nosotros">Sobre nosotros</Link>
            {/* ✅ CORREGIDA LA RUTA */}
            <Link to="/politicas-de-privacidad">Política de Privacidad</Link>
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

        {/* ⬅️ VERSION MÓVIL (CORREGIDA COMPLETA) */}
        <div className="footerMobile">
          {/* Redes sociales SOLO ICONOS */}
          <div className="footerMobileSocial">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok">
              <img src={logoTiktok} alt="TikTok" />
            </a>
          </div>

          {/* ✅ LINKS LEGALES MÓVIL CON PRIVACIDAD */}
          <div className="footerMobileLinks">
            <Link to="/avisos-legales" title="Avisos Legales">AvisosLegales</Link>
            <span className="separator">•</span>
            <Link to="/terminos-uso" title="Términos de Uso">TerminosUso</Link>
            <span className="separator">•</span>
            <Link to="/sobre-nosotros" title="Sobre Nosotros">Nosotros</Link>
            <span className="separator">•</span>
            <Link to="/politicas-de-privacidad" title="Política de Privacidad">Privacidad</Link>
          </div>

          {/* Copyright minimalista */}
          <div className="footerMobileCopyright">
            © 2026
          </div>
        </div>

        {/* ⬅️ FOOTER BOTTOM (Solo desktop) */}
        <div className="footerBottom footerDesktop">
          <p>© 2026 Escena del Crimen</p>
          <p>Hecho con precisión forense</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
