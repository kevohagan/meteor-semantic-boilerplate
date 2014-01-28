

Template.home.rendered = function() {
         $('.page-title').attr('data-stellar-ratio', 1.3);
         $.stellar();
}






Template.home.events({
  'click img': function (e, tmpl) {
    var that = $(e.target);
    that.transition('pulse');
  }

});