# 🌐 Portafolio Web — Fernando Urlich

[![GitHub](https://img.shields.io/badge/GitHub-Feronoodles-181717?style=for-the-badge&logo=github)](https://github.com/Feronoodles)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fernando%20Urlich-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/fernando-urlich-11ba67207/)

Portafolio web personal desarrollado con HTML, CSS y JavaScript vanilla. Diseñado con una estética moderna de tema oscuro con acentos en verde neón, efectos de glassmorphism, partículas animadas y gradientes dinámicos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)

---

## ✨ Características

- **Diseño Oscuro Premium** — Fondo con gradientes animados, patrón de puntos y overlay radial en tonos verde/azul oscuro.
- **Partículas Flotantes** — Partículas generadas dinámicamente con posición, tamaño y velocidad aleatorias.
- **Navbar Inteligente** — Se oculta al hacer scroll hacia abajo y reaparece al subir. Incluye resaltado automático de la sección activa.
- **Menú Responsive** — Menú hamburguesa con animación de deslizamiento para dispositivos móviles.
- **Cards de Proyectos** — Grid responsivo con efecto hover (zoom de imagen + overlay), tags de tecnologías y botones de acción.
- **Formulario de Contacto** — Integrado con [Web3Forms](https://web3forms.com/) para envío de mensajes sin backend propio, con feedback visual de estado.
- **Glassmorphism** — Efecto de blur en el header y fondos semi-transparentes en las cards.
- **Animaciones** — Gradientes que se desplazan, efecto eléctrico en el formulario, transiciones suaves en hover.

---

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html          # Página principal (secciones: Inicio, Proyectos, Contacto)
├── css/
│   └── styles.css      # Estilos completos: diseño, animaciones y responsive
├── src/
│   ├── navbar.js       # Lógica del navbar: ocultar/mostrar, scroll suave, menú móvil
│   ├── particles.js    # Generación de partículas flotantes animadas
│   └── contact.js      # Envío del formulario vía Web3Forms con manejo de estados
├── img/
│   ├── bg-circuito.svg # SVG decorativo para el fondo del formulario
│   ├── okr-img.png     # Captura del proyecto OKR Strat-Master
│   ├── movilidad-img.png # Captura del proyecto Movilidad
│   └── portafolio-img.png # Captura de este portafolio
└── README.md
```

---

## 🚀 Instalación y Uso

No requiere instalación de dependencias ni build tools. Es un sitio estático puro.

```bash
# Clonar el repositorio
git clone https://github.com/Feronoodles/portafolio.git

# Abrir en el navegador
# Opción 1: Abrir index.html directamente
start index.html

# Opción 2: Usar Live Server (VS Code) o cualquier servidor local
npx serve .
```

---

## 🖥️ Secciones

### Inicio
Pantalla de bienvenida a pantalla completa con nombre, rol (Desarrollador Backend) y descripción profesional. Incluye un CTA que lleva a la sección de proyectos.

### Proyectos
Grid responsivo que muestra los proyectos destacados:

| Proyecto | Descripción | Tecnologías |
|----------|------------|-------------|
| **OKR Strat-Master** | Sistema de gestión de OKRs | Java, Spring Boot, MySQL, HTML, CSS, JS |
| **Movilidad** | Sistema de gestión de movilidad | Java, Spring Boot, PostgreSQL, Docker, Flutter |
| **Portafolio Web** | Este portafolio personal | HTML, CSS, JavaScript |

### Contacto
Formulario funcional con campos de nombre, email, asunto y mensaje. Los mensajes se envían a través de Web3Forms y el usuario recibe feedback visual de éxito o error.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura semántica del sitio |
| **CSS3** | Estilos, animaciones, glassmorphism, responsive design |
| **JavaScript** | Interactividad: navbar, partículas, formulario |
| **Font Awesome 6** | Iconografía (redes sociales, formulario, navegación) |
| **Google Fonts** | Tipografía Montserrat |
| **Web3Forms** | API para envío de formularios sin backend |

---

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints en `768px`:

- **Desktop** — Grid de 3 columnas para proyectos, navbar horizontal.
- **Móvil** — Grid de 1 columna, menú hamburguesa con panel deslizante.

---

## 📄 Licencia

Este proyecto es de uso personal. Si deseas usarlo como base para tu propio portafolio, ¡adelante! Solo recuerda cambiar el contenido personal.

---

<p align="center">
  Hecho con 💚 por <a href="https://github.com/Feronoodles">Fernando Urlich</a>
</p>
