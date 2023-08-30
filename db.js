const mongoose = require('mongoose');
const dburl = "mongodb+srv://register:iitbijir4@bijirgiribasumatary.rcazv.mongodb.net/node-tuts?retryWrites=true&w=majority"

const MongoServer = async () => {
    try {
      await mongoose.connect(dburl, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology: true,
        useFindAndModify:false
      });
      console.log("Connected to Database");
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  
module.exports = MongoServer;