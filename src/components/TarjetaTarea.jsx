import { useState } from "react";
import "./TarjetaTarea.css";

// ===================================================================
// PROPIEDADES (props): son los datos que este componente RECIBE
// desde su componente padre (App.jsx). Son de solo lectura: este
// componente no puede modificarlas directamente. Se usan para que
// un mismo componente se pueda reutilizar mostrando información
// distinta cada vez (por eso más abajo se usa varias veces con
// título, descripción y categoría diferentes).
// ===================================================================
function TarjetaTarea({ titulo, descripcion, categoria, estadoInicial }) {
  // ===================================================================
  // ESTADO (state): es un dato que vive DENTRO del componente y que
  // SÍ puede cambiar mientras la aplicación se usa (por ejemplo, al
  // hacer clic en un botón). Cuando el estado cambia, React vuelve a
  // dibujar el componente automáticamente con el nuevo valor.
  // Se usa cuando algo necesita "recordar" datos entre interacciones
  // del usuario, a diferencia de las props, que llegan ya fijas desde
  // afuera y no se modifican con clics.
  // ===================================================================
  const [completada, setCompletada] = useState(estadoInicial === "Completada");

  // Esta función CAMBIA el estado (interruptor: alterna entre true/false).
  const alternarEstado = () => {
    setCompletada(!completada);
  };

  return (
    <div className={`tarjeta-tarea ${completada ? "completada" : "pendiente"}`}>
      <span className="tarjeta-categoria">{categoria}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p className="tarjeta-estado">
        Estado: <strong>{completada ? "Completada" : "Pendiente"}</strong>
      </p>
      <button onClick={alternarEstado}>
        Marcar como {completada ? "pendiente" : "completada"}
      </button>
    </div>
  );
}

export default TarjetaTarea;