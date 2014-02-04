OgnoAdmin.config({
    filepicker : 'YOUR_FILEPICKER_KEY',
    isAllowed : function () {
        var user = Meteor.user();

        if (user) {
            return 'admin@admin.com' === user.emails[0].address;
        }
    }
});
