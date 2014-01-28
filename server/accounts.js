
Meteor.startup(function() {
  var AccountsEntry;
  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset-password/' + token);
  };
  AccountsEntry = {
    settings: {},
    config: function(appConfig) {
      return this.settings = _.extend(this.settings, appConfig);
    }
  };
  this.AccountsEntry = AccountsEntry;
  return Meteor.methods({
    entryValidateSignupCode: function(signupCode) {
      return signupCode === AccountsEntry.settings.signupCode;
    },
    accountsCreateUser: function(username, email, password) {
      if (username) {
        return Accounts.createUser({
          username: username,
          email: email,
          password: password,
          profile: AccountsEntry.settings.defaultProfile || {}
        });
      } else {
        return Accounts.createUser({
          email: email,
          password: password,
          profile: AccountsEntry.settings.defaultProfile || {}
        });
      }
    }
  });
});