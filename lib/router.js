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
      $('.main-title').removeClass("animated fadeInUp ");
      $('footer').addClass("hide");
  }


}



////////////////
// After Hooks
////////////////


var AfterHooks = {

    animateContentIn: function() {
        $('.main-title').addClass("animated fadeInUp");
        $('footer').removeClass("hide");
    },

    stopNProgress: function() {
        NProgress.done();
    },

    removeSidebar: function() {
        if ($('.ui.sidebar').hasClass('active')){
          $('.ui.sidebar').sidebar('toggle');
        }
    }
}










Router.map(function () {

  this.route('home', {
    path:'/',
    controller: 'BasicController',
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
    onBeforeAction: BeforeHooks.isAdmin
  });


  this.route('admin', {
    path: '/admin',
    controller:'AdminController'

  });
});


// Router.before(BeforeHooks.animateContentOut);
// Router.before(BeforeHooks.startNProgress);
// Router.after(AfterHooks.animateContentIn);
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
  onBeforeAction: BeforeHooks.animateContentOut,
  onAfterAction: [AfterHooks.animateContentIn, AfterHooks.removeSidebar]
});


AdminController = RouteController.extend({
  layoutTemplate:'ognoAdminLayout',
  template:'ognoAdminOverview',
  waitOn: function() {
      return Meteor.subscribe('subscribers');
  },
  onBeforeAction: [BeforeHooks.isLoggedIn,BeforeHooks.isAdmin,BeforeHooks.startNProgress],
  onAfterAction: AfterHooks.stopNProgress
});

