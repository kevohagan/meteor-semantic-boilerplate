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
      email: 'ajuliatorne@gmail.com',
      profile: {
        name: 'admin',
        avatar: '/img/Logo.jpg'
      }
    });
    console.info('Account created: ' + sysadminId);
  }

});