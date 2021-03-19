const readlineSync = require('readline-sync')

const userFistName = readlineSync.question('Quelle est votre prénom? ')
const userLastName = readlineSync.question('Quelle est votre nom ? ')
const ageStr = readlineSync.question('Quelle est votre age ? ')

const age = Number(ageStr)

const MAJORITY = Number(18)

if (age >= MAJORITY) {
  console.log(`${userFistName} ${userLastName}, vous êtes majeur, vous pouvez voter`)
} else {
  console.log(`Désolé, ${userFistName} ${userLastName}, vous êtes mineur, vous ne pouvez pas voter`)
}
