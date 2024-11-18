const obtenerUl = document.getElementById("listaUsuarios");

function usuersFetch () {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
    
    .then((response) => {
        if(!response.ok) {
            throw new Error ("Usuario no Encontrado")
        }
    return response.json()

    })
    .then((data) => {
        console.log(data);
        data.forEach((user) => {
        const crearLi = document.createElement("li");
        const imgUser = `/assets/img/${user.id}.jpeg`;
        crearLi.innerHTML = `
        <img src="${imgUser}">
        <div class="datosPersonales">
            <p>Nombre: ${user.name}</p>
            <p>Edad: 28</p>
            <p>Username: ${user.username}</p>
            <p>Telefono: ${user.phone}</p>
            <p>Email: ${user.email}</p>
        </div>
        <div class="compañia">
            <p>Compañia: ${user.company}</p>
            <p>Direccion: ${user.address.steet}, ${user.address.suite}, ${user.address.city}</p>
        </div>
        `
        obtenerUl.appendChild(crearLi);
        });
    })
    .catch((error) => {
        console.error("Error al obtener usuarios:", error);
    });
}
usuersFetch();