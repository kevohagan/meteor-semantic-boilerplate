Fotos = new Meteor.Collection2('fotos', {
      schema: new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            optional: true,
            max: 200
        },
        image : {
              type : String,
              regEx : SchemaRegEx.FilePickerImageUrl,
              optional: true // the RegEx defined here defines the image field
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




Cars = new Meteor.Collection2('cars', {
      schema: new SimpleSchema({
        title: {
            type: String,
            label: "Title",
            optional: true,
            max: 200
        },
        brand : {
            type: String,
            label: "Brand",
            optional: true,
            max: 200
        },
        year : {
            type: Number,
            label: "Year",
            optional: true
        },
        selling: {
          type: Boolean,
          label: "Is it for sell?",
          optional: true
        },
        country: {
          type: String,
          label: "Th country of origin",
          optional : true
        }
      })
});


Cars.allow({
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
