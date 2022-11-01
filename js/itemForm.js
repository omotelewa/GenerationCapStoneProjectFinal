let flavorError=document.querySelector("#flavorError");
let descriptionError=document.querySelector("#descriptionError");
let batchError=document.querySelector("#batchError");
let dateError=document.querySelector("#dateError");
let imageError=document.querySelector("#imageError")
let successMessage=document.querySelector("#successMessage");
let itemsController=new ItemsController();
itemsController.loadItemsFromLocalStorage();
let addItem=(event)=>{
    event.preventDefault();
    flavorError.textContent="";
    descriptionError.textContent="";
    batchError.textContent="";
    dateError.textContent="";
    imageError.textContent="";
    successMessage.textContent="";
   let flavor = event.target.flavor.value;
   let description = event.target.description.value;
   let batchNo = event.target.batchNo.value;
   let imageUrl = event.target.imageUrl.value;
   let bakeDate =event.target.bakeDate;
   let success=validateForm(flavor,description,batchNo,bakeDate,imageUrl);
    if(success){
        flavorError.textContent="";
        descriptionError.textContent="";
        batchError.textContent="";
        dateError.textContent="";
        imageError.textContent="";
        itemsController.addNewItem(flavor, description, bakeDate, batchNo,imageUrl);
        console.log(itemsController.items);
        localStorage.setItem("items",JSON.stringify(itemsController.items));
        successMessage.textContent="Item Added";
        
    }
}
 
let validateForm=(flavor,description,batchNo,bakeDate,imageUrl)=>{
    let success=true;
    if(!flavor){
     flavorError.textContent="Please provide the flavor";
     success=false;
    }
    if(!description){
        descriptionError.textContent="Please provide the description";
        success=false;
    }
    if(!batchNo){
        batchError.textContent="Please provide the batch Number";
        success=false;
       }
    if(!bakeDate){
        dateError.textContent="Please provide the bake date";
        success=false;
       }
    if(!imageUrl){
        imageError.textContent="Please provide the image Url";
        success=false;
       }
    return success;
}

    let form=document.querySelector("#itemForm");
    form.addEventListener("submit",addItem)

