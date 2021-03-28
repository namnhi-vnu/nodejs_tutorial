const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    // định tuyến
    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);


}


module.exports = route;