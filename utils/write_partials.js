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

const setup_header = `
'use strict'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>

`

const setup_footer = `
</body>
</html>
`

write_app('./views/partials/header.ejs', setup_header)
write_app('./views/partials/footer.ejs', setup_footer)
