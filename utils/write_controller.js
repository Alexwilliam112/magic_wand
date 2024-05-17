const fs = require('fs');

async function write_app(filePath) {
    try {
        const setup = `
'use strict'

const {  } = require('./models/index')

module.exports = class Controller1 {

    static async rename_this(req, res) {
        try {
            res.render("/path")

        } catch(error) {
            console.log(error)
            res.send(error)
        }
    }
}
`

        fs.writeFile(filePath, setup, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Content written successfully!');
            }
        });

    } catch (error) {
        throw error
    }
}

write_app('./controllers/controller1.js')
write_app('./controllers/controller2.js')
