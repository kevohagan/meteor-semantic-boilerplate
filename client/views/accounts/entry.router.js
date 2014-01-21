
Router.map(function() {
  this.route("entrySignIn", {
    path: "/sign-in",
    onBeforeRun: function() {
      Session.set('entryError', void 0);
      return Session.set('buttonText', 'in');
    }
  });
  this.route("entrySignUp", {
    path: "/sign-up",
    onBeforeRun: function() {
      Session.set('entryError', void 0);
      return Session.set('buttonText', 'up');
    }
  });
  this.route("entryForgotPassword", {
    path: "/forgot-password",
    onBeforeRun: function() {
      return Session.set('entryError', void 0);
    }
  });
  return this.route('entrySignOut', {
    path: '/sign-out',
    before: function() {
      if (AccountsEntry.settings.homeRoute) {
        Meteor.logout();
        Router.go(AccountsEntry.settings.homeRoute);
      }
      return this.stop();
    }
  });
});






