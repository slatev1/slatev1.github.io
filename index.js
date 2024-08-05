#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const generateHTML = ({ title, description }) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>${title}</h1>
    <p>${description}</p>
    <script src="script.js"></script>
</body>
</html>
`;

const generateCSS = () => `
body {
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f0f0f0;
    color: #333;
}
h1 {
    color: #333;
}
`;

const generateJS = () => `
console.log("Website generated successfully!");
`;

const main = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the website title:',
            default: 'My Website'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the website description:',
            default: 'This is a description of my website.'
        }
    ]);

    const outputDir = path.join(process.cwd(), 'output-website');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    fs.writeFileSync(path.join(outputDir, 'index.html'), generateHTML(answers));
    fs.writeFileSync(path.join(outputDir, 'styles.css'), generateCSS());
    fs.writeFileSync(path.join(outputDir, 'script.js'), generateJS());

    console.log('Website generated successfully!');
};

main();
