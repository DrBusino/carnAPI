const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/carnavalizando-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) =>
      console.log(`Error to Connect to MongoDB, error ${err}`),
    );
};



module.exports = connectToDatabase;
