var typed = new Typed('#title', {
  strings: ['bitMasters'],
  typeSpeed: 200,
  backspeed: 100,
  loop: true
});

var a1 = document.getElementById('v-git')
a1.addEventListener('click',function(){
  const redirectURL='https://github.com/Vaishz';
  window.open(redirectURL,'_blank');
})

// var b1 = document.getElementById('v-mail')
// b1.addEventListener('click',function mailTo(){
  
// window.location.href = "mailto:poti.vaishnavi21@gmail.com";

 
// })
var b1 = document.getElementById('v-mail')
b1.addEventListener('click',function sendEmail() {
  // Define email parameters
  const recipient = "shweta.sidhwani@gmail.com";
  // const subject = "Subject of the email";
  // const body = "Body of the email";

  // Create a mailto URL
  const mailtoURL = `mailto:${recipient}`;

  // Open the user's default email client
  window.location.href = mailtoURL;
})

// Call the function when a button or icon is clicked
document.getElementById("emailButton").addEventListener("click", sendEmail);

var c1 = document.getElementById('v-link')
c1.addEventListener('click',function(){
  const redirectURL='https://www.linkedin.com/in/vaishnavi-v-poti-9b33a225a/';
  window.open(redirectURL,'_blank');
})




var a2 = document.getElementById('a-git')
a2.addEventListener('click',function(){
  const redirectURL='https://github.com/AshmitSrivastava';
  window.open(redirectURL,'_blank');
})

var b2 = document.getElementById('a-mail')
b2.addEventListener('click',function(){
  function mailTo()
{
window.location.href = "mailto:ashmitsrivastava1607@gmail.com";
}
 
})

var c2 = document.getElementById('a-link')
c2.addEventListener('click',function(){
  const redirectURL='https://www.linkedin.com/in/ashmit-srivastava-4443ba21a';
  window.open(redirectURL,'_blank');
})




var a3 = document.getElementById('d-git')
a3.addEventListener('click',function(){
  const redirectURL='https://github.com/Dhruvt0310';
  window.open(redirectURL,'_blank');
})

var b3 = document.getElementById('d-mail')
b3.addEventListener('click',function(){
  function mailTo()
{
window.location.href = "mailto:: taterdhruv0310@gmail.com";
}
 
})

var c4 = document.getElementById('d-link')
c4.addEventListener('click',function(){
  const redirectURL='';
  window.open(redirectURL,'_blank');
})




var a4 = document.getElementById('s-git')
a4.addEventListener('click',function(){
  const redirectURL='https://github.com/shwetasidhwani';
  window.open(redirectURL,'_blank');
})

var b4 = document.getElementById('s-mail')
b4.addEventListener('click',function(){
  function mailTo()
{
window.location.href = "mailto:shweta.sidhwani@gmail.com";
}
 
})

var c1 = document.getElementById('s-link')
c1.addEventListener('click',function(){
  const redirectURL='https://www.linkedin.com/in/shweta-sidhwani-b66153287/';
  window.open(redirectURL,'_blank');
})

