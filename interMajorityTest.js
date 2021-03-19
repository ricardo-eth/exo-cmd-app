const readlineSync = require('readline-sync')

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

let nb = Number(process.argv[2])

const userFistName = readlineSync.question('Quelle est votre prénom? ')
const userLastName = readlineSync.question('Quelle est votre nom ? ')
const ageStr = readlineSync.question('Quelle est votre age ? ')

const age = Number(ageStr)

if (age >= nb) {
  console.log(`${userFistName} ${userLastName}, vous êtes majeur, vous pouvez voter`)
} else {
  console.log(`Désolé, ${userFistName} ${userLastName}, vous êtes mineur, vous ne pouvez pas voter`)
}

