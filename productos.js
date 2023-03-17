/*

const sudaderas = [
            {
                id:"sud-1",
                titulo:"Sudadera Beige",
                imagen: "../img/sudaderas/sud-1.webp",
                precio:"$"+350
            },
            {
                id:"sud-2",
                titulo:"Sudadera Beige",
                imagen: "./img/sudaderas/sud-2.webp",
                precio:"$"+350
            },
            {
                id:"sud-3",
                titulo:"Sudadera Beige",
                imagen: "./img/sudaderas/sud-3.webp",
                precio:"$"+350
            },
            {
                id:"sud-4",
                titulo:"Sudadera Beige",
                imagen: "./img/sudaderas/sud-4.webp",
                precio:"$"+350
            },
            {
                id:"sud-5",
                titulo:"Sudadera Beige",
                imagen: "./img/sudaderas/sud-5.webp",
                precio:"$"+350
            },
            {
                id:"sud-6",
                titulo:"Sudadera negra",
                imagen: "./img/sudaderas/sud-6.webp",
                precio:"$"+350
            }
];
const chamarras =[
    //Chamarras
    {
        id:"cha-1",
        titulo:"Chamarras",
        imagen: "./img/chamarras/ch-1.webp",
        precio:"$"+350
    },
    {
        id:"cha-2",
        titulo:"Chamarras",
        imagen: "./img/chamarras/ch-2.webp",
        precio:"$"+350
    },
    {
        id:"cha-3",
        titulo:"Chamarras",
        imagen: "./img/chamarras/ch-3.webp",
        precio:"$"+350
    },
    {
        id:"cha-4",
        titulo:"Chamarras",
        imagen: "./img/chamarras/ch-4.webp",
        precio:"$"+350
    },
    {
        id:"cha-5",
        titulo:"Chamarras",
        imagen: "./img/chamarras/ch-5.webp",
        precio:"$"+350
    },
    {
        id:"cha-6",
        titulo:"Chamarras",
        imagen: "./img/chamarras/ch-6.webp",
        precio:"$"+350
    }
];
const gorras =[
    //Gorras
    {
        id:"gap-1",
        titulo:"Set de gorras",
        imagen: "./img/gorras/gap-1.webp",
        precio:"$"+350
    },
    {
        id:"gap-2",
        titulo:"Set de gorras",
        imagen: "./img/gorras/gap-2.webp",
        precio:"$"+350
    },
    {
        id:"gap-3",
        titulo:"Set de gorras",
        imagen: "./img/gorras/gap-3.webp",
        precio:"$"+350
    },
    {
        id:"gap-4",
        titulo:"Gorra estanpada",
        imagen: "./img/gorras/gap-4.webp",
        precio:"$"+350
    },
    {
        id:"gap-5",
        titulo:"Gorra estanpada",
        imagen: "./img/gorras/gap-5.webp",
        precio:"$"+350
    },
    {
        id:"gap-6",
        titulo:"Gorra estanpada",
        imagen: "./img/gorras/gap-6.webp",
        precio:"$"+350
    }
];

const contenedorSudaderas = document.querySelector('#sudaderas');

function cargarSudaderas(){
    sudaderas.forEach(sudaderas =>{
        let div = document.createElement("div")
        div.classList.add("tarjeta");
        div.innerHTML=
            `
            <img src="${sudaderas.imagen}" alt="${sudaderas.titulo}" class="prod-img">
            <h2 class="prod-titulo">${sudaderas.titulo}</h2>
            <p class="prod-precio">${sudaderas.precio}</p>
            <a href="#" class="prod-enlace" id="${sudaderas.id}">Ver más</a>
            `;
            contenedorSudaderas.append(div);
    })
}
const contenederChamarras = document.querySelector('#chamarras');
function cargarChamarras(){
    chamarras.forEach(chamarras =>{
        let div = document.createElement("div")
        div.classList.add("tarjeta");
        div.innerHTML=
            `
            <img src="${chamarras.imagen}" alt="${chamarras.titulo}" class="prod-img">
            <h2 class="prod-titulo">${chamarras.titulo}</h2>
            <p class="prod-precio">${chamarras.precio}</p>
            <a href="#" class="prod-enlace" id="${chamarras.id}">Ver más</a>
            `;
            contenederChamarras.append(div);
    })
}
const contenederGorras = document.querySelector('#gorras');
function cargarGorras(){
    gorras.forEach(gorras =>{
        let div = document.createElement("div")
        div.classList.add("tarjeta");
        div.innerHTML=
            `
            <img src="${gorras.imagen}" alt="${gorras.titulo}" class="prod-img">
            <h2 class="prod-titulo">${gorras.titulo}</h2>
            <p class="prod-precio">${gorras.precio}</p>
            <a href="#" class="prod-enlace" id="${gorras.id}">Ver más</a>
            `;
            contenederGorras.append(div);
    })
}
cargarSudaderas();
cargarChamarras();
cargarGorras();

*/

