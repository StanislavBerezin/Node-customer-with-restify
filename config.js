module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || 'http://localhost:3000',
//can also use mongodb atlas and just hook it up to it rather than using ur own mongodb instance
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://YOUR_URI',
  JWT_SECRET: process.env.JWT_SECRET || 'secret1'
};
