const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect("mongodb://localhost:27017/Success-Journal");
    console.log("Connect To DataBase successfully  :))");
  } catch (err) {
    console.log("We had a problem with the database");
    return null;
  }
};

export default connectToDB;
