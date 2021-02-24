# Home2Go's carousel service

## preview
![carousel demo](./demo.gif)

## 🛠 tech stack
React.js (Hooks), Node.js, Express.js, MongoDB, Mongoose, Jest, Enzyme

## 📍 try it yourself locally

```
$ git clone https://github.com/Home2Go/carousel-service.git && cd carousel-service
```
install dependencies

```
$ npm install
```

make sure you have [mongoDB](https://docs.mongodb.com/manual/administration/install-community/) installed and then seed database

```
$ npm run seed
```
start the server
```
$ npm start
```
visit `localhost:3000/1/` to see the carousel in action
<br></br>
*note:* images and text come from [loremflicker](https://loremflickr.com/) and [faker.js](https://github.com/marak/Faker.js/) respectively. Their servers are sometimes down, preventing components from properly rendering. 

### 📦 webpack
This project is bundled using Webpack, if you make any local changes you will need to run `$ npm run build` in order for your changes to be reflected.

### 🧪 testing the build
This project comes out of the box with 100% coverage using Jest + Enzyme. To check how any local changes effect the build run `$ npm run test`.