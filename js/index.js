
function addItemCard(item){
    const itemHTML = `
    <div class="card c-card" style="width: 18rem;">
    <img src="${item.image}" height="200px" class="card-img-top" alt="...">
    <div class="card-body c-card-body">
      <h4>${item.name}</h4>
      <div id="stars-div">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
    </div>
  </div>
    `;
    const itemsContainer = document.getElementById("gallery-div");
    itemsContainer.innerHTML += itemHTML;
}



function displayItems(){
    const itemsController=new ItemsController();

    itemsController.loadItemsFromLocalStorage()

    for(let item of itemsController.items){
        addItemCard(item)
    }
}
//writeToLocalStorage()
displayItems()