//============================================================================================
//===========================DO NOT CHANGE BELOW THE LINE=====================================
//============================================================================================
//============================================================================================
//===========================DO NOT CHANGE BELOW THE LINE=====================================
//============================================================================================
const { exec } = require('child_process');
const { models } = require('./script_config')

    const commands = [
        `npm init -y`,
        `npm install express pg ejs sequelize`,
        `npm install --save-dev sequelize-cli`,
        `npm install --save-dev nodemon`,
        `New-Item -Path ".gitignore" -ItemType "file" -Force`,
        `npx sequelize init`,
        `node ./magic_wand/script_config.js`,
        `if (!(Test-Path .\\app.js)) { New-Item -Path .\\app.js -ItemType file }`,
        `if (!(Test-Path .\\controllers)) { New-Item -Path .\\controllers -ItemType Directory }`,
        `if (!(Test-Path .\\views)) { New-Item -Path .\\views -ItemType Directory }`,
        `if (!(Test-Path .\\routers)) { New-Item -Path .\\routers -ItemType Directory }`,
        `if (!(Test-Path .\\routers\\index.js)) { New-Item -Path .\\routers\\index.js -ItemType file }`,
        `if (!(Test-Path .\\routers\\router1.js)) { New-Item -Path .\\routers\\router1.js -ItemType file }`,
        `if (!(Test-Path .\\routers\\router2.js)) { New-Item -Path .\\routers\\router2.js -ItemType file }`,
        `if (!(Test-Path .\\views\\partials)) { New-Item -Path .\\views\\partials -ItemType Directory }`,
        `if (!(Test-Path .\\views\\pages)) { New-Item -Path .\\views\\pages -ItemType Directory }`,
        `if (!(Test-Path .\\views\\partials\\header.ejs)) { New-Item -Path .\\views\\partials\\header.ejs -ItemType file }`,
        `if (!(Test-Path .\\views\\partials\\footer.ejs)) { New-Item -Path .\\views\\partials\\footer.ejs -ItemType file }`,
        `if (!(Test-Path .\\views\\pages\\home.ejs)) { New-Item -Path .\\views\\pages\\home.ejs -ItemType file }`,
        `if (!(Test-Path .\\controllers\\controller1.js)) { New-Item -Path .\\controllers\\controller1.js -ItemType file }`,
        `if (!(Test-Path .\\controllers\\controller2.js)) { New-Item -Path .\\controllers\\controller2.js -ItemType file }`,
        `node ./magic_wand/utils/write_file_app.js`,
        `node ./magic_wand/utils/write_router_index.js`,
        `node ./magic_wand/utils/write_partials.js`,
        `node ./magic_wand/utils/write_pages.js`,
        `node ./magic_wand/utils/write_controller.js`,
        `node ./magic_wand/utils/write_gitignore.js`,
        `npx sequelize db:create`,
    ];


    const execPromise = (cmd) => {
        return new Promise(function (resolve, reject) {
            exec(`powershell.exe -Command "${cmd}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${stderr}`);
                    reject(error)
                } else {
                    console.log(`Command output:\n${stdout}`);
                    resolve(stdout)
                }
            })
        })
    };

(async () => {
    models.forEach(el => {
        if (el !== null) {
            commands.push(el)
        }
    });

    for await (const el of commands) {
        try {
            await execPromise(el)

        } catch (error) {
            console.error(`Command failed: ${error.message}`);
        }
    }
})()