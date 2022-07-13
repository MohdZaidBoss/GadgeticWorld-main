$(document).ready (function () {  
     $('#submitButton').click(function (e) {  
        e.preventDefault(); 
        $('#errorMesg').show();
        let email = $('#email').val();
        let phoneNum = $('#phoneNum').val();
        let userRegPassword = $('#userRegPassword').val();
        let C_userPassword = $('#C_userPassword').val();
        let errorMesg = $('#errorMesg').val();
        let successMesg = $('#successMesg').val();
       
 
      //   for registration
 
        if(email == '')
        {
             alert("Please enter Email ID");
             return email;
        }
 
        if(phoneNum.length != 10)
        {
             alert("Please enter a valid phone number");
             return phoneNum;
        }
 
        if (userRegPassword.length < 8 )
        {
             alert("Password Must Be at least 8 characters long");
             return userRegPassword;
        }
 
        if (C_userPassword != userRegPassword )
        {
             alert("Password Should Match");
             return C_userPassword;
        }
        
        if(email == '' && phoneNum == '' && userRegPassword == '' && C_userPassword == '')
         {   
           $('#errorMesg').show();
           $('#successMesg').hide();             
         }
         else 
         {
             $('#successMesg').show();
             $('#errorMesg').hide();
                if(confirm("You will be redirecting to Home page."))
                     window.location.replace("./index.html");
                else
                     window.location.replace("./login.html");;
           
         }

    }); 
    //  ----------------for logging-----------------

    $('#loginSumbit').click(function (e) {  
     e.preventDefault();

     let userEmail = $('#emailID').val();
     let userPassword = $('#userPassword').val();

     if(userEmail == 'admin@gmail.com' && userPassword == 'project')
     {
          if(confirm("You will be redirecting to Admin Page. If You Dont Want to, Click Cancel."))
          {
               window.location.replace("./admin.html");
               alert("You logged into Administrator");
          }
          else
               return false;
     }
     else
     {
          alert("invalid UserName Or Password");
          return;
     }
     
});
});