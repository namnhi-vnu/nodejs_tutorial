const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // định tuyến
    app.use('/news', newRouter);

    app.use('/', siteRouter);


}


module.exports = route;