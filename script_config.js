
const db_name = 'rename_database'
const db_port = 5432

const model1_name = 'rename_this'
const model1_config = { //modify this
    name: 'string',
    title: 'string',
    age: 'integer'
}

const model2_name = 'rename_this'
const model2_config = { //modify this
    name: 'string',
    title: 'string',
    age: 'integer'
}

const model3_name = 'rename_this'
const model3_config = { //modify this
    name: 'string',
    title: 'string',
    age: 'integer'
}

const model_A = createModel(model1_name, model1_config)
const model_B = createModel(model2_name, model2_config)
const model_C = createModel(model3_name, model3_config)


//===========================DO NOT CHANGE BELOW THE LINE=====================================
module.exports = {
    model_A,
    model_B,
    model_C
}

function createModel(model_name, model_config) {
    const temp = []
    for (const key in model_config) {
        if (Object.hasOwnProperty.call(model_config, key)) {
            const element = model_config[key];
            temp.push(`${key}:${element}`) 
        }
    }
    const model_attributes = temp.join(',')
    return `npx sequelize db:model --name ${model_name} --attributes ${model_attributes}`
    }

const fs = require('fs');
const configFilePath = './config/config.json';

fs.readFile(configFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${configFilePath}: ${err}`);
        return;
    }

    try {
        const config = JSON.parse(data);

        config.development.database = db_name
        config.development.username = 'postgres';
        config.development.password = 'postgres';
        config.development.host = 'localhost';
        config.development.port = db_port;
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
