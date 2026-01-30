import Ubication from "../components/Ubication/Ubication.jsx";
import ContactForm from "../components/Ubication/ContactForm.jsx";
import "../style/Ubication.css";
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
    </div>
  );
}
export default Ubicacion;
