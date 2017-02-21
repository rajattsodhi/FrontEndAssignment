var dialog = document.getElementById("dialog");
            dialogPolyfill.registerDialog(dialog);

// Submit form
function submit_form() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;
    if(document.getElementById("contact_form").checkValidity())
    {
        var pName =document.getElementById("dialog-text-name");
        var pEmail =document.getElementById("dialog-text-email");
        var pMessage =document.getElementById("dialog-text-message");
        pName.innerHTML= " Name : " + name; 
        pEmail.innerHTML= " Email : " + email;
        pMessage.innerHTML= " Message : " + message;
        dialog.show();
        
    
    }
}
document.getElementById("contact_form").addEventListener('submit',function(event){
    event.preventDefault();
    event.stopPropagation();
});

document.getElementById("btnsubmit").addEventListener("click",function(){
    submit_form();
});

document.getElementById("exit").addEventListener("click",function(){
   dialog.close(); 
});