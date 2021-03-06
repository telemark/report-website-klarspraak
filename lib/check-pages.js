'use strict'

const fs = require('fs')
const checkPage = require('./check-page')

async function next () {
  const isJsonFile = file => file.indexOf('.json') > -1
  const jobs = fs.readdirSync('jobs').filter(isJsonFile)
  if (jobs.length > 0) {
    console.log(`${jobs.length} jobs left to do`)
    const job = jobs.pop()
    const result = await checkPage(job)
    console.log(result)
    next()
  } else {
    console.log('All jobs done')
  }
}

next()
