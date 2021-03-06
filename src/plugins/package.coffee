fs = require("fs")

module.exports = (env, callback) ->
  env.locals.pkg =
    bower:
      version: null
    npm:
      version: null

  fs.readFile "./package.json", (err, data) ->
    env.locals.pkg.npm = JSON.parse data

  fs.readFile "./bower.json", (err, data) ->
    env.locals.pkg.bower = JSON.parse data

  callback()