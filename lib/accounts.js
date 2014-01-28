AccountsEntry = {
  settings: {
    wrapLinks: true,
    homeRoute: 'home',
  },
  config: function(appConfig) {
    return this.settings = _.extend(this.settings, appConfig);
  }
};

this.AccountsEntry = AccountsEntry;



Meteor.startup(function() {


  return AccountsEntry.config({
    // logo: '/logo.svg',
    privacyUrl: '/privacy-policy',
    wrapLinks:true,
    termsUrl: '/terms-of-use',
    // forbidClientAccountCreation : true,
    homeRoute: '/',
    dashboardRoute: '/admin',
    profileRoute: 'profile',
    // showSignupCode: true
  });
});