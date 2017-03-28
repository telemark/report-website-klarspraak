'use strict'

const fs = require('fs')
const getSitemap = require('./get-sitemap')

async function collectPages () {
  const sitemap = await getSitemap()
  const pages = sitemap.map(line => line.loc)
  fs.writeFileSync('reports/pages.json', JSON.stringify(pages, null, 2))
  console.log('Pages saved')
  process.exit(0)
}

collectPages()
