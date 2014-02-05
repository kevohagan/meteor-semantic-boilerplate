Template.contact.events({

  'submit form' : function(event, template) {
    event.preventDefault();
    sendingMessage = $('#contact-form button').data('sending-message');
    okMessage = $('#contact-form button').data('ok-message');
    name = template.find("#contact-name").value;
    email = template.find("#contact-email").value;
    message = template.find("#contact-message").value;


    if ($('#contact-form').parsley( 'isValid' )) {

        Meteor.call('sendEmail',
                    'email@email.com',
                     email,
                    'New Email from '+ name + ' from the Semantic Boilerplate!!',
                     message);

        var button = $('#contact-form button');

            button.html('<i class="fa fa-spinner fa-spin"></i>'+sendingMessage);

            setTimeout(function(){
              button.html('<i class="fa fa-check"></i>'+okMessage);
              button.css({'background-color':'green'});
              document.getElementById('contact-form').reset();
            },1000);
    }



}

});