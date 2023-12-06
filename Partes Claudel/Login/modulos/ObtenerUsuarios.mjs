export async function leerArchivo(ruta, datosAObtener) {
  try {
    const datos = await fetch(ruta);

    if (!datos.ok) {
      throw new Error(`Error al obtener el archivo: ${datos.status}`);
    }

    const contenido = await datos.text();

    const lineas = contenido.split("\n");

    // Crear un array de objetos a partir de las líneas
    if (datosAObtener == "usuarios") {
      const datosFinales = lineas
        .map((linea, index) => {
          if (linea.includes(",")) {
            const [mail, clave] = linea.split(",");
            return { mail, clave };
          } else {
            console.warn(`Línea ${index + 1} no tiene el formato esperado.`);
            return null;
          }
        })
        .filter((usuario) => usuario !== null); // Filtrar usuarios nulos

      return datosFinales;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}
