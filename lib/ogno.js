Meteor.startup(function () {
    OgnoAdmin.structure({
        'menu-title'    : 'Your Custom Menu',  // Menu title (required)
        'icon'          : 'home',

    });


    OgnoAdmin.config({
        auto : true,
        prefix: 'admin',
        homeScreenTemplate  : 'adminTemplate',
    })
});