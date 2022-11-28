let nombreIngresado;
let piloto;
let posicion = 4;
let adversaio;

function pedirNombre () {
    nombreIngresado = prompt("Por favor ingrese su nombre para iniciar la simulación de carrera");
};

while (!nombreIngresado) {
    pedirNombre();
};

alert("Bienvenido " + nombreIngresado + ", a continuación daremos inicio a la carrera");

function pedirPiloto () {
        const respuesta = prompt(`Seleccione el personaje de su vehículo: 
        1 - Mario
        2 - Yoshi
        3 - Luigi
        4 - Peach
        5 - Bowser`);

    switch (respuesta) {
        case "1":
            piloto = "Mario";
            break;
        case "2":
            piloto = "Yoshi";
            break;
        case "3":
            piloto = "Luigi";
            break;
        case "4":
            piloto = "Peach";
            break;
        case "5":
            piloto = "Bowser";
            break;
        default: 
            pedirPiloto();
            break;
    };
};

pedirPiloto();

alert("Inicia la carrera...");
alert("3");
alert("2");
alert("1");
alert("Let's GOOO!!");
alert("*Voz de Mario- WAHOOO!");

alert("La pista comienza con una recta.. a 300 metros hay una curva cerrada");
alert("¿Que acción realizas?");

function primeraDecision () {
    const respuesta = prompt(`
    1-Aceleras
    2-Mantienes la velocidad
    3-Desaceleras`);

    switch (respuesta) {
        case "1":
            posicion --;
            primeraDecision = "Aceleras, por lo que avanzas 1 lugar";
            break;
        case "2":
            primeraDecision = "Mantienes la velocidad y también la posición";
            break;
        case "3":
            posicion ++;
            primeraDecision = "Desaceleras, descendes 1 lugar";
            break;
        default:
            primeraDecision();
            break;
    };
};

primeraDecision();

alert("En base a tu decisión y astucia");
alert("y un par de bananas por acá y hongos re locos...");
alert("Calculando...");
alert(`Tu puesto actual es el nº ${posicion}`);

if (piloto !== "Bowser") {
    adversario = "Bowser";
} else {
    adversario = "Mario";
};

alert(`La carrera continua, saltas por una rampa, atraviesas por un puente seguido ferozmente por ${adversario}`);
alert("recuerdas tus historias en el castillito ♥♥, sacas el hacha del bolsillo y cortas las cadenas del puente y hasta la vista baby 🤖");
alert("Ahora aparece un cubo de objetos aleatorio, logras obtener uno");

const index = Math.floor(Math.random() * 3);
const objetos =  ["Banana", "Caparazon verde", "Hongo"];

alert("se agita el cubo *truru truru* 🎲🎶");
alert(`Te ha salido el objeto ${objetos[index]}`);

function decisionDelCaparazon () {
    const respuesta = prompt(`Al caparazon lo puedes lanzar hacia
    1-atrás
    2-adelante
    3-la derecha
    4-la izquierda 
    `);

    switch (respuesta) {
        case "1":
            alert("el caparazon le pega al de atrás y ganas ventaja xd")
            break;
        case "2":
            alert("derribas al que va adelante y le robas la posición")
            posicion --;
            break;
        case "3":
        case "4":
            alert("el caparazon rebota contra la pared y te derriba")
            posicion ++;
            break;
        default:
            alert("se te chispoteo de las manos y lo perdiste, te recomiendo el buscaminas online");
            break;
    }
};

if (objetos[index] === "Caparazon verde") {
    decisionDelCaparazon()
} else if (objetos[index] === "Banana") {
    alert("la usas y mantienes la posición")
} else {
    alert("usas el hongo, lamentablemente no era de los hongos que te dan velocidad sino los que tienen efectos alucinogenos")
    posicion ++;
}

alert(`Tu puesto actual es el nº ${posicion}`);





