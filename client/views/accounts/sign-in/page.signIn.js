
Template.entrySignIn.helpers({
  emailInputType: function() {
    if (Accounts.ui._options.passwordSignupFields === 'EMAIL_ONLY') {
      return 'email';
    } else {
      return 'string';
    }
  },
  emailPlaceholder: function() {
    fields = Accounts.ui._options.passwordSignupFields;
    if (_.contains(['USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL'], fields)) {
      return 'Username or email';
    }
    return 'Email';
  },
  logo: function() {
    return AccountsEntry.settings.logo;
  }
});

Template.entrySignIn.events({
  'submit #signIn': function(event) {
    event.preventDefault();
    Session.set('email', $('input[name="email"]').val());
    Session.set('password', $('input[name="password"]').val());

    return Meteor.loginWithPassword(Session.get('email'), Session.get('password'), function(error) {
      if(error){
        if(error.reason == "User not found"){
          Session.set('error_color', true);
          return Session.set('entryError', 'User not found.  Click here to register a new user.');
        }else{
          return Session.set('entryError', error.reason);
        }
      }else{
        return Router.go(AccountsEntry.settings.dashboardRoute);
      }
    });
  },
  'click .sign-up-btn':function(){
    //alert('foo');
    Session.set('entryError', null);
    Router.go('/sign-up');
  }
});

Session.setDefault('error_color', false);
Template.entrySignIn.errorColor = function(){
  return Session.get('error_color');
};





