
const botonEmpezar = document.querySelector('.botonEmpezar');
const botonSiguiente = document.querySelector('.botonSiguiente');
const inicio = document.querySelector('.inicio');
let i=0
const letra = document.querySelector('.letra')
const abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const abecedarioConPalabras = [
    ["Abeja", "Amigo", "Aire", "Árbol", "Azul", "Avión", "Arte", "Amor"],
    ["Barco", "Bola", "Beso", "Bailar", "Banco", "Búho", "Broma", "Bebé"],
    ["Casa", "Cielo", "Coche", "Camino", "Cuento", "Cisne", "Cena", "Cola"],
    ["Dado", "Día", "Dulce", "Danza", "Delfín", "Dibujo", "Diente", "Drama"],
    ["Espejo", "Estrella", "Espejismo", "Elefante", "Escuela", "Escoba", "Escudo", "Esmalte"],
    ["Flor", "Fuego", "Fiesta", "Fuerza", "Falda", "Foto", "Fuente", "Fruta"],
    ["Gato", "Globo", "Guitarra", "Gigante", "Gorro", "Guante", "Grillo", "Granja"],
    ["Huevo", "Hilo", "Hierro", "Hoja", "Hora", "Hombre", "Hacha", "Huerto"],
    ["Isla", "Imán", "Idea", "Iglesia", "Ídolo", "Invierno", "Instrumento", "Insecto"],
    ["Jardín", "Jirafa", "Juguete", "Joya", "Jugo", "Jornada", "Jefe", "Jaula"],
    ["Koala", "Kilo", "Karate", "Kiwi", "Kayak", "Kermés", "Karma", "Kimono"],
    ["Luna", "Luz", "Lago", "Libro", "Lápiz", "León", "Lluvia", "Limonada"],
    ["Mar", "Mesa", "Mano", "Miel", "Mosca", "Mundo", "Montaña", "Mago"],
    ["Nube", "Noche", "Nieve", "Nido", "Naranja", "Nácar", "Nota", "Niño"],
    ["Ojo", "Oso", "Oro", "Ola", "Oreja", "Ópera", "Oficina", "Obra"],
    ["Piedra", "Playa", "Perro", "Puerta", "Pez", "Paloma", "Pastel", "Pluma"],
    ["Queso", "Quinta", "Quijote", "Quebrada", "Química", "Quetzal", "Quijada", "Quimera"],
    ["Río", "Rana", "Rosa", "Reloj", "Ruido", "Roca", "Ratón", "Rueda"],
    ["Sol", "Silla", "Sombra", "Serpiente", "Sopa", "Sonrisa", "Seda", "Sal"],
    ["Tigre", "Taza", "Tierra", "Torre", "Techo", "Tortuga", "Tren", "Teléfono"],
    ["Uva", "Universo", "Útil", "Uniforme", "Unidad", "Urgencia", "Ultravioleta", "Unión"],
    ["Vaso", "Viento", "Vaca", "Velero", "Vino", "Ventana", "Verdad", "Vida"],
    ["Wafle", "Wifi", "Walkman", "Washington", "Whisky", "Wok", "Waflera", "Wonder"],
    ["Xilófono", "Xenón", "Xilografía", "Xenófobo", "Xenónida", "Xeroftalmia", "Xifoideo", "Xenoblasto"],
    ["Yate", "Yogur", "Yema", "Yogui", "Yeso", "Yunque", "Yegua", "Yodo"],
    ["Zorro", "Zapato", "Zebra", "Zanahoria", "Zumbido", "Zona", "Zafiro", "Zarzuela"]
  ];

  botonEmpezar.addEventListener('click', function () {
    inicio.classList.add('oculto');
    letra.classList.remove('oculto');
    i = 0;
    actualizarLetra(i);
});

botonSiguiente.addEventListener('click', function () {
    if (i < abecedario.length - 1) {
        i++; 
        actualizarLetra(i);
    } else {
        alert("¡Has llegado al final del abecedario!");
    }
});


function actualizarLetra(index) {

    const cantidad = document.getElementById('cantidad');
    cantidad.textContent = abecedario[index];

    const ejemplos = document.getElementById('ejemplos');
    ejemplos.innerHTML = ""; 
    abecedarioConPalabras[index].forEach((palabra) => {
        const palabraElemento = document.createElement('li');
        palabraElemento.textContent = palabra;
        ejemplos.appendChild(palabraElemento);
    });
}
