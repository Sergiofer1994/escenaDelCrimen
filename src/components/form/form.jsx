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

      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
      />

      <button type="submit">Solicitar Información</button>
    </form>
  );
}

export default form;
