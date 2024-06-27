let username = document.querySelector("#email");
let password = document.querySelector("#password");

let loginBtn = document.querySelector("#submit");

let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");
let link = document.querySelector("#reg_page");
let labelusername = document.querySelector("#labelemail");
let labelpassword = document.querySelector("#labelpassword");
loginBtn.addEventListener ("click" , function(e){
    e.preventDefault()
    if (username.value==="" || password.value===""){
        alert("please fill data ")
    } 
    else if (username.value !== getEmail|| password.value !== getPassword){
        alert("wrong password or Email ")
    }
    
    else {
        if ( (getEmail === username.value.trim() &&     getPassword === password.value.trim() )  )
        {
            setTimeout ( () => {
                window.location = "index.html"
            } , 100)
        } else {
            console.log("Email or password is wrong ")
        }
    }
})

 password.addEventListener("focus", function(e) {
    password.removeAttribute("placeholder") ;
    if(password.value.length==0)
    labelpassword.style.cssText = "opacity: 0.7 !important; transition: opacity 0.3s ease-out !important;";

 })
 username.addEventListener("focus", function(e) {
    username.removeAttribute("placeholder") ;
    if(username.value.length==0)
      labelemail.style.cssText = "opacity: 0.7 !important; transition: opacity 0.3s ease-out !important; ";

 })

 link.addEventListener ("click" , function (e){
    e.preventDefault()
    setTimeout ( () => {
        window.location = "register.html";
    } , 100)
})



 password.addEventListener("keypress", function(e) {
   
    labelpassword.style.cssText = "opacity: 0 !important";

 })
 username.addEventListener("keypress", function(e) {
  

    labelemail.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";

 })
 username.addEventListener("change",()=>{
    username.setAttribute("placeholder" ,"")

    labelusername.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";
    

})
password.addEventListener("change",()=>{
    password.setAttribute("placeholder" ,"")

    labelpassword.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";
    

})

