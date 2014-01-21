Handlebars.registerHelper("accountButtons", function() {
  return new Handlebars.SafeString(Template.entryAccountButtons());
});

Template.entryAccountButtons.helpers({
  profileUrl: function() {
    if (!AccountsEntry.settings.profileRoute) {
      return false;
    }
    return Router.path(AccountsEntry.settings.profileRoute);
  },
  wrapLinks: function() {
    return AccountsEntry.settings.wrapLinks;
  }
});
