// MenuNavegacion.jsx
// Componente reutilizable: menú de navegación.
// Recibe un arreglo de enlaces (label + href) mediante props.

import "./MenuNavegacion.css";

function MenuNavegacion({ enlaces }) {
  return (
    <nav className="menu-navegacion">
      <ul>
        {enlaces.map((enlace, index) => (
          <li key={index}>
            <a href={enlace.href}>{enlace.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuNavegacion;
