let ProductsInCart = localStorage.getItem("ProductsInCart");
let allProductss = document.querySelector(".row");
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")

let price = document.querySelector("#total span");



let data ;
let length ;
if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    drawItems_first(item);
    data = item;
    length = item.length ;
}
let pr = length ||0  ;
price.innerHTML = `${pr*100}$` ;

function drawItems_first(item) {
    let y = item.map((ele) => {
        return `
          
          
                                        <div class="card mb-3 mx-3 col-5">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="${ele.imageUrl}" class="img-fluid rounded-start" alt="${ele.title}">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"> ${ele.title} </h5>
                                <h4 class="card-title"> price : 100$ </h4>
                                <h4 class="card-title"> Category: Sportswear</h4>
                                <button type="button" onclick = "add(${ele.id}) " class="btn plus btn-primary">+</button>
                                <span id= "card${ele.id}" >1</span>
                                <button type="button" onclick = "subtract(${ele.id})" class="btn minus btn-primary">-</button>
                                <i class="far fa-heart"></i>          
                                                  </div>
                            </div>
                        </div>
                        </div>
        `;

    });
    allProductss.innerHTML = y;
}

function add(id) {
    let addButton = document.querySelector(`#card${id}`);
    let count = parseInt(addButton.innerHTML) || 0;
     count++;
     pr++; 

    console.log(pr)
    addButton.innerHTML = `${count}`
    price.innerHTML = `${pr*100}$`
}

function subtract(id) {
    let addButton = document.querySelector(`#card${id}`);
    let count = parseInt(addButton.innerHTML) || 0;
if(count>0){
     count--;  
        pr-- ;
        addButton.innerHTML = `${count}`;
        price.innerHTML = `${pr*100}$`
}
        console.log(pr);

    
}

// console.log(data)
// console.log(pr)

