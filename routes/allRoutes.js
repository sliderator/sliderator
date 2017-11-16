module.exports = (app,path) => {
    const routes = {};
    routes.index = ['/', require('./index.js')(app,path)];
    routes.displaylyrics = ['/displaylyrics', require('./displaylyrics.js')(app,path)];

    //routes.showQuery = require('./showQuery.js');
    return routes;
}
