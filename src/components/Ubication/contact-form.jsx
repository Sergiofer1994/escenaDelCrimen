function name(params) {
    <form className="formularioContacto">
        <label for="name">
            Nombre
        </label>
        <input type="text" id="name" name="name" placeholder="Escribe tu nombre" required />
        <label for="email">
            Correo Electrónico
        </label>
        <input type="email" id="email" name="email" placeholder="Escribe tu correo electrónico" required />
        <label for="message">
            Mensaje
        </label>
        <textarea id="message" name="message" placeholder="Escribe tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
    </form>
}