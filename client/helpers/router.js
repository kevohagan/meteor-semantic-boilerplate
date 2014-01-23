Router.configure({
  layoutTemplate : 'layout',
  notFoundTemplate : '404',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});



Router.map(function () {

  this.route('home', {
    path:'/'
  });

  this.route('contact',{
    path: '/contact'
  });

  this.route('portfolio',{
    path: '/portfolio'
  });

  this.route('team',{
    path: '/team'
  });

  this.route('test',{
    path: '/test'
  });




  this.route('adminRoute', {
    path: '/admin',
    layoutTemplate:'ognoAdminLayout',
    template:'ognoAdminOverview',
    before: function(){
      if(!Meteor.userId()){
        this.render("entrySignIn");
        this.stop();
      }

      Session.set('current_page', 'Admin');
    }

  });
});


BasicController = RouteController.extend({


})