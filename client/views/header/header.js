Template.header.rendered = function () {
  $('.ui.sidebar').sidebar({
    // overlay: true
  });

  $('.ui.dropdown').dropdown();
};

Template.header.events({
  'click .button': function () {
    $('.ui.sidebar').sidebar('toggle');
  }
});