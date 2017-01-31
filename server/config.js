module.exports = {
  twitter: {
    consumer_key: process.env.CONSUMER_KEY ||
                  '9SmwDwS04ZpTyxHiYepIvlm4i',

    consumer_secret: process.env.CONSUMER_SECRET ||
                     '9iUTPrdyn8cDIhWgMkBPyO1CAITFizohXRIqREr9cJpyVPThar',

    access_token_key: process.env.ACCESS_TOKEN_KEY ||
                      '4821215627-1acmpURRNVUb5KxMkVwjWQaJOEG4Opc0e3MIaPZ',

    access_token_secret: process.env.ACCESS_TOKEN_SECRET ||
                         'V0Xl1QTwtfcv56JymzjCr4tJDBimOp3XsF1z9PMLMCYRs'
  },
  db: {
    uri: process.env.MONGO_URL || 'mongodb://' +
        (process.env.DB_ADDR || 'localhost') + '/react-tweets',
    options:{
      user: '',
      pass: ''
    }
  }
};
