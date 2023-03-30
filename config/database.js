const mongoose = require('mongoose');

// allows the usage of mongoose to manipulate data throughout the app
mongoose.connect(process.env.DATABASE_URL);
	
// shortcut to mongoose.connection object
const db = mongoose.connection;
	
// message will be logged when the app is running and database is connected
db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

