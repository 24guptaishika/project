
function validate(){ 
     var formm=document.getElementById("formm");    
     var name1=formm.name.value;     
     var emailid=formm.email.value;     
     var phoneno=formm.phone.value;         
     if(name1==""|| name1.length>30||/[^a-zA-Z]/.test(name1){     
         alert("invalid name");     
              
        }     
        var atpos = emailid.indexOf("@");     
        var dotpos = emailid.lastIndexOf(".");     
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailid.length) {     
            alert("Not a valid e-mail address");     
                 
        }     
        if(phoneno.length!=10 || isNaN(phoneno)){     
            alert("Phone number is invalid");         
        }     
} 
 
 