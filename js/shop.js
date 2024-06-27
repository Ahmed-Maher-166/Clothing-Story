

let allProductss = document.querySelector(".row");
let move_btn = document.querySelector(".move");
let badge = document.querySelector("#badge");
let search = document.querySelector("#search");
let length=0 ;
let products = [
    {
        id:1,
        title: " Mens Home Authentic Shirt 23/24 White",
        key : "Shirt white",
        imageUrl : "./images/RMCFMZ0127_01_7f8616a0-9006-4c4f-829a-c9ad552fa644_720x.webp",
       
    },
    {
        id:2,
        title: "Mens Home Authentic Shirt 23/24 black",
        key : "Shirt black",

        
        imageUrl : "./images/RMCFMZ0135-01_720x.webp",
    },
    {
        id:3,
        title: "Mens Home Authentic Shirt 23/24 blue",
        key : "Shirt blue",

        imageUrl : "./images/RMCFMZ0133-01_720x.webp",
      
    },
    {
        id:4,
        title: "Mens Home Authentic Shirt 23/24 white",
        key : "Shirt white",

        imageUrl : "./images/MicrosoftTeams-image_20_c48b05a7-48a9-4086-9dc6-997868c9aaa5_720x.webp"
    },


    {
        id:5,
        title: "Mens Home Authentic Shirt 23/24 green",
        key : "Shirt green",

        imageUrl : "./images/RMCFMZ0136_01_dbddfde9-f59a-4a17-8cab-1449bea3660d_720x.webp"
    },
    {
        id:6,
        title: "Mens Home Authentic short 23/24 white",
        key : "short green",

        imageUrl : "./images/RMCFYP0044-01_720x.webp"
    },
    {
        id:7,
        title: "Mens Home Authentic short 23/24 black",
        key : "short black",

        imageUrl : "./images/RMCFMP0156-01_720x.webp"
    },
    {
        id:8,
        title: "Mens Home Authentic short 23/24 blue",
        key : "short blue",

        imageUrl : "./images/RMCFMP0155-01_720x.webp"
    },
    {
        id:9,
        title: " Men's Windbreaker adidas 23/24",
        key : "Windbreaker blue",

        imageUrl : "./images/RMCFMJ0099-01_720x.webp"
    },
    {
        id:10,
        title: "Men's Windbreaker adidas 23/24",
        key : "Windbreaker black",

        
        imageUrl : "./images/RMCFMS0184_01_720x.webp"
    },
    {
        id:11,
        title: "Men's Jacket Navy Blue adidas 23/24 ",
        key : "Navy Blue",

        imageUrl : "./images/RMCFMJ0118-01_720x.webp"
    },
    {
        id:12,
        title: "Real Madrid Crest Detail Cap",
        key : "Cap",
        imageUrl : "./images/RMCFMH0081-1_720x.webp"
    },
]



function drawItems_first(ele) {
    let y = ele.map((item) => {
        return `
            <div class="card col-2 m-1" id="card${item.id}">
                <img class="card-img-top" src="${item.imageUrl}" draggable="false" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <h5 class="card-text">price:100$</h5>
                    <br>
                    <button class="btn btn-primary" id="addToCartBtn${item.id}" onClick="addToCart(${item.id});">Add to Cart</button>
                </div>
            </div>
        `;
    });
    allProductss.innerHTML = y;
}
drawItems_first(products) 

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];


  if(!(localStorage.getItem=("username"))){
       window.location ="login.html";
      }

// Function to add an item to the cart
function addToCart(id) {
    let choosenItem = products.find((item) => item.id === id);
    const addButton = document.getElementById(`addToCartBtn${id}`);

    // Check if the item is already in the cart
    const isItemInCart = addedItem.some((item) => item.id === id);

    if (isItemInCart) {
        removeFromCart(id);
    } else {
      
        addedItem = [...addedItem, choosenItem];
        localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
        addButton.innerHTML = "Remove from Cart";
        addButton.style.background = "red" ;
        move_btn.style = "display :block !important; width:50% !important ; margin:auto !important ; "
    badge.innerHTML = addedItem.length  
       
    
    }

}

function removeFromCart(id) {
    addedItem = addedItem.filter((item) => item.id !== id);
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
    const addButton = document.getElementById(`addToCartBtn${id}`);
    badge.innerHTML = addedItem.length  



    addButton.innerHTML = "Add to Cart";
        addButton.style.background = "blue" ;
if(addedItem.length==0)
move_btn.style = "display :none !important; width:50% !important ; margin:auto !important ; ";

}

addedItem.forEach(element => {
    const addButton = document.getElementById(`addToCartBtn${element.id}`);
    addButton.style.background = "red" ;
    addButton.innerHTML = "Remove from Cart";
    move_btn.style = "display :block !important; width:50% !important ; margin:auto !important ;  "
    badge.innerHTML = addedItem.length  

});
move_btn.addEventListener("click" , ()=>{
    setTimeout ( () => {
        window.location = "cart.html"
    } , 1500)
})
let users = []

search.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    let x = products.filter(ele => ele.key.slice(0, value.length).toLowerCase() === value);
    drawItems_first(x);
});
