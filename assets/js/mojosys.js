function sendMessage()
{
    document.getElementById("confirmation").innerHTML = "Sending email..";
    var from_name = document.getElementById("name").value;
    var from_email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var email_template = "mojosys_email_template";
    var email_service_id = "zoho";
    var user_id = "user_cIqfxVYy4geTxHbHmGh4n";

    emailjs.init(user_id);

    emailjs.send(email_service_id, email_template,{"from_email": from_email, "message_html": message, "from_name" : from_name})
    .then(function(response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        document.getElementById("confirmation").innerHTML = "Thank you " + from_name + ", for writing to us. We will get back to you in no time!"; 
       
}, function(err) {
         document.getElementById("confirmation").innerHTML = from_name + ", Something wrent wrong at our side. Please drop an email to "
        + " <a href='mailto:contact@mojosys.com?subject=Message to Mojosys'>contact@mojosys.com</a>";
});
    return false;
}


function onbodyLoad() {
    document.getElementById("confirmation").innerHTML = "";
}