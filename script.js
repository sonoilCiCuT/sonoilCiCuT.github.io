var n;
function nav(d, event){
    if(window.scrollY==0) document.getElementsByTagName("nav")[0].classList.remove("nav-scroll");
    else document.getElementsByTagName("nav")[0].classList.add("nav-scroll");
}

function toggleChat(){
    var chat = document.getElementById("chat");
    if(chat.style.right=="0px"){
        chat.setAttribute("style", "right: calc(0px - 2 * var(--chat-right));");
        console.log("close");
    }
    else{
        chat.style.right = "0";
        console.log("open");
    }
    document.getElementById("user-input").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Toggle 'visible' based on whether the element is in view
        entry.target.classList.toggle("visible", entry.isIntersecting);
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed
  
    // Observe all target elements
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });
  });