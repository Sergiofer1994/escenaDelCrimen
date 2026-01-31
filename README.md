
# Escena del Crimen - VIDEOCLUB

Este proyecto es una aplicación web interactiva que permite visualizar un catálogo de más de 600 películas del género "Mafias y Gangsters". Incluye un carrusel dinámico y una sección para añadir nuevas películas.

## 📸 Vista Previa
![Carrusel de Películas]![alt text](<src/images/films/README (2).jpeg>)

## 🛠️ Tecnologías Utilizadas
* **React**: Biblioteca principal para la interfaz de usuario.
* **JSON Server**: Utilizado para simular una API REST con el archivo `films.json`.
* **Vite**: Herramienta de construcción para un desarrollo rápido.
* **Git/GitHub**: Control de versiones y colaboración en la rama `dev`.

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Sergiofer1994/escenaDelCrimen.git
   
2. **Instalar dependencias:**
   Ejecuta este comando en la terminal para descargar todas las librerías necesarias:
   ```bash
   npm install
   
3. **Iniciar el servidor de datos (JSON Server):**
Es fundamental que este servidor esté corriendo en el puerto 3000 para que el carrusel funcione:

Bash
npx json-server --watch server/films.json --port 3000
4. **Iniciar la aplicación (Frontend):** 
Abre una segunda terminal y ejecuta el siguiente comando para lanzar la interfaz:

Bash
npm run dev

5. **Ver en el navegador: Una vez que ambos servidores estén activos, entra a:**
 http://localhost:5173/

 ## ⚖️ Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE) en este repositorio.