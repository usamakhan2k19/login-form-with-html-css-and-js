function validate(){
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    
    if(email == "admin" && password == "cyber")
    {
        alert("Signed in successfully");
        return false;
    }
    else
    {
        alert("Sign in failed")
    }
}