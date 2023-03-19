/* 1. Construir un objeto literal "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap
1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas */
/* 2. Consultas: Usando Destructuring,
2.1 De los trainers, reportar si la asignatura (tecnología) es
remota o presencial y de los campers el nombre de salón.
2.2 El teléfono de la sede de Medellín y la dirección de la
sede de Bucaramanga
2.3 De la asignatura (tecnología) si tiene sandbox o no */
/* 3. Consultas: Usando sintaxis de punto.
3.1 Reportar, prerequisito de la asignatura (tecnología) y nro de
créditos del roadmap
3.2 Agregar mas objetos con mas objetos anidados de manera libre
(por lo menos 7) */

let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioTrainers = document.querySelector("#myFormularioTrainers");
let myFormularioNiveles = document.querySelector("#myFormularioNiveles");
let myFormularioRoadmap = document.querySelector("#myFormularioRoadmap");
let campus = {};


let listar= (p1,campus)=>{
    let opciones = document.querySelector(p1);
    opciones.innerHTML = null; 
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
};
let listar1= (p1,p2)=>{
    let opciones = document.querySelector(p1);
    opciones.innerHTML = null; 
    for (let [val, id] of Object.entries(p2)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${id}">${id}</option>
        `);
    }
};
myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Niveles: [], Roadmap: [],  Camper: [], Trainers: []};
    listar('[name="sedeNivel"]', (campus));
    listar('[name="sedeRoadmap"]', (campus));
    listar('[name="sedeCampers"]', (campus));
    listar('[name="sedeTrainers"]', (campus));
    myFormularioCampus.reset();
    
});

myFormularioNiveles.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeNivel = data.sedeNivel;
    delete data.sedeNivel;
    campus[`${sedeNivel}`]["Niveles"].unshift(data); 
    console.log(data.preRequisito);
    listar1('[name="nivelCamper"]', (Object.values(data)));
    listar1('[name="nivelTrainer"]',(Object.values(data)));
    myFormularioNiveles.reset();
    // console.log(data);
})

myFormularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeRoadmap = data.sedeRoadmap;
    delete data.sedeRoadmap;
    campus[`${sedeRoadmap}`]["Roadmap"].unshift(data);
    // listar1('[name="asignaturaTrainer"]', (Object.values(data)));
    myFormularioRoadmap.reset();
});

myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeCampers = data.sedeCampers;
    delete data.sedeCampers;
    campus[`${sedeCampers}`]["Camper"].unshift(data);
    myFormularioCampers.reset();
})


myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let sedeTrainers = data.sedeTrainers;
    delete data.sedeTrainers;
    campus[`${sedeTrainers}`]["Trainers"].unshift(data);
    myFormularioTrainers.reset();
}) 

console.log(campus);

