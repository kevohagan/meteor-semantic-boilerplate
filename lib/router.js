Router.configure({
  notFoundTemplate : '404',
});


////////////////
// Before Hooks
////////////////

var BeforeHooks = {


  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      this.render("entrySignIn");
      this.stop();
    }
  },

  isAdmin: function() {
      if (!Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        this.render('no_rights');
        this.stop();
      }
  },

  baseSubscriptions: function() {
      // this.subscribe('userData').wait();
  },

  scrollUp: function() {
      $('body,html').scrollTop(0);
  },

  startNProgress: function() {
      if (_.isFunction(this.data)) {
        NProgress.start();
      }
  },

  pageview: function() {
      GAnalytics.pageview(this.path);
  },


  animateContentOut: function() {
      $('#content').removeClass("animated fadeInDown ");
      $('footer').addClass("hide");
  }


}



////////////////
// After Hooks
////////////////


var AfterHooks = {

    animateContentIn: function() {
        $('#content').addClass("animated fadeInDown");
        $('footer').removeClass("hide");
    },

    stopNProgress: function() {
        NProgress.done();
    },

    stellarTitle: function() {
           $('.page-title').attr('data-stellar-ratio', 1.3);
           $.stellar();
    }
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
    // controller: 'BasicController',
    before: BeforeHooks.isAdmin
  });


  this.route('admin', {
    path: '/admin',
    controller:'AdminController'

  });
});


Router.before(BeforeHooks.animateContentOut);
// Router.before(BeforeHooks.startNProgress);
Router.after(AfterHooks.animateContentIn);
// Router.after(AfterHooks.stopNProgress);


BasicController = RouteController.extend({
  layoutTemplate: 'layout',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  },
  // before: [BeforeHooks.animateContentOut,BeforeHooks.startNProgress],
  // after: AfterHooks.animateContentIn
});


AdminController = RouteController.extend({
  layoutTemplate:'ognoAdminLayout',
  template:'ognoAdminOverview',
  waitOn: function() {
      return Meteor.subscribe('subscribers');
  },
  before: [BeforeHooks.isLoggedIn,BeforeHooks.isAdmin,BeforeHooks.startNProgress],
  after: AfterHooks.stopNProgress
});

