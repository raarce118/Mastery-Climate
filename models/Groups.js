const { Schema, model, } = require('mongoose');

const GroupsSchema = new Schema(
    {
      groupsName: {
        type: String,
        required: true,
        trim: true
      },

      groupsComments: {
        type: String,
        required: true,
        trim: true
    }
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
  
  GroupsSchema.virtual('GroupsCount').get(function() {
    return this.replies.length;
  });
  
  
  const Groups = model('Groups', GroupsSchema);
  
  module.exports = Groups;