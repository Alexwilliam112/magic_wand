'use strict'

module.exports = {

    Build_Schema: {
        build_config: {
            manual_errorHandling: false,
            views_type: 'none', // Option: "ejs", "none"
            api_method: 'restful', //Option: "get_post" , "restful"
            run_from: 'bin',
            /**
            Run from "app": node ./app.js
            Run from "bin": node ./bin/www.js
             */
            sequelize: true,
            test: true,
            middlewares: {
                authentication: true,
                authorization: true,
                errorHandler: true
            }
        },
        dependencies: {
            express: true,
            ejs: false,
            pg: true,
            sequelize: true,
            bcryptjs: true,
            jsonwebtoken: true,
            dotenv: true,
            axios: true,
            multer: true,
            imagekit: true
        },
        devDependencies: {
            "sequelize-cli": true,
            nodemon: true,
            jest: true,
            "jest-tap-reporter": true,
            supertest: true
        },
        database: {
            db_name: 'rename',
            db_port: 5432,
            db_host: 'localhost',
            db_dialect: 'postgres',
            db_logging: false,
            db_username: 'postgres',
            db_password: 'postgres'
        }
    },

    Model_Schema: {
        model1: { //RENAME THIS TO YOUR MODEL NAME (singular)
            a: { //DELETE THIS OBJECT IF NOT NEEDED
                attribute_name: '',
                dataType: '', //primitive dataType
                allowEmpty: [false, 'validationMessage'],
                unique: [false, 'validationMessage'],
                length: [null, null, 'validationMessage'], //[start(INT), end(INT), msg(STR)]
                specialType: [false, 'validationMessage'] // [email, msg(STR)] or [url, msg(STR)]
            },
            b: { //DELETE THIS OBJECT IF NOT NEEDED
                attribute_name: '',
                dataType: '', //primitive dataType
                allowEmpty: [false, 'validationMessage'],
                unique: [false, 'validationMessage'],
                length: [null, null, 'validationMessage'], //[start(INT), end(INT), msg(STR)]
                specialType: [false, 'validationMessage'] // [email, msg(STR)] or [url, msg(STR)]
            },
            //
            /** IF NEED MORE ATTRIBUTE, COPY WITH DIFFERENT PROPERTY 'KEY' 
            EXAMPLE:
            c: { //DELETE THIS OBJECT IF NOT NEEDED
                attribute_name: '',
                dataType: '', //primitive dataType
                allowEmpty: [false, 'validationMessage'],
                unique: [false, 'validationMessage'],
                length: [null, null, 'validationMessage'], //[start(INT), end(INT), msg(STR)]
                specialType: [false, 'validationMessage'] // [email, msg(STR)] or [url, msg(STR)]
            },
             */
        },
        model2: {
            a: {
                attribute_name: '',
                dataType: '',
                allowEmpty: [false, 'validationMessage'],
                unique: [false, 'validationMessage'],
                length: [null, null, 'validationMessage'],
                specialType: [false, 'validationMessage']
            },
            b: {
                attribute_name: '',
                dataType: '',
                allowEmpty: [false, 'validationMessage'],
                unique: [false, 'validationMessage'],
                length: [null, null, 'validationMessage'],
                specialType: [false, 'validationMessage']
            },
        },
        model3: {
            a: {
                attribute_name: '',
                dataType: '',
                allowEmpty: [false, 'validationMessage'],
                unique: [false, 'validationMessage'],
                length: [null, null, 'validationMessage'],
                specialType: [false, 'validationMessage']
            },
            b: {
                attribute_name: '',
                dataType: '',
                allowEmpty: [false, 'validationMessage'],
                unique: [false, 'validationMessage'],
                length: [null, null, 'validationMessage'],
                specialType: [false, 'validationMessage']
            },
        }
    }
}