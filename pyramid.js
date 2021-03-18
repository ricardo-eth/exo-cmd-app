const showStars = (nbStars, type, reverse) => {
  
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbStars; ++i) {
      str += type.repeat(i)
      if (i !== nbStars) {
        str += '\n'
      }
    }
  } else {
    for (let i = nbStars; i >= 1; --i) {
      str += type.repeat(i)
      if (i !== 1) {
        str += '\n'
      }
    }
  }
  return str
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

let nb = Number(process.argv[2])
let type = process.argv[3]
let reverseSwitch = process.argv[4]

const controleReverse = (reverse) => {
  if (reverse === '-r'){
    return true
  } else {
    return false
  }
}

let reverse = controleReverse(reverseSwitch)

console.log(showStars(nb, type, reverse))