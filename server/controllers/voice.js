import Voice from '../models/voice.js'

export async function addVoice(req, res) {
    try {
      const { name, gender, isChild, language, languageCode, countryCode, type, voiceURL, countryURL   } = req.body;
  
      // Check for existing voice
      const existingVoice = await Voice.findOne({ name, type, voiceURL });
      if (existingVoice) {
        return res.status(400).send({ error: "Please use a unique voice" });
      }
  
      // Create new voice
      const voice = new Voice({
        name,
        gender,
        isChild,
        language,
        languageCode,
        countryCode,
        type,
        voiceURL,
        countryURL
      });
  
      // Save voice to database
      const savedVoice = await voice.save();
      if (!savedVoice) {
        return res.status(500).send({ error: "Unable to save voice" });
      }
  
      return res.status(201).send({ msg: "Voice added successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Internal server error" });
    }
  }

export async function getallVoices(req, res) {
    try {
      const data = await Voice.find();
      if (!data) {
        res.status(404).json({ message: "No audio found" });
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };