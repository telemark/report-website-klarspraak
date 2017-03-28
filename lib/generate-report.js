'use strict'

const fs = require('fs')
const xlsx = require('tfk-json-to-xlsx')
const isJsonFile = file => file.indexOf('.json') > -1
const done = fs.readdirSync('done').filter(isJsonFile)
const files = done.map(line => require(`../done/${line}`))

const fileName = 'reports/klarspraak.xlsx'

xlsx.write(fileName, files, error => {
  if (error) {
    console.error(error)
  } else {
    console.log('Report generated')
  }
})
