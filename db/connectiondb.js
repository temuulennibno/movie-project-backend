import mongoose from "mongoose";

//database connection
const connectiondb = async (DATABASE_URL) => {
  try {
    const options = {
      dbName: process.env.DBNAME,
    };

    const connectionResult = await mongoose.connect(DATABASE_URL, options);
    console.log(`connection to mongoDB on database: ${connectionResult.connections[0].name} at ${new Date().toDateString()}`);
  } catch (err) {
    console.log(err);
  }
};

export default connectiondb;
