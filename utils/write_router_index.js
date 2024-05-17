const fs = require('fs');

async function write_app() {
    try {
        const filePath = './routers/index.js';

        const setup = `
'use strict'

const router = require('express').Router()

const router1 = require('./router1')
const router2 = require('./router2')
const Controller1 = require('../controllers/controller1')

router.get('/', Controller1.rename_this)

router.use('/endpoint_A', router1)
router.use('/endpoint_B', router2)

module.exports = router
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

write_app()
