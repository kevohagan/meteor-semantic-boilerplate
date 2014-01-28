Router.configure({
  layoutTemplate : 'layout',
  notFoundTemplate : '404',

});


var filters = {

  // nProgressHook: function () {
  //   if (this.ready()) {
  //     NProgress.done();
  //   } else {
  //     NProgress.start();
  //     this.stop();
  //   }
  // },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      throwError('Please Sign In First.')
      this.render('signin');
      this.stop();
    }
  },

  isAdmin: function() {

      if ( Meteor.user() && Roles.userIsInRole(Meteor.user(),'admin')) {
        console.log('admin acessed');
        return true;
      }
      else {
        this.render('no_rights');
        this.stop();
      }
  },


}



Router.map(function () {

  this.route('home', {
    path:'/',
    controller: 'BasicController'
  });

  this.route('contact',{
    path: '/contact',
    controller: 'BasicController'
  });

  this.route('portfolio',{
    path: '/portfolio',
    controller: 'BasicController'

  });

  this.route('team',{
    path: '/team'
  });

  this.route('test',{
    path: '/test',
    controller: 'BasicController',
    before: filters.isAdmin
  });




  this.route('admin', {
    path: '/admin',
    layoutTemplate:'ognoAdminLayout',
    template:'ognoAdminOverview',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }
    }

  });
});


BasicController = RouteController.extend({
    layoutTemplate: 'layout',
    notFoundTemplate: '404',
    loadingTemplate: 'loading',
    yieldTemplates: {
      header: {
        to: 'header'
      },
      footer: {
        to: 'footer'
      }
    },
    waitOn: function () {
        // return Meteor.subscribe('Users');
    },
    after: function(){

    }
});


AdminController = BasicController.extend({
});

