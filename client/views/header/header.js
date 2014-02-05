Template.header.rendered = function () {
  $('.ui.sidebar').sidebar({
    overlay: true,
    duration: '2000'
  });

  $('.ui.dropdown').dropdown();
};

Template.header.events({
  'click #btn': function () {
    $('.ui.sidebar').sidebar('toggle');
  },
  'click .ui.sidebar .header': function(e) {
    e.preventDefault();
    $('.ui.sidebar').sidebar('toggle');
  }
});