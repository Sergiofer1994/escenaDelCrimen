# 📽️ Escena del Crimen – Videoclub

Aplicación web interactiva tipo **videoclub**, centrada en el género **Mafias & Gangsters**, con un catálogo de más de **100 películas**.  
Permite explorar el contenido mediante **carruseles dinámicos** y gestionar películas a través de operaciones **CRUD** (Crear, Leer, Editar y Eliminar).

---

## 🎬 Descripción del proyecto

**Escena del Crimen** simula un videoclub digital especializado en cine de mafias y gánsters.  
El objetivo del proyecto es practicar el desarrollo de aplicaciones web con **React**, el manejo de **componentes reutilizables**, el consumo de **APIs simuladas** y la gestión de datos mediante operaciones CRUD.

---

## ⚙️ Funcionamiento de la aplicación

- El usuario puede **navegar por el catálogo de películas** organizado por temáticas.
- Las películas se muestran en **carruseles dinámicos**.
- Se pueden **añadir nuevas películas**, así como **editar o eliminar** las existentes.
- La información se obtiene desde una **API REST simulada** mediante JSON Server.
- La aplicación es completamente **responsive**, adaptándose a distintos dispositivos.

---

## 📸 Vista previa

![Vista previa del proyecto](src/images/films/README%20(2).jpeg)

---

## 🧩 Funcionalidades principales

- 🎞️ Catálogo de películas por temática  
- 🎠 Carruseles dinámicos  
- ➕ Añadir nuevas películas  
- ✏️ Editar y eliminar películas (CRUD)  
- 📄 Páginas informativas (About, Avisos Legales, Privacidad, etc.)  
- 📱 Diseño responsive  

---

## 🗂️ Estructura del proyecto

```bash
src/
├── components/          # Componentes reutilizables
│   ├── AppPromo
│   ├── Carrusel
│   ├── FeaturedMovie
│   ├── Footer
│   ├── FormMovies
│   ├── Header
│   ├── HeroCarrousel
│   ├── MovieCrud
│   └── Ubication
│
├── images/              # Imágenes y recursos gráficos
│
├── pages/               # Páginas principales de la aplicación
│
├── services/            # Servicios y llamadas a la API
│
├── style/               # Estilos CSS
│   ├── global.css
│   ├── layout.css
│   ├── Home.css
│   ├── Catalog.css
│   └── ...
│
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada de React
└── index.css            # Estilos globales

🛠️ Tecnologías y herramientas utilizadas

⚛️ React – Librería principal para la interfaz de usuario

⚡ Vite – Entorno de desarrollo rápido

🗄️ JSON Server – Simulación de una API REST

🎨 CSS – Estilos personalizados por página y layout

🔧 Git & GitHub – Control de versiones (rama dev)

🚀 Instalación y ejecución del proyecto

Sigue estos pasos para ejecutar el proyecto en local:

1️⃣ Clonar el repositorio

git clone https://github.com/Sergiofer1994/escenaDelCrimen.git
cd escenaDelCrimen

2️⃣ Instalar dependencias

npm install

3️⃣ Iniciar el servidor de datos (JSON Server)

Este proyecto utiliza JSON Server para simular una API REST.

npx json-server --watch server/films.json --port 3000

⚠️ Es importante que el servidor se ejecute en el puerto 3000.

4️⃣ Iniciar la aplicación frontend

En otra terminal:

npm run dev

5️⃣ Abrir en el navegador

http://localhost:5173

🧪 Scripts disponibles

npm run dev       # Inicia el entorno de desarrollo
npm run build     # Genera la build de producción
npm run preview   # Previsualiza la build

📌 Notas finales

El proyecto se encuentra en desarrollo activo.

La gestión de datos depende de un servidor JSON local.

Ideal para practicar React, CRUD y consumo de APIs simuladas.


## 👥 Presentación del equipo

Proyecto desarrollado por:

- Sergio Fernández  
- Melissa Gómez
- Juan luis
- Heber Paris


MIT License

Copyright (c) 2026 Escena del crimen Team.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
