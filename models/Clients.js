const { Schema, model } = require('mongoose');

const ClientsSchema = new Schema(
    {
      clientsName: {
        type: String,
        required: true,
        trim: true
      },
      clientsAge: {
        type: Number,
        required: true,
        trim: true
      },

      clientsGoals: {
        type: String,
        required: true,
        trim: true
      },
    
      clientsExp: {
        type: String,
        required: true,
      },

      clientsDays: {
        type: String,
        required: true,
      },

      Group: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Groups'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      // prevents virtuals from creating duplicate of _id as `id`
      id: false
    }
  );
  
  ClientsSchema.virtual('ClientsCount').get(function() {
    return this.replies.length;
  });
  
  
  const Clients = model('Clients', ClientsSchema);
  
  module.exports = Clients;