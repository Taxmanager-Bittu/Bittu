var favicon = require('serve-favicon');

module.exports = function(app) {
    app.use(favicon("./public/Images/favicon/TLogo.jpg"));
}