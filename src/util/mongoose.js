module.exports = {
    mutipleMongooseToObject: function (mongoose) {
        return mongoose.map(mongoose => mongoose.ToObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.ToObject() : mongoose;
    }
};