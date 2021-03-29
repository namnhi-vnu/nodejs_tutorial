//add model 
const Course = require('../models/Course');
const {
    mutipleMongooseToObject
} = require('../../util/mongoose');

class MeController {

    // [GET] /courses: slug
    // storedCoursed(req, res, next) {
    //     Course.findOne().lean({})
    //         .then(courses => res.render('me/stored-courses', {
    //             courses: mutipleMongooseToObject(courses)
    //         }))
    //         .catch(next);

    // }
    storedCoursed(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = courses.map(courses => courses.toObject())
                res.render('me/stored-courses', {
                    courses
                });
            })
            .catch(next);

    }

}

module.exports = new MeController;