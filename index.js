function resetFields (){

    document.getElementById('Registration-form').reset()
 
    document.getElementById('First-name').value = ''
    document.getElementById('Last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('tnc').checked = false
   
     
    document.getElementById('First-name-valid').style.display= 'none'
    document.getElementById('Last-name-valid').style.display = 'none'
    document.getElementById('email-valid').style.displaye = 'none'
    document.getElementById('tnc-valid').style.display = 'none'
    
 }
    function validate(){
    let firstName = document.getElementById('First-name').value
    let lastName =document.getElementById('Last-name').value
    let email =document.getElementById('email').value
    let tnc =document.getElementById('tnc').checked
    let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value
    let error = false
 
    if(firstName.length >=2){
    document.getElementById('First-name-valid').style.display ='block'
    document.getElementById('First-name-invalid').style.display ='none'
    
    }
    else{
       error = true
     document.getElementById('First-name-invalid').style.display ='block'
     document.getElementById('First-name-valid').style.display ='none'
    }
    if(lastName.length >=2){
       document.getElementById('last-name-valid').style.display ='block'
       document.getElementById('last-name-invalid').style.display ='none'
       }
       else{
          error = true
        document.getElementById('last-name-invalid').style.display ='block'
        document.getElementById('last-name-valid').style.display ='none'
       }

 
 if(email.includes('@') && email.includes(".") && email.indexOf("@")>0 && email.substr(email.lastIndexOf('.')+1).length>=2){
    document.getElementById('email-valid').style.display ='block'
    document.getElementById('email-invalid').style.display ='none'
    }
    else{
       error = true
     document.getElementById('email-invalid').style.display ='block'
     document.getElementById('email-valid').style.display ='none'
    }
    if(password !== confirmPassword) {
		document.getElementById('confirm-password-invalid').style.display = 'block'
		error = true
	} else {
		document.getElementById('confirm-password-invalid').style.display = 'none'
	}

    if(tnc){
        document.getElementById("tnc-invalid").style.display ="none"
     
       }else{
        error = true
        document.getElementById("tnc-invalid").style.display ="block"
       }
    if(error === false){
        alert('your details have been saved successfully!')
          resetFields()
     
     let error = true
  
     }
}