//backticks
const crearListaSudaderas = (id, titulo, imagen,precio) => {
    const div = document.createElement("div");
    div.classList.add("tarjeta");
    const contenido = `
    <img src="${imagen}" alt="${titulo}" class="prod-img">
    <h2 class="prod-titulo">${titulo}</h2>
    <p class="prod-precio">${precio}</p>
    <a href="#" class="prod-enlace" id="${id}">Ver más</a>
    `;
    div.innerHTML = contenido;
    return div;
};
//chamarras
const crearListaChamarras = (id, titulo, imagen,precio) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  const contenido = `
  <img src="${imagen}" alt="${titulo}" class="prod-img">
  <h2 class="prod-titulo">${titulo}</h2>
  <p class="prod-precio">${precio}</p>
  <a href="#" class="prod-enlace" id="${id}">Ver más</a>
  `;
  div.innerHTML = contenido;
  return div;
};
//gorras
const crearListaGorras = (id, titulo, imagen,precio) => {
  const div = document.createElement("div");
  div.classList.add("tarjeta");
  const contenido = `
  <img src="${imagen}" alt="${titulo}" class="prod-img">
  <h2 class="prod-titulo">${titulo}</h2>
  <p class="prod-precio">${precio}</p>
  <a href="#" class="prod-enlace" id="${id}">Ver más</a>
  `;
  div.innerHTML = contenido;
  return div;
};

  const contSudaderas = document.querySelector("#sudaderas");
  const contChamarras = document.querySelector("#chamarras");
  const contGorras = document.querySelector("#gorras");
  //Abrir http (método,url)
  // CRUD   - Métodos HTTP
  // Create - POST
  // Read   - GET
  // Update - PUT/PATCH
  // Delete - DELETE
  
  const listaSudaderas = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/sudaderas");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };
  const listaChamarras = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/chamarras");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };

  const listaGorras = () => {
    const promise = new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", "http://localhost:3000/gorras");
      http.send();
      http.onload = () => {
        const response = JSON.parse(http.response);
        if (http.status >= 400) {
          reject(response);
        } else {
          resolve(response);
        }
      };
    });
    return promise;
  };

  listaSudaderas()
    .then((data) => {
      data.forEach((sudaderas) => {
        const suda = crearListaSudaderas(sudaderas.id, sudaderas.titulo, sudaderas.imagen, sudaderas.precio);
        contSudaderas.appendChild(suda);
      });
    })
    .catch((error) => alert("Ocurrió un error"));

  listaChamarras()
  .then((data) => {
    data.forEach((chamarras) => {
      const chama = crearListaSudaderas(chamarras.id, chamarras.titulo, chamarras.imagen, chamarras.precio);
      contChamarras.appendChild(chama);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

  listaGorras()
  .then((data) => {
    data.forEach((chamarras) => {
      const gap = crearListaSudaderas(chamarras.id, chamarras.titulo, chamarras.imagen, chamarras.precio);
      contGorras.appendChild(gap);
    });
  })
  .catch((error) => alert("Ocurrió un error"));
  
  // console.log(data);
  //
  