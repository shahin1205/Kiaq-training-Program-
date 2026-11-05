const productList=document.querySelector("#product-list");


let products=[];
function getMethod(){
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(json => {products=json;
    addProduct(products);
    console.log(products);
})

}
getMethod();


function addProduct(listOFProduct=products){
    productList.textContent="";

    for(const product of listOFProduct){
        const item=document.createElement("li");
        item.className="h-70  p-3 border border-gray-300 shadow-2xl overflow-hidden backdrop-blur-lg";
        item.dataset.itemId=String(product.id)

        const id=document.createElement("h3");
        id.className="text-lg font-bold";
        id.textContent="ID : "+product.id;
    
        const userIdItem=document.createElement("p");
        userIdItem.textContent="User Id : "+product.userId;

        const nameItem=document.createElement("p");
        nameItem.className="text-lg font-bold";
        nameItem.textContent=product.title;

            
        item.append(id,userIdItem,nameItem);
        productList.append(item);


    }

}


