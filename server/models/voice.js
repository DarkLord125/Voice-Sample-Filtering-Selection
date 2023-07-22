import mongoose from "mongoose";

// Voice schema
const voiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    default: false
  },
  language: {
    type: String,
    required: true
  },
  languageCode: {
    type: String,
    required: true
  },
  countryCode: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  voiceURL: {
    type: String,
    required: true,
  },
  countryURL: {
    type: String,
    required: true,
  },
},
    { timestamps: true}
);

const Voice = mongoose.model('Voice', voiceSchema);

export default Voice;
