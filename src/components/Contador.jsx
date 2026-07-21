import { useState } from "react";
import "./Contador.css";

// ===================================================================
// Este componente NO recibe propiedades: es un ejemplo enfocado
// solo en ESTADO, para mostrar un contador que el usuario controla
// con botones (equivalente a un interruptor, pero numérico).
// ===================================================================
function Contador() {
  // "cuenta" es el estado; "setCuenta" es la función para modificarlo.
  // Al llamar a setCuenta, React vuelve a renderizar el componente
  // mostrando el nuevo número.
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => setCuenta(cuenta + 1);
  const decrementar = () => setCuenta(cuenta - 1);
  const reiniciar = () => setCuenta(0);

  return (
    <div className="contador">
      <p>
        Contador: <strong>{cuenta}</strong>
      </p>
      <div className="contador-botones">
        <button onClick={decrementar}>-</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  );
}

export default Contador;