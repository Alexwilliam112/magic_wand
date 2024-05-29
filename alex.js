'use strict'
const commands = process.argv.slice(2)
const cmd = commands[0]
const { help } = require('./lib/commandList')

switch (cmd) {
    case 'help': {
        console.log(help);
        break;
    }

    case 'init': {
        break;
    }

    case 'build': {
        break;
    }

    case 'db': {
        
    }

    default: {
        console.log(help);
        break;
    }
}