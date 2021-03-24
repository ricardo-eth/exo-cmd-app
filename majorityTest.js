const readlineSync = require('readline-sync')

// Check command line
if (process.argv.length !== 3) {
  console.log('usage: node majorityTest.js age')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number`)
  process.exit(1)
}

const majority = Number(process.argv[2])

while (true) {
  // get name and check if name is empty
  const name = readlineSync.question('nom: ')
  if (name.length === 0) {
    console.log('Sorry, name is empty')
    continue
  }
  // get first name and check if first name is empty
  const firstName = readlineSync.question('firstName: ')
  if (firstName.length === 0) {
    console.log('Sorry, first name is empty')
    continue
  }

  // get age and check if age is a number
  const ageStr = readlineSync.question('age: ')
  if (isNaN(ageStr) || ageStr.length === 0) {
    console.log(`Sorry, ${ageStr} is not a number`)
    continue
  }

  const age = Number(ageStr)

  if (age >= majority) {
    console.log(`${firstName} ${name} vous êtes majeur, vous pouvez voter.`)
  } else {
    console.log(
      `Désolé, ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter.`
    )
  }
}