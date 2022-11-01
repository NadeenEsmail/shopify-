//validation and regex//
function validate()
{
    var email = document.getElementById("mail").value;
    var regex= /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([com]{2,6})$/
    if(email.trim()==""){
        alert("Please enter a valid email id ")
    }
    else if((regex.test(email)))
    {
        alert("Email submitted successfully")
    }
    else 
    {
        alert("Wrong email id")
    }
}
/*firebase
$("#btn-update").click(function()
{
    var email =$("#mail").val();
    var database = firebase.database().ref().child("mails");
}*/