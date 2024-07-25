let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};
window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// Reviews Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Use Live Server To Work The Form
// Email JS
const messg = document.getElementById("messg")



function validate() {

  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");
  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      messg.style.visibility = "visible";
      messg.textContent = 'Please fill all the fields.';
      setTimeout(() => {
        messg.textContent = '';
  
      }, 5000);
    } else {
      onSubmit(name.value, email.value, msg.value);
    }
  });
}
validate();
function onSubmit(name , email , message) {


 console.log(name , "name" , email , "email" , message , "message")


  const telegram_bot_id = '6627587122:AAFaRteE0bB7b9xL-mgPcJPniTCuY2PoXh8';
  const chat_id = 345492972;
  const telegramApiUrl = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;

  const messageContent = `This message is from:\nDawit's contact form \n Name: ${name} \n Email: ${email} \n Message: ${message}`;

  const formData = new FormData();
  formData.append('chat_id', chat_id);
  formData.append('text', messageContent);

  fetch(telegramApiUrl, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    })
    .then((data) => {
      console.log(data);
      messg.style.visibility = "visible";
      messg.textContent = 'Thanks! I will contact you shortly.';
    })
    .catch((error) => {
      console.error(error);
      messg.classList.add("active");
      messg.style.visibility = "visible";
      messg.textContent = 'Oops! An error occurred.';
    });
    let nameN = document.querySelector(".name");
    let emailN = document.querySelector(".email");
    let msg = document.querySelector(".message");
    
    setTimeout(() => {
      nameN.value = '';
      emailN.value = '';
      msg.value = '';
      messg.textContent = '';
  
    }, 5000);
 
}

function sendmail(name, email, msg) {
  // User Your Service id and template id here
  emailjs.send("service_id", "template_id", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No....",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
  });
}
// Header Background Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});
