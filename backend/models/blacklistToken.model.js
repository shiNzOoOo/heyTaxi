const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlacklistTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    expires: 86400, // 1 day
    
  },
});



const BlacklistToken = mongoose.model('BlacklistToken', BlacklistTokenSchema);

module.exports = BlacklistToken;