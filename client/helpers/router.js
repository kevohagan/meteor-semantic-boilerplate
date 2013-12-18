Router.configure({
  layoutTemplate : 'layout',
  notFoundTemplate : '404',
});



Router.map(function () {

  this.route('home', {
    path:'/'
  });

});