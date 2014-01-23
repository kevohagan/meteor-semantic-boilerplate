
Router.map(function() {
  this.route("entrySignIn", {
    path: "/sign-in",
    before: function() {
      Session.set('entryError', void 0);
      return Session.set('buttonText', 'in');
    }
  });
  this.route("entrySignUp", {
    path: "/sign-up",
    before: function() {
      Session.set('entryError', void 0);
      return Session.set('buttonText', 'up');
    }
  });
  this.route("entryForgotPassword", {
    path: "/forgot-password",
    before: function() {
      return Session.set('entryError', void 0);
    }
  });
  this.route('entrySignOut', {
    path: '/sign-out',
    before: function() {
      Session.set('entryError', void 0);
      if (AccountsEntry.settings.homeRoute) {
        Meteor.logout();
        Router.go(AccountsEntry.settings.homeRoute);
      }
      return this.stop();
    }
  });
  return this.route('entryResetPassword', {
    path: 'reset-password/:resetToken',
    before: function() {
      Session.set('entryError', void 0);
      return Session.set('resetToken', this.params.resetToken);
    }
  });
})





