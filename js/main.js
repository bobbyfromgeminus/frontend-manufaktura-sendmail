'use strict';

const sendButton = $('#send');

sendButton.click( () => {    

    let name = $('#name').val();
    let email = $('#email').val();
    let subject = $('#subject').val();
    let message = $('#message').val();

    $.ajax({
            url: 'sendmail.php', 
            method: 'POST',
            data: { name: name, email: email, subject: subject, message: message },
            dataType: 'html',
        }).done( function(data) {
            document.querySelector('.result').textContent = data;
        });
});