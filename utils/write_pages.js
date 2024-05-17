const fs = require('fs');

async function write_app(filePath, setup) {
    try {
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

const setup1 = 
`<%- include('../partials/header.ejs', {title: 'Arts' }) %>



<%- include('../partials/footer.ejs') %>
`

write_app('./views/pages/home.ejs', setup1)
