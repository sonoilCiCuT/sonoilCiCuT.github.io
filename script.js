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