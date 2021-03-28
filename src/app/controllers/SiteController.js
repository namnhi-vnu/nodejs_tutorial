//add model 
const Course = require('../models/Course');
const {
    mutipleMongooseToObject
} = require('../../util/mongoose');

class SiteController {

    // [GET] /Home
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = courses.map(courses => courses.toObject())
                res.render('home', {
                    courses
                });
            })
            .catch(next);

    }

    // [GET] /search
    search(req, res) {
        res.render('search');

    }
}

module.exports = new SiteController;