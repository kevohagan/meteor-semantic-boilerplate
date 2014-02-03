Template.subscriber.events({
        'submit form': function (e) {
                e.preventDefault();
                console.log('clicked');
                var target = e.target;
                var email = $(target).find('input').val(); // fetch the input value
                Meteor.call('insertSubscriber', email, function(err, id){
                        if(err){
                                Session.set('subscribeStatus', {
                                        message: err.reason,
                                        class: 'red'
                                })
                                console.log(err)
                        }else{
                                console.log('successfully inserted subscriber: '+id);
                                $(target).find('input').val("");
                                Session.set('subscribeStatus', {
                                        message: 'Thanks for subscribing! :) ',
                                        class: 'green'
                                })
                        }
                })
        }
});

Template.subscriber.helpers({
        status: function () {
                // ...
                return Session.get('subscribeStatus');
        },
        message: function(){
                return Session.get('subscribeStatus').message;
        },
        class: function(){
                return Session.get('subscribeStatus').class;
        }
});