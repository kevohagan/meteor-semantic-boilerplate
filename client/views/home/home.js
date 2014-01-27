

Template.home.rendered = function() {
  $('.page-title').attr('data-stellar-ratio', -1.5);
    $.stellar();
}






Template.home.events({
  'click img': function (e, tmpl) {
    var that = $(e.target);
    that.transition('pulse');
  }

});