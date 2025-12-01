const menubtn=document.getElementById("menubtn");
const mobilemenu=document.getElementById("mobilemenu");

menubtn.addEventListener("click", ()=>{
      mobilemenu.classList.toggle("hidden")
});



const contactForm = document.getElementById("contactform");

contactform.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  // Show SweetAlert2 popup
  Swal.fire({
    icon: 'success',
    title: 'Message Sent!',
    text: '✅ Your message has been sent successfully!',
    confirmButtonColor: '#ec4899', // pink to match your theme
    timer: 2500,
    timerProgressBar: true
  });

  contactform.reset(); // reset form fields
});