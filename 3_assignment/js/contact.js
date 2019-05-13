$(window).scroll(function(){ 
	$('nav').toggleClass('bg-change', $(this).scrollTop() > 50);
});

$(document).ready(function () {

    //submit send message function
    $("#send-msg").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        //checking name contents
        if (name.length == 0) {
            $("#error-name").css("display", "block");
        } else {
            $("#error-name").css("display", "none");
        }

        //checking email contents
        if (email.length == 0) {
            $("#error-email").css("display", "block");
        } else {
            //Regex pattern for checking the email
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var res = re.test(email);
            if (res == true) {
                $("#error-email").css("display", "none");
            } else {
                //Set it to visible and change the text for invalid email.
                $("#error-email").css("display", "block");
                $("#error-email").text("This is invalid email");
            }
        }

        //Checking message contents
        if (message.length == 0) {
            $("#error-msg").css("display", "block");
        } else {
            $("#error-msg").css("display", "none");
        }
    });
});