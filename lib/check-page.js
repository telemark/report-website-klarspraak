'use strict'

const fs = require('fs')
const getArticleText = require('./get-article-text')
const getTextScore = require('./get-text-score')

module.exports = jobId => {
  return new Promise(async (resolve, reject) => {
    const job = require(`../jobs/${jobId}`)
    const text = await getArticleText(job.url)
    if (text.length > 0) {
      const score = await getTextScore(text)
      const result = Object.assign({url: job.url, lix: score.lix, kanselli: score.kanselli.join(', ')})
      const fileName = `done/${jobId}`
      fs.writeFileSync(fileName, JSON.stringify(result, null, 2))
      console.log(`${job.url} - checked`)
    } else {
      console.log(`${job.url} - skipped`)
    }
    fs.unlinkSync(`jobs/${jobId}`)
    resolve(`jobs/${jobId} - deleted`)
  })
}
