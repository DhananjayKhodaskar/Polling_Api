//importing path
const path = require('path');

//building path to serve html file
const htmlPath = path.join(__dirname, 'views', 'index.html');

//exporting the function
module.exports.homePage=(req, res)=> {
    const htmlPath = path.join(__dirname, '../views/index.html');
    res.sendFile(htmlPath);
};