import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Formulario enviado correctamente!");

    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contacto</h2>
      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <label>Correo electronico:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label>Mensaje que desee enviarnos:</label>
      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
      />

      <button type="submit">Solicitar Información</button>

      <h2>Para solicitar más información:</h2>
      <p>
        <b>Email:</b> soporte@escenadelcrimen.com 📱 <b>Teléfono:</b> +34 981
        555 777
      </p>
    </form>
  );
}

export default ContactForm;
