const faker = require('faker');
const db = require('./index.js');

const generateRandFloat = (min, max) => {
  const n = (Math.random() * (max - min) + min).toFixed(2);
  if (n.toString()[n.length - 1] === '0') {
    return n.slice(0, n.length - 1);
  }
  return n;
};

const generateRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomListingType = () => {
  const options = [
    'Entire home',
    'Private room',
    'Room in boutique hotel',
    'Hotel room',
    'Guesthouse',
    'Farm stay',
    'Mansion',
    'Studio',
    'Apartment',
    'Studio apartment',
    'Penthouse',
    'Boathouse',
    'Cabin',
    'Cottage',
  ];
  const idx = Math.floor(Math.random() * options.length);
  return options[idx];
};

/**
 * scripts for seeding database with mock data to display in components
 */

const seedingPlaces = () => {
  for (let i = 1; i <= 100; i++) {
    const data = { id: i, info: [] };
    const usState = faker.address.state();
    for (let j = 0; j < 12; j++) {
      const infoObj = {
        rating: generateRandFloat(3.5, 5),
        total_ratings: generateRandInt(1, 50),
        listing_type: generateRandomListingType(),
        beds: generateRandInt(2, 6),
        location: `${faker.address.city()}, ${usState}`,
        price: generateRandInt(50, 200),
        liked: false,
        url: `https://loremflickr.com/320/240/interiordesign?lock=${i + j}&random=${j}`,
      };
      data.info.push(infoObj);
    }
    db.createPlaceDoc(data);
  }
};

const seedingActivities = () => {
  for (let i = 1; i <= 100; i++) {
    const data = { id: i, info: [] };
    for (let j = 0; j < 18; j++) {
      const infoObj = {
        rating: generateRandFloat(3.5, 5),
        total_ratings: generateRandInt(1, 50),
        activity_name: faker.lorem.sentence(),
        price: generateRandInt(5, 30),
        url: `https://loremflickr.com/320/240/vacation?lock=${i + j}&random=${j}`,
      };
      data.info.push(infoObj);
    }
    db.createActivityDoc(data);
  }
};

// invoked following `npm run seed`
seedingPlaces();
seedingActivities();
