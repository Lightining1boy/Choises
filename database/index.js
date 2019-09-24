

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Choices');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const profileSchema = mongoose.Schema({
  username: String,
  password: String
});

// const storiesSchema = mongoose.Schema({
//   SmallStories: Object,
//   MediumStories: Object,
//   LargeStories: Object
// });
const storiesSchema = mongoose.Schema({
  Stories: Array
});

const Profile = mongoose.model('Profile', profileSchema);

const Stories = mongoose.model('Stories', storiesSchema);

const createProfile = (profile, callback) => {
  Profile.insertMany({username: profile.UserName, password: profile.Password}, (err, Response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, Response);
    }
  })
}

const logIn = (profile, callback) => {
  Profile.find(profile, (err, Response) => {
    if (err) {
      callback(err);
    } else {
      Stories.find({}, (err, Response) => {
        if (err) {
          callback(err);
        } else {
          callback(null, Response);
        }
      })
      
    }
  });
}

const createStory = (story, callback) => {
  Stories.insertMany({Stories: story}, (err, Response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, Response);
    }
  })
}

const getAllStories = (callback) => {
  ;
}

module.exports = {getAllStories, createProfile, createStory, logIn}