Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');


    //===============================================================================
    //===============================================================================
    // USERS

    // crate our administrator
    sysadminId = Accounts.createUser({
      _id: 'sysadmin',
      username: 'admin',
      password: 'admin',
      role: 'admin',
      email: 'admin@admin.com',
      profile: {
        name: 'admin',
        avatar: 'logo.svg'
      }
    });
    console.info('Account created: ' + sysadminId);
  }

});