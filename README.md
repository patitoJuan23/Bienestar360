# Bienestar 360° 🌟

**Bienestar 360°** es una aplicación web educativa e interactiva diseñada para ayudar a estudiantes a evaluar, reflexionar y mejorar sus hábitos de bienestar de manera integral.

La aplicación permite medir hábitos en 6 áreas clave: **Descanso**, **Hidratación**, **Tiempo de pantalla**, **Hábitos de estudio**, **Actividad física** y **Concentración**, proporcionando un índice integral de 0 a 100, recomendaciones personalizadas, una ruleta interactiva de pausas activas y un seguimiento diario de retos.

---

## 🚀 Características Principales

1. **Pantalla de Inicio Dinámica**: Introducción interactiva a la importancia del equilibrio entre salud física, mental y rendimiento académico.
2. **Perfil de Usuario Local**: Registro de apodo, rango de edad y grado académico, almacenado de forma 100% privada en el `localStorage` del navegador.
3. **Cuestionario de Evaluación Categorizado**: 12 preguntas cuidadosamente estructuradas con puntuación automática e independiente por categoría.
4. **Resultados 360° con Gráficos Integrados**: Visualización del índice total mediante un medidor circular SVG, barras de nivel de cada categoría y comparación entre la evaluación actual y la anterior.
5. **Recomendaciones Personalizadas**: Generación automática de tips y consejos educativos priorizando las áreas con menor puntuación.
6. **Ruleta de Micro-Retos (Canvas 2D)**: Ruleta interactiva animada con física de desaceleración que asigna pausas activas y ejercicios de relajación.
7. **Seguimiento de Retos Diarios**: Checklist interactivo de hábitos saludables con barra de progreso persistente.
8. **Diseño Moderno y Responsivo**: Interfaz juvenil con efectos de cristal (*glassmorphism*), animaciones fluidas y adaptable a celulares, tablets y ordenadores.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica sin dependencias externas.
- **CSS3 Vanilla**: Variables CSS, Flexbox, CSS Grid, Glassmorphism, animaciones y diseño 100% responsive.
- **JavaScript Vanilla (ES6+)**: Lógica de cuestionario, cálculo de puntuaciones, canvas 2D para la ruleta, manipulación del DOM y persistencia en `localStorage`.
- **FontAwesome CDN & Google Fonts**: Tipografía moderna (*Outfit* y *Plus Jakarta Sans*) e iconos vectoriales.

*Sin frameworks, Node.js, Python, Flask, npm ni bases de datos. 100% compatible como página estática para GitHub Pages.*

---

## 📁 Estructura del Proyecto

```text
Bienestar360/
├── index.html       # Página principal y vistas SPA
├── style.css        # Sistema de diseño CSS y estilos responsive
├── script.js        # Lógica de evaluación, ruleta, retos y localStorage
├── README.md        # Documentación del proyecto
└── assets/          # Recursos estáticos o ilustraciones
```

---

## 🌐 Cómo Publicar en GitHub Pages

1. **Crear un Repositorio en GitHub**:
   - Ve a [GitHub](https://github.com) y crea un nuevo repositorio público llamado `bienestar-360` (o el nombre que prefieras).

2. **Subir los Archivos**:
   - En tu terminal o con GitHub Desktop, inicializa Git y sube el proyecto:
     ```bash
     git init
     git add .
     git commit -m "Initial commit - Bienestar 360"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/bienestar-360.git
     git push -u origin main
     ```

3. **Activar GitHub Pages**:
   - Ingresa a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - En la sección **Build and deployment** -> **Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**.
   - En pocos segundos, GitHub generará tu enlace público: `https://TU_USUARIO.github.io/bienestar-360/`.

---

## ⚠️ Nota Informativa / Aviso Legal

**Bienestar 360°** es una herramienta educativa y de orientación sobre hábitos personales. No constituye ni sustituye un diagnóstico, opinión o tratamiento médico, psicológico o profesional de la salud.

---

Desarrollado con ❤️ para promover el bienestar y la salud en la comunidad estudiantil.
