// TarjetaInformacion.jsx
// Componente reutilizable: tarjeta para mostrar información resumida.
// Recibe título, descripción e icono/emoji opcional mediante props.

import "./TarjetaInformacion.css";

function TarjetaInformacion({ titulo, descripcion, icono }) {
  return (
    <div className="tarjeta-informacion">
      {icono && <div className="tarjeta-icono">{icono}</div>}
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default TarjetaInformacion;
