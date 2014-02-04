

Template.home.rendered = function() {
}






Template.home.events({
  'click img': function (e, tmpl) {
    var that = $(e.target);
    that.transition('pulse');
  }

});