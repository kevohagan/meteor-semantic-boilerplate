Meteor.startup(function() {
  return SEO.config({
    title: 'Meteor Semantic Boilerplate',
    meta: [
      {
        key: 'description',
        value: 'This boilerplate unites Meteor.js and Semantic UI '
      }
    ],
    og: [
      {
        key: 'image',
        value: 'http://semanticboilerplate.meteor.com/img/img80.jpg'
      }
    ]
  });
});