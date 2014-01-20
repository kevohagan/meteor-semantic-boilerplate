Router.configure({
  layoutTemplate : 'layout',
  notFoundTemplate : '404',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});



Router.map(function () {

  this.route('home', {
    path:'/'
  });

  this.route('contact',{
    path: '/contact'
  });

  this.route('portfolio',{
    path: '/portfolio'
  });

  this.route('team',{
    path: '/team'
  });

  this.route('test',{
    path: '/test'
  });
});