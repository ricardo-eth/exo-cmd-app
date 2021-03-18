const showStars = (nbStars, type) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(`${type}`.repeat(i))
  }
}

if (process.argv.length != 4) {
  console.log(`usage: node pyramid.js number and type, exemple: 3 A`)
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

let nb = Number(process.argv[2])
let type = process.argv[3]

showStars(nb, type)