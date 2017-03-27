'use strict'

const axios = require('axios')
const config = require('../config')

module.exports = text => {
  return new Promise((resolve, reject) => {
    axios.post(config.url, {text: text})
      .then(results => resolve(results.data))
      .catch(error => reject(error))
  })
}
