const { exec } = require('child_process');
const { exit } = require('process');
const { model_A, model_B, model_C } = require('./script_config')

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
    `npx sequelize db:create`,
    `${model_A}`,
    `${model_B}`,
    `${model_C}`,
];


const execPromise = (cmd) => {
    return new Promise(function (res, rej) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                rej(error)
            } else {
                res(stdout)
            }
        })
    })
};

(async () => {
    for await (const el of commands) {
        try {
            await execPromise(el)

        } catch (error) {
            exit()
        }
    }
})()



function executeCommandsSequentially(commands) {
    if (commands.length === 0) {
        console.log("All commands executed successfully.");
        return;
    }

    const command = commands.shift(); // Get the first command
    exec(`powershell.exe -Command "${command}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        console.log(`Command output:\n${stdout}`);
        executeCommandsSequentially(commands);
    });
}

executeCommandsSequentially(commands);
