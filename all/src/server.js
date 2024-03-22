const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentHtml);
});

app.listen(3000, () => {
    console.log('Application is running on http://localhost:3000/');
});
