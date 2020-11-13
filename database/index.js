const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carousel', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('connected to MongoDB');
});

db.on('error', (err) => {
  console.log(err);
});

const placesSchema = new mongoose.Schema({
  id: Number,
  info: [{
    rating: Number,
    listing_type: String,
    beds: Number,
    location: String,
    price: Number,
    liked: Boolean,
    url: String,
  }],
});

const activitiesSchema = new mongoose.Schema({
  id: Number,
  info: [{
    rating: Number,
    activity_name: String,
    price: Number,
    url: String,
  }],
});

const Places = mongoose.model('places', placesSchema);
const Activities = mongoose.model('activities', activitiesSchema);

const createPlaceDoc = (data) => {
  // creates 1 places doc for my Places collection
  const doc = new Places(data);
  doc.save()
    .catch((err) => {
      console.log('error saving place document', err);
    });
};

const createActivityDoc = (data) => {
  // creates 1 activity doc for my Activities collection
  const doc = new Activities(data);
  doc.save()
    .catch((err) => {
      console.log('error saving activity document', err);
    });
};

// fetch data for 1 out of the 100 possible places carsousel renderings
const fetchPlaceDatabyID = (randID) => Places.find({ id: randID });

// fetch data for 1 out of the 100 possible activity carsousel renderings
const fetchActivityDatabyID = (randID) => Activities.find({ id: randID });

module.exports.createPlaceDoc = createPlaceDoc;
module.exports.createActivityDoc = createActivityDoc;
module.exports.fetchPlaceDatabyID = fetchPlaceDatabyID;
module.exports.fetchActivityDatabyID = fetchActivityDatabyID;
