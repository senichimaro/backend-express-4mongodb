const mongoose = require("mongoose");

const UserModel = require("./UserModel")

mongoose
  .connect("mongodb://autonet_mongo/test",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", async function(){
  const collections = await mongoose.connection.db.listCollections().toArray();
  const adminData = {
    username: "admin",
    password: "1234",
    email: "admin@admin.com",
    question: ["How let the dogs out?"],
    access: ["admin"]
  }
  const entries = await UserModel.find({email:adminData.email}).lean().exec()
  console.log("Entries found", entries)
  console.log("Entries lenght", entries.length)
  if (!(entries.length > 0)) {
    console.log('Admin has been created')
    const adminUser = new UserModel(adminData)
    adminUser.save()
      .then(() => console.log('User 1 saved successfully.'))
      .catch((err) => console.error('Error saving user 1:', err) );
  }
  else console.log('Admin not created')
})

// UserModel.deleteMany({})
//   .then(() => {
//     console.log('All records deleted successfully.');
//   })
//   .catch((err) => {
//     console.error('Error deleting records:', err);
//   });


  


