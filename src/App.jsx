import Encabezado from "./components/Encabezado";
import MenuNavegacion from "./components/MenuNavegacion";
import PiePagina from "./components/PiePagina";
import TarjetaInformacion from "./components/TarjetaInformacion";
import TablaRegistros from "./components/TablaRegistros";
import BotonPersonalizado from "./components/BotonPersonalizado";
import TarjetaTarea from "./components/TarjetaTarea";
import Contador from "./components/Contador";

// PERSONA B: linea de prueba version B

function App() {
  const enlacesMenu = [
    { label: "Inicio", href: "#" },
    { label: "Clientes", href: "#" },
    { label: "Contacto", href: "#" },
  ];

  const columnasTabla = ["Nombre", "Correo", "Teléfono"];
  const datosTabla = [
    { Nombre: "Ana Torres", Correo: "ana.torres@ejemplo.com", Teléfono: "5511111111" },
    { Nombre: "Carlos Ramírez", Correo: "carlos.ramirez@ejemplo.com", Teléfono: "5522222222" },
  ];

  const manejarClic = () => {
    alert("¡Botón personalizado presionado!");
  };

  return (
    <div>
      <Encabezado
        titulo="Mi primera app en React"
        subtitulo="Proyecto configurado correctamente."
      />

      <MenuNavegacion enlaces={enlacesMenu} />

      <main style={{ padding: "20px" }}>
        <h2>Tarjetas de información</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <TarjetaInformacion
            icono="👤"
            titulo="Clientes"
            descripcion="Consulta y administra los clientes registrados."
          />
          <TarjetaInformacion
            icono="📦"
            titulo="Productos"
            descripcion="Revisa el catálogo y el stock disponible."
          />
          <TarjetaInformacion
            icono="🧾"
            titulo="Pedidos"
            descripcion="Da seguimiento al estado de cada pedido."
          />
        </div>

        <h2>Tabla de registros</h2>
        <TablaRegistros columnas={columnasTabla} datos={datosTabla} />

        <h2>Botones personalizados</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <BotonPersonalizado texto="Guardar" variante="primario" onClick={manejarClic} />
          <BotonPersonalizado texto="Cancelar" variante="secundario" onClick={manejarClic} />
        </div>

        {/* ============================================================
            Sesión 5 - Actividad 5: uso de propiedades y estado.
            Cada TarjetaTarea recibe distintas PROPS (titulo, descripcion,
            categoria, estadoInicial) y por dentro maneja su propio ESTADO
            para saber si está completada o pendiente, de forma
            independiente entre tarjetas.
        ============================================================ */}
        <h2>Tareas (propiedades + estado)</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <TarjetaTarea
            titulo="Diseñar mockup"
            descripcion="Bocetar la pantalla principal de la app."
            categoria="Diseño"
            estadoInicial="Pendiente"
          />
          <TarjetaTarea
            titulo="Configurar backend"
            descripcion="Levantar la API con Django REST Framework."
            categoria="Backend"
            estadoInicial="Completada"
          />
          <TarjetaTarea
            titulo="Escribir pruebas"
            descripcion="Cubrir modelo, vista y endpoint principal."
            categoria="QA"
            estadoInicial="Pendiente"
          />
        </div>

        <h2>Contador (solo estado)</h2>
        <Contador />
      </main>

      <PiePagina nombre="Mi Proyecto React" anio={2026} />
    </div>
  );
}

export default App;
// Primera modificacion de prueba

// Segunda modificacion de prueba
