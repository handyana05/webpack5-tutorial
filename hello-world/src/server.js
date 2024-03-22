const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentHtml);
});

app.listen(9001, () => {
    console.log('Application is running on http://localhost:9001/');
});
