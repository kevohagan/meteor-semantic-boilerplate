Meteor.startup(function () {
    OgnoAdmin.structure({
        'menu-title'    : 'blog',  // Menu title (required)
        'icon'          : 'home',

    });


    OgnoAdmin.config({
        auto : true,
        prefix: 'admin',
        homeScreenTemplate  : 'adminTemplate',
    })
});