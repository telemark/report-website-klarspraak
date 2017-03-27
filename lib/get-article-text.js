'use strict'

const Xray = require('x-ray')
const x = Xray()

module.exports = url => {
  return new Promise((resolve, reject) => {
    x(url, 'article')((error, data) =>  {
      if (error) {
        reject(error)
      } else {
        resolve(data.trim())
      }
    })
  })
}
