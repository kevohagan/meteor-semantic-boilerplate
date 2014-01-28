
window.onscroll = function() {
    $(".page-title").css({
      'opacity' : 1-(($(this).scrollTop())/300)
    });
}


$(document).ready(function(){

});




Template.layout.events({
  'click .page-title': function (e, tmpl) {

    var that = $(e.target);
    that.transition('pulse');
    console.log(that);
  }
});



Template.layout.rendered = function () {

};