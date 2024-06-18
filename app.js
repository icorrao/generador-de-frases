let btn = document.querySelector("#nueva-frase")
let frase = document.querySelector("#frase")
let autor = document.querySelector("#autor")

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * frases.length)

    frase.innerText = frases[random].frase
    autor.innerText = frases[random].persona
})

const frases = [
  {
    frase: '"Sacar belleza de este caos es virtud"',
    persona: "Gustavo Cerati",
  },
  {
    frase: '"Felices Pascuas... la casa está en orden"',
    persona: "Raúl Alfonsín",
  },
  {
    frase: '"Yo me equivoqué y pagué, pero la pelota no se mancha"',
    persona: "Diego Armando Maradona",
  },
  {
    frase:
      '"Dentro de poco llegaremos de Argentina a Japón en una hora volando en cohete por la estratósfera"',
    persona: "Carlos Saul Menem",
  },
  {
    frase: '"Hoy no podemos hacer choripán porque hay lluvia"',
    persona: "Cristina Fernández de Kirchner",
  },
  {
    frase: '"Fuma debajo del agua"',
    persona: "Diego Armando Maradona",
  },
  {
    frase: '"Me cortaron las piernas"',
    persona: "Diego Armando Maradona",
  },
  {
    frase: '"Si querés llorar llorá"',
    persona: "Moria Casan",
  },
  {
    frase: '"¡No se inunda más, carajo!"',
    persona: "Mauricio Macri",
  },
  {
    frase: '"El miedo solo sirve para perderlo todo"',
    persona: "Juan Manuel Belgrano",
  },
  {
    frase: '"Sos un fracasado, todos progresan menos vos"',
    persona: "pasacalle anónimo",
  },
  {
    frase: '"El que depositó dólares recibirá dólares"',
    persona: "Eduardo Duhalde",
  },
];
