
Meteor.publish('fotos', function () {
  return Fotos.find();
});

Meteor.publish('cars', function () {
  return Cars.find();
});


Meteor.publish(null, function (){
  return Meteor.roles.find({})
});

Meteor.publish('subscribers', function () {
  return Subscribers.find({});
});
