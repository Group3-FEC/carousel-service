# Home2Go's carousel service

## preview

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

makesure you have [mongoDB](https://docs.mongodb.com/manual/administration/install-community/) installed and seed database

```
$ npm run seed
```
start the server
```
$ npm start
```
visit `localhost:3000` to see the carousel in action

### 📦 webpack
This project is bundled using Webpack, if you make any local changes you will need to run `$ npm run build` in order for your changes to be reflected.

### 🧪 testing the build
This project comes out of the box with 100% coverage using Jest + Enzyme.
```
$ npm run test
```