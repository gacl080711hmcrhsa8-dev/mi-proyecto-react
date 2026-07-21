# Mi Proyecto React

Frontend de gestión (clientes, productos y pedidos) construido con React y conectado a una API backend en Django REST Framework.

## Descripción

Mi Proyecto React es una aplicación de una sola página (SPA) que permite navegar entre distintas secciones (Inicio, Listado, Registro, Acerca de), consultar y administrar pedidos mediante un CRUD completo (crear, leer, actualizar y eliminar), y presentar la información en tablas y tarjetas con un diseño responsivo. El frontend se construyó de forma incremental a lo largo de varias sesiones: primero con componentes reutilizables y datos temporales, después con rutas, formularios validados y diseño adaptable, y finalmente conectado a un backend real en Django REST Framework para persistir la información.

## Tecnologías utilizadas

- **React** (con Vite como entorno de desarrollo y empaquetado)
- **react-router-dom** — enrutamiento del lado del cliente (SPA)
- **Bootstrap** — sistema de rejilla y componentes de interfaz responsivos
- **JavaScript (ES6+)** — lógica de componentes, estado y consumo de la API
- **CSS** — estilos propios de los componentes
- **Django REST Framework** — API backend que expone los endpoints consumidos por el frontend
- **Git y GitHub** — control de versiones y repositorio remoto

## Instrucciones de instalación

### Requisitos previos

- Node.js (versión 18 o superior recomendada)
- npm
- Python 3 y el backend del proyecto ya configurado y corriendo (Django REST Framework)

### Clonar el repositorio

```bash
git clone https://github.com/aldo-alvarez/mi-proyecto-react.git
cd mi-proyecto-react
```

### Instalar dependencias del frontend

```bash
npm install
```

### Configurar la conexión con el backend

Crear un archivo `.env` en la raíz del proyecto con la dirección del backend:

```
VITE_API_URL=http://127.0.0.1:8000/api
```

## Forma de ejecución

1. Levantar primero el backend (Django REST Framework) en `http://127.0.0.1:8000`.
2. Ejecutar el frontend en modo desarrollo:

   ```bash
   npm run dev
   ```

3. Abrir el navegador en la dirección que indique la terminal (por defecto `http://localhost:5173`).

## Autor

- Aldo Álvarez Jurado

## Estado actual del proyecto

En desarrollo. Hasta el momento se cuenta con:

- Estructura inicial del frontend con componentes reutilizables (Encabezado, MenuNavegacion, PiePagina, TarjetaInformacion, TablaRegistros, BotonPersonalizado).
- Componentes de práctica de props y estado (TarjetaTarea, Contador) y manejo de eventos (onClick, onChange, onSubmit, onMouseEnter).
- Formularios controlados y validados (campos obligatorios, longitud mínima, formato de correo, rango numérico).
- Navegación mediante react-router-dom, con menú de opción activa y página 404.
- Diseño responsivo con Bootstrap, probado en escritorio, tableta y teléfono.
- Integración completa con el backend: consumo de la API (GET), alta (POST), edición (PATCH) y eliminación (DELETE) de pedidos, con mensajes de carga, error y confirmación.
- Repositorio remoto creado en GitHub, con `.gitignore` configurado y sin archivos sensibles publicados.

Pendiente para próximas sesiones: autenticación de usuarios y despliegue en un entorno de producción.
