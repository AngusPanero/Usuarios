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

        data.forEach(({id, name, username, email, address, phone, company}) => {//en vez de data en el for each porngo mi obj desestructurado

        const crearLi = document.createElement("li");
        const imgUser = `/assets/img/${id}.jpeg`;
        const numeroAle = Math.floor(Math.random() * (40 - 25 + 1)) + 25;// el valor del primer () es 16 el random me hace 16 posiciones aleatorias, mas 25 llego al maximo de 40 que busco
        const {street, suite, city} = address;
        const {name: nombreComapñia} = company // le doy un nombre random al {name: ""}

        crearLi.innerHTML = `
        <img src="${imgUser}">
        <div class="datosPersonales">
            <p>Nombre: ${name}</p>
            <p>Edad: ${numeroAle}</p>
            <p>Username: ${username}</p>
            <p>Telefono: ${phone}</p>
            <p>Email: ${email}</p>
        </div>
        <div class="compañia">
            <p>Compañia: ${company.name}</p>
            <p>Direccion: ${street}, ${suite}, ${city}</p>
        </div>
        `// aca ${voy directo al valor} por la desestructuracion no hace falta poner user.email pongo directo ${email}        
        obtenerUl.appendChild(crearLi);
        });
    })
    .catch((error) => {
        console.error("Error al obtener usuarios:", error);
    });
}
usuersFetch();