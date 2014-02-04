Template.test.rendered = function () {
    $('.CoverImage').attr('data-stellar-ratio', 0.5);
    $('.ui.sidebar').sidebar({
      overlay: true
    });
};

Template.test.events({
  'click #btn': function () {
    $('.ui.sidebar').sidebar('toggle');
    console.log('clicke');
  }
});