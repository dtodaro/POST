const URLBase = "https://jsonplaceholder.typicode.com/users";

let botonEnviar = document.getElementById("1");

let persona = {
  nombre: "Sin nombre",
  apellido: "Sin apellido",
  fechaNacimiento: "Sin fecha de nacimiento"
};

botonEnviar.addEventListener("click", () => {
    event.preventDefault();
  // Obtén los valores de los campos de entrada
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  // Asigna los valores al objeto persona
  persona = {
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(persona)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Respuesta del servidor:", data);
      // Aquí puedes manejar la respuesta del servidor como desees
    })
    .catch(error => {
      console.error("Error al enviar la solicitud:", error);
      // Manejar errores aquí
    });

});