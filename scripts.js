const usuarios = [
    {
        cedula: "123456789",
        nombre: "Juan",
        apellido: "Pérez",
        email: "juan@gmail.com",
        telefono: "123456789",
        direccion: "Calle Falsa 123",
        fechaNacimiento: "1990-01-01",
        ciudad: "Barranquilla"
    },
    {
        cedula: "987654321",
        nombre: "Ana",
        apellido: "Gómez",
        email: "ana@gmail.com",
        telefono: "987654321",
        direccion: "Calle Verdadera 456",
        fechaNacimiento: "1985-05-05",
        ciudad: "Barranquilla"
    },
    {
        cedula: "456123789",
        nombre: "Carlos",
        apellido: "Martínez",
        email: "carlos@gmail.com",
        telefono: "456123789",
        direccion: "Avenida Siempre Viva 742",
        fechaNacimiento: "1995-12-12",
        ciudad: "Barranquilla"
    }
];

const form = document.getElementById("formRegistro");
const tablaUsuarios = document.getElementById("tablaUsuarios").getElementsByTagName("tbody")[0];
const btnListar = document.getElementById("btnListar");

function listarUsuarios() {
    tablaUsuarios.innerHTML = "";
    usuarios.forEach(usuario => {
        const fila = tablaUsuarios.insertRow();
        fila.innerHTML = `
            <td>${usuario.cedula}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.direccion}</td>
            <td>${usuario.fechaNacimiento}</td>
            <td>${usuario.ciudad}</td>
        `;
    });
}

btnListar.addEventListener("click", listarUsuarios);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const ciudad = document.getElementById("ciudad").value;

    // Validar si el usuario ya existe
    if (usuarios.find(usuario => usuario.cedula === cedula)) {
        alert("El usuario ya está registrado.");
        return;
    }

    // Agregar nuevo usuario al JSON
    const nuevoUsuario = {
        cedula,
        nombre,
        apellido,
        email,
        telefono,
        direccion,
        fechaNacimiento,
        ciudad
    };

    usuarios.push(nuevoUsuario);
    alert("Usuario registrado con éxito.");
    form.reset();
    listarUsuarios();
});
