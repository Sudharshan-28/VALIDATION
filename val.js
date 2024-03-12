function ValidateForm(event){
  event.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var pass = document.getElementById('pass').value;
  var letters = /^[0-9]+$/;

  if(letters.test(name)){
      alert("Please enter Your Name");
      return false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
      alert("Please enter a Valid Email Address");
      return false;
  }
 
  if(!letters.test(phone)){
      alert("Please enter a Valid phone number");
      return false;
  }
  if(phone.length<10||phone.length>10){
    alert("THE PHONE NUMBER SHOULD BE TEN DIGITS")
  }
  if(pass.length<6){
      alert("Password must be at least 6 Characters long");
      return false;
  }
  alert("Form Submitted Successfully");
}