Fotos = new Meteor.Collection2('fotos', {
      schema: new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            optional: true,
            max: 200
        },
        url: {
            type: String,
            label: "FOto url",
            optional: true,
            max: 1000
        }
    })
});


Fotos.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
   return true;
  },
  remove: function (userId, doc) {
   return true;
  },
  fetch: [],
  transform: function () {
    return true;
  }
});
