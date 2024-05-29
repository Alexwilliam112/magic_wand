'use strict'
const help = `
AlexBuild CLI [Node: 20.12.2, CLI: 1.1.0]
------------------------------------------------------

npx Alex <commands>

npx Alex init              Initialize build setup
--> init options: (choose 1)
    || cli                 Preset for cli based MVC setup
    || pg                  Preset for manual postgres connect and manual modeling
    || custom              Custom config in buildSchema.js

-----------------------------------------------------------------------------------------

npx Alex build:start       Start build 
npx Alex build:model       Run: sequelize model:create
npx Alex build:db          Run: sequelize db:create, db:migrate, and db:seed:all
npx Alex build:test        Run: build unit test cases from schema
npx Alex db:reset          Reset database: truncate and restart identity
npx Alex db:hard-reset     Hard Reset Database: db:drop, db:create, db:migrate, db:seed:all
`
module.exports = {
    help
}