const readlineSync = require('readline-sync')

// Check commande line
if (process.argv.length !== 3) {
  console.log('usage : node majorityTest.js age')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

let MAJORITY = Number(process.argv[2])

while (true) {
  const userFistName = readlineSync.question('Quelle est votre prénom? ')
  const userLastName = readlineSync.question('Quelle est votre nom ? ')
  const ageStr = readlineSync.question('Quelle est votre age ? ')

  const age = Number(ageStr)

  if (age >= MAJORITY) {
    console.log(`${userFistName} ${userLastName}, vous êtes majeur, vous pouvez voter`)
  } else {
    console.log(`Désolé, ${userFistName} ${userLastName}, vous êtes mineur, vous ne pouvez pas voter`)
  }
}
