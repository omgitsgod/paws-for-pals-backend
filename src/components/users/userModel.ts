import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  photo: String,
  token: String,
  oauthID: Number,
  created: Date,
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Favorite'
  }],
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
