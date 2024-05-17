const { exec } = require('child_process');

const commands = [
    `npm init -y`,
    `npm install express pg ejs sequelize`,
    `npm install --save-dev sequelize-cli`,
    `npm install --save-dev nodemon`,
    `New-Item -Path ".gitignore" -ItemType "file" -Force`,
    `npx sequelize init`,
    `node ./utils/db_config.js`,
    `if (!(Test-Path .\\app.js)) { New-Item -Path .\\app.js -ItemType file }`,
    `if (!(Test-Path .\\controllers)) { New-Item -Path .\\controllers -ItemType Directory }`,
    `if (!(Test-Path .\\views)) { New-Item -Path .\\views -ItemType Directory }`,
    `if (!(Test-Path .\\routers)) { New-Item -Path .\\routers -ItemType Directory }`,
    `if (!(Test-Path .\\routers\\index.js)) { New-Item -Path .\\routers\\index.js -ItemType file }`,
    `if (!(Test-Path .\\routers\\router1.js)) { New-Item -Path .\\routers\\router1.js -ItemType file }`,
    `if (!(Test-Path .\\views\\partials)) { New-Item -Path .\\views\\partials -ItemType Directory }`,
    `if (!(Test-Path .\\views\\pages)) { New-Item -Path .\\views\\pages -ItemType Directory }`,
    `if (!(Test-Path .\\views\\partials\\header.ejs)) { New-Item -Path .\\views\\partials\\header.ejs -ItemType file }`,
    `if (!(Test-Path .\\views\\partials\\footer.ejs)) { New-Item -Path .\\views\\partials\\footer.ejs -ItemType file }`,
    `if (!(Test-Path .\\controllers\\controller1.js)) { New-Item -Path .\\controllers\\controller1.js -ItemType file }`,
    `if (!(Test-Path .\\controllers\\controller2.js)) { New-Item -Path .\\controllers\\controller2.js -ItemType file }`,
    `npx sequelize db:create`,
];

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