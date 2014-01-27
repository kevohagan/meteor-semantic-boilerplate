
window.onscroll = function() {
    document.body.style.webkitPerspectiveOrigin = window.scrollX + "px " + window.scrollY + "px";
    $(".page-title").css({
      'opacity' : 1-(($(this).scrollTop())/300)
    });
}


$(document).ready(function(){
  $.stellar();
});




Template.layout.events({
  'click .page-title': function (e, tmpl) {

    var that = $(e.target);
    that.transition('pulse');
    console.log(that);
  }
});