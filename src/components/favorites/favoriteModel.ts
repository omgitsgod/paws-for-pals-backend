import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema(
  {
    id: Number,
    favorite_id: {
      type: String,
      unique: true
    },
    organization_id: String,
    url: String,
    type: String,
    species: String,
    breeds: {
      primary: String,
      secondary: String,
      mixed: Boolean,
      unknown: Boolean,
    },
    colors: {
      primary: String,
      secondary: String,
      tertiary: String,
    },
    age: String,
    gender: String,
    size: String,
    coat: String,
    attributes: {
      spayed_neutered: Boolean,
      house_trained: Boolean,
      declawed: Boolean,
      special_needs: Boolean,
      shots_current: Boolean,
    },
    enviorment: {
      children: Boolean,
      dogs: Boolean,
      cats: Boolean,
    },
    tags: [String],
    name: String,
    description: String,
    photos: [
      {
        small: String,
        medium: String,
        large: String,
        full: String,
      },
    ],
    primary_photo_cropped: {
      small: String,
      medium: String,
      large: String,
      full: String,
    },
    videos: [String],
    status: String,
    status_changed_at: String,
    published_at: String,
    contact: {
      email: String,
      phone: String,
      address: {
        address1: String,
        address2: String,
        city: String,
        state: String,
        postcode: String,
        country: String,
      },
    },
    _links: {
      self: {
        href: String,
      },
      type: {
        href: String,
      },
      organization: {
        href: String,
      },
    },
    created: Date,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

export default Favorite;
