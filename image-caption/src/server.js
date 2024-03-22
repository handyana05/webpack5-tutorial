const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/image-caption.html');
    const contentHtml = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentHtml);
});

app.listen(9003, () => {
    console.log('Application is running on http://localhost:9003/');
});
