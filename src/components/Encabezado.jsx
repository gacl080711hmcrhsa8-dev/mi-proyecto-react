// Encabezado.jsx
// Componente reutilizable: encabezado de la aplicación.
// Recibe el título y un subtítulo opcional mediante props.

import "./Encabezado.css";

function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="encabezado">
      <h1>{titulo}</h1>
      {subtitulo && <p className="encabezado-subtitulo">{subtitulo}</p>}
    </header>
  );
}

export default Encabezado;
