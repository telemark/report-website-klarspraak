'use strict'

const fs = require('fs')
const uuid = require('uuid')
const pages = require('../reports/pages.json')

pages.forEach(page => {
  const id = uuid.v4()
  const fileName = `jobs/${id}.json`
  const job = {
    id: id,
    url: page
  }
  fs.writeFileSync(fileName, JSON.stringify(job, null, 2))
  console.log(`${fileName} written`)
})
