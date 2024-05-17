const fs = require('fs');

async function write_app() {
    try {
        const filePath = './app.js';

        const setup = `
'use strict'

const express = require('express')
const app = express()
const router = require('./routers/index')
const PORT = 3002

//config
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

//routing
app.use(router)

app.listen(PORT, () => {
    console.log('LOCALSERVER STARTED AT PORT ' + PORT);
})
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
