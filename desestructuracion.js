

const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;         Todo esto de aqui es lo mismo que la constante de abajo visible, siempre intenta ir por lo más rápido.
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const {nombre, apellido, poder } = deadpool;

// console.log(nombre, apellido, poder);

function imprimeHeroe({ heroe }) {

    const {nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad );

}

// ok de la siguiente manera haremos lo mismo pero con una línea de código menos:


function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad );

}


const heroes = ['Deadpool', 'Superman', 'Batman'];
// esos heroes al estar en la constante se podria decir que son h1, h2 y h3, xlotanto si quieres imprimir los heroes
// const [h1, h2, h3] = heroes;

// console.log(h1, h2, h3);

// incluso si quieres que solo muestre a batman

const [ , , h3] = heroes;
console.log (h3);

