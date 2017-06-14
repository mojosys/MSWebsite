function sendMessage()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    //SEND THIS INFORMATION TO AN API
    //alert(name + "-" + email);
    //alert(message);
    alert("sending your message to our servers..");
    return false;
}