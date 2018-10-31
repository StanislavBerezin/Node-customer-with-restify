const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');
const rjwt = require('restify-jwt-community');
//can refactor
const server = restify.createServer();

// Middleware, ca use many other ones too in the same way
server.use(restify.plugins.bodyParser());

// Protect Routes
// server.use(rjwt({ secret: config.JWT_SECRET }).unless({ path: ['/auth'] }));

server.listen(config.PORT, () => {
  mongoose.set('useFindAndModify', false);
  mongoose.connect(
    config.MONGODB_URI,
    { useNewUrlParser: true }
  );
});

const db = mongoose.connection;

db.on('error', err => console.log(err));

db.once('open', () => {
  require('./routes/customers')(server);
  require('./routes/users')(server);
  console.log(`Server started on port ${config.PORT}`);
});
