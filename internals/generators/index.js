/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

import fs from 'fs'
import path from 'path'
import componentGenerator from './component/index.js'
import { exec } from 'child_process'
import containerGenerator from './container/index.js'
import languageGenerator from './language/index.js'

module.exports = plop => {
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('container', containerGenerator)
  plop.setGenerator('language', languageGenerator)
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../app/containers/${comp}`),
        fs.F_OK,
      )
      return `containers/${comp}`
    } catch {
      return `components/${comp}`
    }
  })
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'))
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../app/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**.ts*',
    )}`
    exec(`npm run prettify -- "${folderPath}"`)
    return folderPath
  })
}
