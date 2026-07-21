// PiePagina.jsx
// Componente reutilizable: pie de página.
// Recibe el nombre de la empresa/proyecto y el año mediante props.

import "./PiePagina.css";

function PiePagina({ nombre, anio }) {
  return (
    <footer className="pie-pagina">
      <p>
        © {anio} {nombre}. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default PiePagina;
