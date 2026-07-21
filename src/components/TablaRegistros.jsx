// TablaRegistros.jsx
// Componente reutilizable: tabla genérica de registros.
// Recibe las columnas (encabezados) y los datos (filas) mediante props.

import "./TablaRegistros.css";

function TablaRegistros({ columnas, datos }) {
  return (
    <table className="tabla-registros">
      <thead>
        <tr>
          {columnas.map((columna, index) => (
            <th key={index}>{columna}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, filaIndex) => (
          <tr key={filaIndex}>
            {columnas.map((columna, colIndex) => (
              <td key={colIndex}>{fila[columna]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaRegistros;
