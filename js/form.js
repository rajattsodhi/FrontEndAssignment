/* Javascript that allows to capture the information inputted into the form fields and show to the user
*  using the dialog(polyfill). The form is actually not submitted as backend is not implemented in this 
*  website. This easily can be done using PHP
*/

//get the dialog from the dom and register it (using dialog-polyfill library)
var dialog = document.getElementById("dialog");
dialogPolyfill.registerDialog(dialog);

/* function that check if the form field are valid (ie they passed html5 validation),
*  and creates the content of the dialog retrieved from the form fields and finally 
*  displays the dialog
*/
function submit_form() {
  var name = document.getElementById("name").value;//get the name 
  var email = document.getElementById("email").value;//get the email
  var message = document.getElementById("message").value;//get the message
  if(document.getElementById("contact_form").checkValidity())//check if fields passed validation
  {
    var pName =document.getElementById("dialog-text-name");//get p element for name from the dialog
    var pEmail =document.getElementById("dialog-text-email");//get p element for email from the dialog
    var pMessage =document.getElementById("dialog-text-message");//get p element formessage from the dialog
    pName.innerHTML= " Name : " + name;//set the inner html of the dialog with name 
    pEmail.innerHTML= " Email : " + email;//set the inner html of the dialog with email
    pMessage.innerHTML= " Message : " + message;//set the inner html of the dialog with message
    dialog.show();//show the dialog
        
  }
}

/*add event listener to the submission of the form in order to avoid the form from being submitted
* as this make the page to jump at the top after the submission
*/
document.getElementById("contact_form").addEventListener('submit',function(event){
  event.preventDefault();
  event.stopPropagation();
});

//attach the submit_form defined function to the submit button
document.getElementById("btnsubmit").addEventListener("click",function(){
  submit_form();
});

//attach listener to the exit button of the dialog so the user can close the dialog when shown
document.getElementById("exit").addEventListener("click",function(){
  dialog.close(); 
});