// keep track of these values
// set sensible defaults for PORT value if necessary
module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://Triggxl@localhost:8000/test_heroku'
}