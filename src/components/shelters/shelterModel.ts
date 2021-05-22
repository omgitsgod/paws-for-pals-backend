import mongoose from 'mongoose';

const shelterSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    name: String,
    address: {
      address1: String,
      address2: String,
      city: String,
      state: String,
      postcode: String,
      country: String,
    },
    adoption: {
      policy: String,
      url: String,
    },
    email: String,
    hours: {
      monday: String,
      tuesday: String,
      wednesday: String,
      thursday: String,
      friday: String,
      saturday: String,
      sunday: String,
    },
    mission_statement: String,
    phone: String,
    photos: [
      {
        small: String,
        medium: String,
        large: String,
        full: String,
      },
    ],
    url: String,
    website: String,
    social_media: {
      facebook: String,
      instagram: String,
      pintrest: String,
      twitter: String,
      youtube: String,
    },
    _links: {
      self: {
        href: String,
      },
      animals: {
        href: String,
      },
    },
    created: Date,
  },
  { timestamps: true }
);

const Shelter = mongoose.model('Shelter', shelterSchema);

export default Shelter;
