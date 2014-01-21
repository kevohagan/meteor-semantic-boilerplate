
Meteor.publish('fotos', function () {
  return Fotos.find();
});