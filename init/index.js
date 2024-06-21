const mongoose = require("mongoose");
const data = require("./data.js");

const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connection successfull with db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
  await Listing.deleteMany({});
 initData.data = initData.data.map((obj)=>({...obj, owner:"66740214d208973a010e3232"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialise");
}
initDB();


