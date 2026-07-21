// BotonPersonalizado.jsx
// Componente reutilizable: botón con estilo propio.
// Recibe el texto, la función a ejecutar al hacer clic (onClick)
// y una variante de color (primario/secundario) mediante props.

import "./BotonPersonalizado.css";

function BotonPersonalizado({ texto, onClick, variante = "primario" }) {
  return (
    <button className={`boton-personalizado ${variante}`} onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotonPersonalizado;
