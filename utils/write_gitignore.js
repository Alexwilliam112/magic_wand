const fs = require('fs');

async function write_app(filePath) {
    try {
        const setup = `
node_modules
magic_wand
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

write_app('./.gitignore')
