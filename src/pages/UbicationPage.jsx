import Ubication from "../components/Ubication/Ubication.jsx";
import ContactForm from "../components/Ubication/ContactForm.jsx";
import "../style/UbicationPage.css";

function UbicationPage() {
  return (
    <div className="pageWrapper">
      <div className="ubicacion">
        <h1>Nuestra ubicación:</h1>
        <Ubication />
      </div>

      <div className="imagenCentrada">
        <h1>Nuestra tienda</h1>
        <img 
          src="src/images/background/videoclubEnter.jpg" 
          alt="Nuestra tienda" 
        />
      </div>

      <div className="contacto">
        <h1>Para contactarnos:</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default UbicationPage;