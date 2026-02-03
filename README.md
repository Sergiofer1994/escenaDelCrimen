
📽️ Escena del Crimen – Videoclub

Aplicación web interactiva tipo videoclub centrada en el género Mafias & Gangsters, con un catálogo de más de 100 películas.
Permite explorar el contenido mediante carruseles dinámicos y gestionar películas mediante operaciones CRUD.

📸 Vista previa
![alt text](<src/images/films/README (2).jpeg>)
🧩 Funcionalidades principales

🎞️ Catálogo de películas por temática

🎠 Carruseles dinámicos

➕ Añadir nuevas películas

✏️ Editar y eliminar películas (CRUD)

📄 Páginas informativas (About, Avisos Legales, Privacidad, etc.)

📱 Diseño responsive

🗂️ Estructura del proyecto
src/
├── components/
│   ├── AppPromo
│   ├── carrusel
│   ├── FeaturedMovie
│   ├── footer
│   ├── formMovies
│   ├── header
│   ├── HeroCarrousel
│   ├── MovieCrud
│   └── Ubication
│
├── images/
├── pages/
├── services/
├── style/
│   ├── global.css
│   ├── layout.css
│   ├── Home.css
│   ├── Catalog.css
│   └── ...
│
├── App.jsx
├── main.jsx
└── index.css

🛠️ Tecnologías utilizadas

⚛️ React – Librería principal para la interfaz de usuario

⚡ Vite – Entorno de desarrollo rápido

🗄️ JSON Server – Simulación de API REST

🎨 CSS – Estilos personalizados por página y layout

🔧 Git & GitHub – Control de versiones (rama dev)

🚀 Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto en local:

1️⃣ Clonar el repositorio
git clone https://github.com/Sergiofer1994/escenaDelCrimen.git
cd escenaDelCrimen

2️⃣ Instalar dependencias
npm install

3️⃣ Iniciar el servidor de datos (JSON Server)

Este proyecto utiliza JSON Server para simular una API REST.

npx json-server --watch server/films.json --port 3000


⚠️ Es importante que el servidor corra en el puerto 3000.

4️⃣ Iniciar la aplicación frontend

En otra terminal:

npm run dev

5️⃣ Abrir en el navegador
http://localhost:5173

🧪 Scripts disponibles
npm run dev       # Inicia el entorno de desarrollo
npm run build     # Genera la build de producción
npm run preview   # Previsualiza la build

📌 Notas

El proyecto está en desarrollo activo.

La gestión de datos depende del servidor JSON local.

Ideal para prácticas con React, CRUD y consumo de APIs simuladas.