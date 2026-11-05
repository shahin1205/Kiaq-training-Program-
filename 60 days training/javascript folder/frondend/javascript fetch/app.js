
const itemForm=document.querySelector("#itemForm");
const itemName=document.querySelector("#itemName");
const itemPrice=document.querySelector("#itemPrice");
const description=document.querySelector("#description");
const textMasseg=document.querySelector("#textMasseg");
const productList=document.querySelector("#product-list");
const itemImg=document.querySelector("#itemImg");


const search = document.querySelector("#search");
const searchInput=document.querySelector("#searchInput");


let products=[];

fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(json => {products=json;
    addProduct(products);
})

search.addEventListener("submit",function(event){
    event.preventDefault();

    const searchItem=searchInput.value.toLowerCase().trim();
    if(searchItem===""){
        addProduct(products);
    }else{
        const filterProduct=products.filter(function(product){
            return product.name.toLowerCase().includes(searchItem);
        });
        addProduct(filterProduct);
    }

})

searchInput.addEventListener("input" , function(){
    if(searchInput.value.trim()===""){
        addProduct(products);
    }
})

// let jsonvalue=[];




function addProduct(listOFProduct){
    productList.textContent="";

    for(const product of listOFProduct){
        const item=document.createElement("li");
        item.className="h-70  p-3 border border-gray-300 shadow-2xl overflow-hidden backdrop-blur-lg";
        item.dataset.itemId=String(product.id)
    
        const imgItem=document.createElement("img");
        imgItem.src=product.img;
        imgItem.className="h-1/2 mx-auto";


        const nameItem=document.createElement("h2");
        nameItem.className="text-lg font-bold";
        nameItem.textContent=product.name;

        const priceItem=document.createElement("h3");
        priceItem.className="text-lg font-bold";
        priceItem.textContent="Rs. "+product.price;

        const cart=document.createElement("button");
        cart.className="bg-red-500 border rounded-3xl px-1";
        cart.id="cart-id";
        cart.textContent="Add cart";
        cart.type="button"

        const desItem=document.createElement("p");
        desItem.textContent=product.description;

        item.append(imgItem,  nameItem, priceItem ,cart,desItem);
        productList.append(item);


    }

}

itemForm.addEventListener("submit" , (event)=>{
    event.preventDefault();

    console.log("clicked")
    const name=itemName.value.trim();
    const price=itemPrice.value.trim();
    const des=description.value.trim();
    const img=itemImg.value.trim();

    if(name ==="" ){
        textMasseg.textContent="please fill the form";
        return
    }
    
    fetch("http://localhost:3000/products", {
  method: 'POST',
  body: JSON.stringify({
    // id:productId,
        name:name,
        price:price,
        description:des,
        img:img
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json => products=json)


    productId +=1;

    itemName.value="";
    itemPrice.value="";
    description.value="";
    textMasseg.textContent="product add succssfuly";

    addProduct();
    console.log(products);
});




addTocart();


productList.addEventListener("click", (event)=>{
    event.preventDefault();
    const addButten=event.target.closest("#cart-id");
    if(!addButten){
        return
    };

    const cartItem=addButten.closest("[data-item-id]");
    const cartId=String(cartItem.dataset.itemId); 
    let selected=[];
    
    fetch("http://localhost:3000/cartItems")
      .then(response => response.json())
      .then(cartData => {let existItem=cartData.find(product=>String(product.productId)===cartId);

        if(existItem){
            
            fetch(`http://localhost:3000/cartItems/${existItem.id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    quantity: existItem.quantity + 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json))

            console.log("product already exist"+ existItem.id);
            return;
        }
    

        

    const filteredItem=products.find(product=>String(product.id)===cartId);
        let quantity=1;
    fetch("http://localhost:3000/cartItems", {
  method: 'POST',
  body: JSON.stringify({
        productId:filteredItem.id,
        name:filteredItem.name,
        price:filteredItem.price,
        description:filteredItem.description,
        img:filteredItem.img,
        quantity:quantity
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json =>{selected=json
     
    
    
    
        // const selected=Array.from(mapitem.values());

        const total=selected.reduce((acc,curr)=>{

        return acc+(Number(curr.price)*curr.quantity);
    },0);
    console.log("total - "+ total);
    addTocart();
});

})

    
} )

const cartTable=document.getElementById("cart-table")
function addTocart(){



    // let cartValue=[];
fetch("http://localhost:3000/cartItems")
  .then(response => response.json())
  .then(json => {let cartValue=json;


    cartTable.innerHTML=`
    <tr id="tableList">
    <th>Item name</th>
    <th>price</th>
    <th>quantati</th>
    <th> Delete</th>
  </tr> 
    `
    for(const mapItems of cartValue){
        const tr=document.createElement("tr");
        tr.id="trId";
        tr.dataset.cartItem=String(mapItems.id)

        const mapItemName=document.createElement("td")
        mapItemName.textContent=mapItems.name;
        mapItemName.className="text-center";

        const mapPrice=document.createElement("td");
        mapPrice.textContent=mapItems.price;
        mapPrice.className="text-center";

        const mapQuantity=document.createElement("td");
        mapQuantity.textContent=mapItems.quantity;
        mapQuantity.className="text-center";

        const mapButton=document.createElement("button");
        mapButton.type="button";
        mapButton.textContent="Delete";
        mapButton.className="bg-red-500 px-3 ";
        mapButton.id="deleteId"

        tr.append(mapItemName, mapPrice, mapQuantity,mapButton);
        cartTable.append(tr);


    }
})
}

const tableList=document.getElementById("tableList");
document.addEventListener("click", (event)=>{
    

    const deleteItem = event.target.closest("#deleteId");
    if(!deleteItem){
        return
    };

    const deletedItem=deleteItem.closest("[data-cart-item]");
    const cartId=deletedItem.dataset.cartItem;

    

    fetch(`http://localhost:3000/cartItems/${cartId}`, {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(json => console.log(json))

})



const addBbutton=document.getElementById("button");
const myform=document.querySelector("#myform")
addBbutton.addEventListener("click", function(){
    if(myform.style.display=="none"){
        myform.style.display="block";
    }else{
        myform.style.display="none";
    }
})
