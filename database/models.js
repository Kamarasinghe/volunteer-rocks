const mongoose = require('mongoose');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var volunteerSchema = mongoose.Schema({
  googleId: String,
  name: {
    type: String,
    required: true
  },
  address: {
    street: String,
    City: String,
    State: String,
    zipCode: String,
  },
  phone: String,
  email: String,
  opList: [Schema.ObjectId],
  created_at: {
    type: Date,
    default: Date.now
  },
  picture: String
});

var organizationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  phone: String,
  email: String,
});

var opportunitiesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  cause: String,
  zipcode: String,
  formatted_address: String,
  start_date: Date,
  end_date: Date,
  phone: String,
  email: String,
  location: {
    lat: Number,
    lng: Number
  },
  volunteerers: []
});

var Volunteers = mongoose.model('Volunteers', volunteerSchema);
var Organizations = mongoose.model('Organizations', organizationSchema);
var Opportunities = mongoose.model('Opportunities', opportunitiesSchema);

module.exports.Volunteers = Volunteers;
module.exports.Organizations = Organizations;
module.exports.Opportunities = Opportunities;