Template.test.rendered = function () {
    $('.CoverImage').attr('data-stellar-ratio', 0.5);
    $('.ui.sidebar').sidebar({
      overlay: true
    });
};

Template.test.events({
  'click #btn': function () {
    $('.ui.sidebar').sidebar('toggle');
  },
  'click .ui.sidebar .header': function(e) {
    e.preventDefault();
    $('.ui.sidebar').sidebar('toggle');
  }
});