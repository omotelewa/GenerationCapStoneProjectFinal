
function addItemCard(item){
    const itemHTML = '<div class="card m-3"  style="width: 18rem;">\n' +
        '    <img src="'+item.image +'" height="200px" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <button class="btn btn-primary" id=" '+item.id+' ">Add to Cart</button>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

function writeToLocalStorage(){
    const data=[
        {
            id: 0,
            name: 'strawberry',
            description: 'sprinkled strawberres',
            bakedDate: '10/04/2022',
            batch: '0004',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJi48cYViZq5SZAX2NF1V4Y9NmEbToiJWVg&usqp=CAU'
          },
          {
            id: 1,
            name: 'Vanilla Wafer Cookie',
            description: 'Real Vanilla Bean with crisp wavers',
            bakedDate: '10/04/2022',
            batch: '0004',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvcigFUPc7eQ0Aa4wQoEHCY1NfZmCrZls8Q&usqp=CAU'
          },
          {
            id: 2,
            name: 'Red Velvet Cookie',
            description: 'Red Velvet Cookie made from real cream cheese and cherries.',
            bakedDate: '10/04/2022',
            batch: '0004',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV75ezwqTcHqooyKdWx9UGcoxaZnQtd0HcBrdfRJlbSn2rdTCr5ky98PJrKrhIRfkkuuY&usqp=CAU'
          },
          {
            id: 3,
            name: 'Sugar Cookie',
            description: 'Sugar Cookie made from real cream cheese and confetie sprinkles.',
            bakedDate: '10/04/2022',
            batch: '0004',
            image: 'https://beyondfrosting.com/wp-content/uploads/2022/02/Sprinkle-Sugar-Cookies-2-3.jpg'
          },
          {
            id: 4,
            name: 'Birthday Cookie',
            description: 'Birthday Cookie your real birthday treat, suprise inside treats..',
            bakedDate: '10/04/2022',
            batch: '0004',
            image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/4a8ff86e8f3f41c5b6a4dad31b10a6d5/BFV24562_6CookieDoughUpgrades-FB.jpg'
          }
    ]
    localStorage.setItem("items",JSON.stringify(data))
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