OgnoAdmin.config({
    auto : true,
    filepicker : 'YOUR_FILEPICKER_KEY',
    prefix: 'admin',
   // homeScreenTemplate  : 'admin',
    isAllowed : function () {
        var user = Meteor.user();

        if (user) {
            return 'admin@admin.com' === user.emails[0].address;
        }
    }
});
