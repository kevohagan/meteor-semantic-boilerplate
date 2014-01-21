Meteor.startup(function () {
        OgnoAdmin.config({
            auto : true,
            isAllowed : function () {
                var user = Meteor.user();

                if (user) {
                    return 'admin' === user.username;
                }
            }
        });
});


Meteor.subscribe('fotos');