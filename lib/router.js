Router.configure({
  notFoundTemplate : '404',
  layoutTemplate: 'layout',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  },
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
  },

  initWow : function() {
  new WOW().init();
  },


}



////////////////
// After Hooks
////////////////


var AfterHooks = {

    animateContentIn: function() {
        $('.main-title').addClass("animated fadeInUp");
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



Router.before(BeforeHooks.startNProgress, {only: ['blog', 'blog/*']});
Router.after(AfterHooks.stopNProgress, {only: ['blog']});






Router.map(function () {

  this.route('blog', {
    controller: 'BasicController',
    path:'/blog',
    template:'indexblog'
  })

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

  this.route('indexblog',{
    path: '/blog',
    controller: 'BasicController'
  });

  this.route('team',{
    path: '/team'
  });

  this.route('test',{
    path: '/test',
    controller: 'BasicController',
    before: BeforeHooks.isAdmin
  });


  this.route('admin', {
    path: '/admin',
    controller:'AdminController'

  });
});





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
  before: [BeforeHooks.animateContentOut,BeforeHooks.startNProgress, BeforeHooks.initWow],
  after: [AfterHooks.animateContentIn, AfterHooks.removeSidebar, AfterHooks.stopNProgress],

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

