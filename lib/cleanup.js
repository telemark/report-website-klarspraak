'use strict'

const fs = require('fs')
const isDeletableFile = file => file.indexOf('.json') > -1 || file.indexOf('.xlsx') > -1

function cleanDirectory (directory) {
  return new Promise((resolve) => {
    const files = fs.readdirSync(directory).filter(isDeletableFile)

    files.forEach((file) => {
      const fileName = `${directory}/${file}`
      fs.unlinkSync(fileName)
    })
    resolve(`${directory} is clean`)
  })
}

cleanDirectory('jobs').then(msg => console.log(msg))

cleanDirectory('done').then(msg => console.log(msg))

cleanDirectory('reports').then(msg => console.log(msg))
