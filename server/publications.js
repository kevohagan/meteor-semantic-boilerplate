
Meteor.publish('fotos', function () {
  return Fotos.find();
});

Meteor.publish('cars', function () {
  return Cars.find();
});