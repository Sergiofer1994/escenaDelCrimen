<<<<<<< HEAD
import Ubication from "../components/Ubication/Ubication.jsx";
import ContactForm from "../components/form/contact-form.jsx";

import "../style/Ubicacion.css";

function Ubicacion() {
  return (
    <div className="contenedor">
      <div className="ubicacion">
        <h1>Nuestra ubicación:</h1>
        <Ubication />
      </div>

      <div className="contacto">
        <h1>Para contactarnos:</h1>
        <ContactForm />
      </div>
=======
import Ubication from "../components/Ubication/ubication.jsx";

function Ubicacion() {
  return (
    <div className="ubicacion">
      <h1>Nuestra ubicación:</h1>
      <Ubication />
>>>>>>> dev
    </div>
  );
}

export default Ubicacion;
