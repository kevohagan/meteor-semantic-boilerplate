Meteor.subscribe('fotos');
Meteor.subscribe('cars');
Meteor.subscribe('users');
Meteor.subscribe('subscribers');




window.onscroll = function() {
    $(".page-title").css({
      'opacity' : 1-(($(this).scrollTop())/300)
    });
}




Template.layout.events({
  'click .page-title': function (e, tmpl) {

    var that = $(e.target);
    that.transition('pulse');
    console.log(that);
  }
});

