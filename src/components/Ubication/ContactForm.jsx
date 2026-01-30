import './ContactForm.css';

function ContactForm() {
  return (
    <form className="formularioContacto">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Escribe tu nombre"
        required
      />

      <label htmlFor="email">Correo Electrónico</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Escribe tu correo electrónico"
        required
      />

      <label htmlFor="message">Mensaje</label>
      <textarea
        id="message"
        name="message"
        placeholder="Escribe tu mensaje"
        required
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
