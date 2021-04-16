import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    organization_id: String,
    url: String,
    type: String,
    species: Number,
    breeds: {},
    colors: {},
    age: String,
    gender: String,
    size: String,
    coat: Boolean,
    attributes: {},
    enviorment: {},
    tags: [],
    name: String,
    description: String,
    photos: [],
    videos: [],
    status: String,
    published_at: String,
    contact: {},
    _links: {},
    created: Date,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },

  { timestamps: true }
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

export default Favorite;
