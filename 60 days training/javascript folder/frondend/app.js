

const itemForm=document.querySelector("#itemForm");
const itemName=document.querySelector("#itemName");
const itemPrice=document.querySelector("#itemPrice");
const description=document.querySelector("#description");
const textMasseg=document.querySelector("#textMasseg");
const productList=document.querySelector("#product-list");
const itemImg=document.querySelector("#itemImg");


const search = document.querySelector("#search");
const searchInput=document.querySelector("#searchInput");

let productId=0;
const products=[];

search.addEventListener("submit",function(event){
    event.preventDefault();

    const searchItem=searchInput.value.toLowerCase().trim();
    if(searchItem===""){
        addProduct(jsonvalue);
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

let jsonvalue=[];
fetch('./product.json')
  .then(response => response.json())
  .then(json => {jsonvalue=json;
    addProduct(jsonvalue)});



function addProduct(listOFProduct=products){
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

        const desItem=document.createElement("p");
        desItem.textContent=product.description;

        item.append(imgItem,  nameItem, priceItem ,cart,desItem);
        productList.append(item);


    }

}

itemForm.addEventListener("submit" , (event)=>{
    event.preventDefault();

    const name=itemName.value.trim();
    const price=itemPrice.value.trim();
    const des=description.value.trim();
    const img=itemImg.value.trim();

    if(name ==="" ){
        textMasseg.textContent="please fill the form";
        return
    }

    products.push({
        id:productId,
        name:name,
        price:price,
        description:des,
        img:img
    });
    
    productId +=1;

    itemName.value="";
    itemPrice.value="";
    description.value="";
    textMasseg.textContent="product add succssfuly";

    addProduct();
    console.log(products);
});






const  mapitem=new Map();
productList.addEventListener("click", (event)=>{
    const addButten=event.target.closest("#cart-id");
    if(!addButten){
        return
    };

    const cartItem=addButten.closest("[data-item-id]");
    const cartId=Number(cartItem.dataset.itemId); 

    if(mapitem.has(cartId)){
        const existItem=mapitem.get(cartId);
        existItem.quantity +=1
    }else{
     const filteredItem=products.find((product)=>product.id===cartId);

     if(filteredItem){

        console.log(filteredItem);
    mapitem.set(cartId,{...filteredItem, quantity:1})
    // mapitem.set(filteredItem.id,filteredItem);
    console.log(mapitem);
    
     }
    
    }
    // console.log([...mapitem.entries()]);

    // const selected=Array.from(mapitem.values()).flat();
    
        const selected=Array.from(mapitem.values());

        const total=selected.reduce((acc,curr)=>{

        return acc+(Number(curr.price)*curr.quantity);
    },0);
    console.log("total - "+ total);
    addTocart();


} )

const cartTable=document.getElementById("cart-table")
function addTocart(){
    cartTable.innerHTML=`
    <tr>
    <th>Item name</th>
    <th>price</th>
    <th>quantati</th>
  </tr> 
    `
    for(const mapItems of mapitem.values()){
        const tr=document.createElement("tr");
        tr.id="";

        const mapItemName=document.createElement("td")
        mapItemName.textContent=mapItems.name;

        const mapPrice=document.createElement("td");
        mapPrice.textContent=mapItems.price;

        const mapQuantity=document.createElement("td");
        mapQuantity.textContent=mapItems.quantity;

        tr.append(mapItemName, mapPrice, mapQuantity);
        cartTable.append(tr);

    }

}

const addBbutton=document.getElementById("button");
const myform=document.querySelector("#myform")
addBbutton.addEventListener("click", function(){
    if(myform.style.display=="none"){
        myform.style.display="block";
    }else{
        myform.style.display="none";
    }
})

