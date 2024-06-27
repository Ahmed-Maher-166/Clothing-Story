// let user_name = document.querySelector("#exampleInputUesrName");
// let exampleInputEmail = document.querySelector("#exampleInputEmail");
// let exampleInputPassword= document.querySelector("#exampleInputPassword");


let labelusername = document.querySelector("#labelusername");
let labelpassword = document.querySelector("#labelpassword");
let labelemail= document.querySelector("#labelemail");


let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email= document.querySelector("#email");
let register_btn = document.querySelector("#submit")

let link = document.querySelector("#log_page")
register_btn.addEventListener ("click" , function (e){
    e.preventDefault()
    if (username.value==="" || email.value==="" || password.value ===""){
        alert("please fill data")
    } 
    else if (username.value.length <5 ||password.value.length <5) {
        alert("user_name must be more 5 length passwor 5 length ")
    }
    
    else {
        localStorage.setItem("username" , username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value); // 

        setTimeout ( () => {
            window.location = "login.html"
        } , 100)
    }
})

username.addEventListener("focus", function(e) {
    username.removeAttribute("placeholder") ;
    if(username.value.length==0)  labelusername.style.cssText = "opacity: 0.7 !important; transition: opacity 0.3s ease-out !important;";
    
 })
 password.addEventListener("focus", function(e) {
    password.removeAttribute("placeholder") ;
    if(password.value.length==0)
    labelpassword.style.cssText = "opacity: 0.7 !important; transition: opacity 0.3s ease-out !important;";

 })
 email.addEventListener("focus", function(e) {
    email.removeAttribute("placeholder") ;
    if(email.value.length==0)
      labelemail.style.cssText = "opacity: 0.7 !important; transition: opacity 0.3s ease-out !important; ";

 })

 link.addEventListener ("click" , function (e){
    e.preventDefault()
    setTimeout ( () => {
        window.location = "login.html";
    } , 100)
})


username.addEventListener("keypress", function(e) {
   
    labelusername.style.cssText = "opacity: 0 !important";
    
 })
 password.addEventListener("keypress", function(e) {
   
    labelpassword.style.cssText = "opacity: 0 !important";

 })
 email.addEventListener("keypress", function(e) {
  
    email.setAttribute("placeholder" ,"")

    labelemail.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";

 })
if (username.value.length >0 ||password.value.length >0  ||email.value.length >0 ) {
    labelusername.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";
    labelusername.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";
    labelusername.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";

}
username.addEventListener("change",()=>{
    username.setAttribute("placeholder" ,"")

    labelusername.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";
    

})
password.addEventListener("change",()=>{
    password.setAttribute("placeholder" ,"")

    labelpassword.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";
    

})
email.addEventListener("change",()=>{
    email.setAttribute("placeholder" ,"")

    labelemail.style.cssText = "opacity: 0 !important; transition: opacity 0.3s ease-out !important;";
    
})