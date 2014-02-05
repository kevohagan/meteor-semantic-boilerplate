Meteor.startup(function() {

  if (Meteor.isClient) {

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
      },
      {
        key: 'title',
        value: 'An open-source boilerplate that unites Meteor.js and Semantic UI'
      },
      {
        key: 'url',
        value: 'http://semanticboilerplate.meteor.com'
      }
    ]
  });

  }
});