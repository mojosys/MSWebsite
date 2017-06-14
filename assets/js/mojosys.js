function sendMessage()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    //SEND THIS INFORMATION TO AN API
    //alert(name + "-" + email);
    //alert(message);
    document.getElementById("confirmation").innerHTML = "Thank you " + name + ", for writing to us. We will get back to you in no time!"; 
    return false;
}