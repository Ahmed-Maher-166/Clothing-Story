// login   sign up + save data in local storage 
// products // add products to cart // add some products fav and delete
// add 1 or more products 
// user without login can see only the products 
///////////////////////////////////////////////////////////////////////////////////
// localStorage.setItem("student1" , "islam")

// console.log(localStorage.getItem("student1"))

// localStorage.setItem("student2" , "ahmed")
// console.log(localStorage.getItem("student2"))
// // localStorage.setItem("student3" , "mohamed")
// localStorage.removeItem("student2")

// localStorage.clear()
//////////////////////////////////////////////////////////////////////////////////
// let userInfo = document.querySelector ("#user_info")
// let userD = document.querySelector ("#user")
// let links = document.querySelector ("#links")

// if (localStorage.getItem("username")){
//     links.remove()
//     userInfo.style.display ="block"
//     userD.innerHTML = localStorage.getItem("username")
// }
let shop = document.querySelector(".shop")
shop.addEventListener("click",()=> window.location = "shop.html")