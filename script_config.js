
const db_name = 'db_name'  //RENAME THIS TO YOUR DATABASE NAME
const db_port = 5432  //SET YOUR POSTGRES PORT

const model1_name = 'rename_this' 
//rename to model name.if model_name is 'rename_this', it will be ignored
const model1_config = { 
    attribute1: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute2: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute3: 'date', //rename KEY to attribute name, VALUE to datatype
    attribute4: 'string', //delete value and key if not needed!
    attribute5: 'string', //delete value and key if not needed!
    attribute6: 'integer' //delete value and key if not needed!
}

const model2_name = 'rename_this'
//rename to model name.if model_name is 'rename_this', it will be ignored
const model2_config = {
    attribute1: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute2: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute3: 'string', //delete value and key if not needed!
    attribute4: 'string', //delete value and key if not needed!
}

const model3_name = 'rename_this' 
//rename to model name.if model_name is 'rename_this', it will be ignored
const model3_config = { 
    attribute1: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute2: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute3: 'integer' //delete value and key if not needed!
}

const model4_name = 'rename_this' 
//rename to model name.if model_name is 'rename_this', it will be ignored
const model4_config = { 
    attribute1: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute2: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute3: 'integer' //delete value and key if not needed!
}

const model5_name = 'rename_this'
//rename to model name.if model_name is 'rename_this', it will be ignored
const model5_config = { 
    attribute1: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute2: 'string', //rename KEY to attribute name, VALUE to datatype
    attribute3: 'integer' //delete value and key if not needed!
}

//============================================================================================
//===========================DO NOT CHANGE BELOW THE LINE=====================================
//============================================================================================
const model_A = createModel(model1_name, model1_config)
const model_B = createModel(model2_name, model2_config)
const model_C = createModel(model3_name, model3_config)
const model_D = createModel(model4_name, model4_config)
const model_E = createModel(model5_name, model5_config)

module.exports = {
    models: [
        model_A,
        model_B,
        model_C,
        model_D,
        model_E
    ]
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
    if (model_name !== 'rename_this') {
        return `npx sequelize model:create --name ${model_name} --attributes ${model_attributes}`
    } else {
        return null
    }
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
