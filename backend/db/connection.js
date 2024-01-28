const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://pravinnandankar03:piyu916@cluster0.bpci2y3.mongodb.net/spotify',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
