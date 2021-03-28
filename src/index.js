    const path = require('path');
    const express = require('express');
    const morgan = require('morgan');
    const exphbs = require('express-handlebars'); // thư viện template
    const app = express();
    const port = 3000;

    const route = require('./routes');

    const db = require('./config/db/');
    //Connect  DB
    db.connect();

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.urlencoded({
        extended: true
    })); // xử lý dữ liệu submit gửi từ form
    app.use(express.json());

    // HTTP logger
    app.use(morgan('combined'));

    // template engine
    app.engine('hbs', exphbs({
        extname: '.hbs' // config file name
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'resources', 'views'));

    // route init
    route(app);



    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    })