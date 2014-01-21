



Handlebars.registerHelper('capitalize', function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

Handlebars.registerHelper('signupClass', function() {
  if (Accounts.oauth && Accounts.oauth.serviceNames().length > 0) {
    return "collapse";
  }
});

Handlebars.registerHelper('otherLoginServices', function() {
  return Accounts.oauth && Accounts.oauth.serviceNames().length > 0;
});

Handlebars.registerHelper('loginServices', function() {
  return Accounts.oauth.serviceNames();
});
