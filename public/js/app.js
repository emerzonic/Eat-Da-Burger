//listen for click event on the "devour it" button
$('.newburgerTable').on('click', '.devourBurger', function () {
    ($(this).attr('status', 1));
    var id = ($(this).attr('burgerId'));
    //send a PUT request with the burger id
    $.ajax("/index/" + id, {
        type: "PUT"
    }).then(
        function () {
            // Reload the page to update tables
            window.location.reload(true);
        });
});


//validate form data before submit
$(function validate() {
    $('.ui.form')
        .form({
            fields: {
                burger: {
                    identifier: 'burger',
                    rules: [{
                        type: 'empty',//field is not empty
                        prompt: 'Burger name can not be empty'
                    }, {
                        type: 'minLength[3]',//not less than 3 characters
                    }, {
                        type: 'maxLength[30]',//not more than 30 characters long
                    }]
                }
            }
        });
});