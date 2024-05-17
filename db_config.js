const fs = require('fs');
const configFilePath = './config/config.json';

fs.readFile(configFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${configFilePath}: ${err}`);
        return;
    }

    try {
        const config = JSON.parse(data);

        config.development.database = 'autoscript_by_alex'
        config.development.username = 'postgres';
        config.development.password = 'postgres';
        config.development.host = 'localhost';
        config.development.port = 5432;
        config.development.dialect = 'postgres'
        config.development.logging = false

        const modifiedConfig = JSON.stringify(config, null, 2);

        fs.writeFile(configFilePath, modifiedConfig, 'utf8', (err) => {
            if (err) {
                console.error(err.message);
                return;
            }
            console.log(`ACTION SUCCESS: MODIFIED SEQUELIZE CONFIG`);
        });
    } catch (error) {
        console.error(error.message);
    }
});
