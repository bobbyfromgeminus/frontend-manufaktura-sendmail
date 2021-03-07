'use strict';

const sendButton = $('#send');          // natív javascriptben: const sendButton = document.querySelector('#send');

sendButton.click( () => {               // natív javascriptben: sendButton.addeventListener('click', ()=>{...});

    let name = $('#name').val();        // natív javascriptben: let name = document.querySelector('#name').value;
    let email = $('#email').val();      // natív javascriptben: let email = document.querySelector('#email').value;
    let subject = $('#subject').val();  // natív javascriptben: let subject = document.querySelector('#subject').value;
    let message = $('#message').val();  // natív javascriptben: let message = document.querySelector('#message').innerHTML;

    $.ajax({                            // ajax kérés jQuery módra
            url: 'sendmail.php', 
            method: 'POST',
            data: { name: name, email: email, subject: subject, message: message },
            dataType: 'html',
        }).done( function(data) {
            $('.result').html(data);    // natív javascriptben: document.querySelector('.result').innerHTML = data;
        });
});
