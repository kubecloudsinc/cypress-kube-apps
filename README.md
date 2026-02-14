Steps for initial setup

make sure node yarn are selected for the project (if using webstorm)
check on the system if using vscode
node -v
corepack -v
yarn -v
where yarn

change to use git bash (webstorm or vscode) as your default terminal

make yarn your package manager

if using VSCode add this to .vscode>settings.json

{
"typescript.tsserver.npm": "yarn",
"eslint.packageManager": "yarn",
"npm.packageManager": "yarn",
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"files.exclude": {
"node_modules": false
}
}

The project uses yarn2+ berry so we need to force it to use node_modules otherwise cypress will not be detected
yarn config set nodeLinker node-modules

run the script in the folder. always use gitBash
./run install
corepack will be enabled for yarn
Note: Always open VSCode as administrator so that the commands in git bash or cmd run without any errors

Important commands

## to run cypress in open mode

     yarn cypress open -C cypress.sit.config.ts

## to check transcompile is correct

    yarn tsc --noEmit
