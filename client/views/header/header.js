Template.header.rendered = function () {
  $('.ui.sidebar').sidebar({
    // overlay: true
  });
};

Template.header.events({
  'click .button': function () {
    $('.ui.sidebar').sidebar('toggle');
  }
});