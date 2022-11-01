// Create ItemsController class
class ItemsController {
    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    addNewItem(flavor, description, bakeDate, batchCode, imageUrl) {

        // Create method for addItem 

        const item = {

            // Increment currentId 
            id: this.currentId++,
            name: flavor,
            description: description,
            bakedDate: bakeDate,
            batch: batchCode,
            image: imageUrl,
        };

        this.items.push(item);
        this.save({name : flavor, description: description,imageUrl: imageUrl});
    }

    loadItemsFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if (storageItems) {
            const items = JSON.parse(storageItems);
            for (let i = 0, size = items.length; i < size; i++) {
                const item = items[i];
                this.items.push(item);
            }
        }
    }
    save({name, description, imageUrl}){
                    const data = { name,  description, imageUrl };
        	
        	            fetch('http://localhost:8081/products', {
        	            method: 'POST', // or 'PUT'
        	            headers: {
        	                'Content-Type': 'application/json',
        	            },
        	            body: JSON.stringify(data),
        	            })
        	            .then(response => response.json())
        	            .then(data => {
        	            console.log('Success:', data);
        	            })
    	            .catch((error) => {
        	            console.error('Error:', error);
        	            });
                }

             updateProducts(id,{name, description, imageUrl}){
                    const data = { name,  description, imageUrl };
        	
        	            fetch('http://localhost:8081/products/'+id, {
        	            method: 'PUT', 
        	            headers: {
        	                'Content-Type': 'application/json',
        	            },
        	            body: JSON.stringify(data),
        	            })
        	            .then(response => response.json())
        	            .then(data => {
        	            console.log('Success:', data);
        	            })
    	            .catch((error) => {
        	            console.error('Error:', error);
        	            });

                    }
                    deleteProducts(id){
                                               
                                fetch('http://localhost:8081/products/'+id, {
                                method: 'DELETE', 
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                })
                                .then(response => response.json())
                                .then(data => {
                                console.log('Success:', data);
                                })
                            .catch((error) => {
                                console.error('Error:', error);
                                });
                }

                findProductsById(id){
                                               
                    fetch('http://localhost:8081/products/'+id, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    })
                    .then(response => response.json())
                    .then(data => {
                    console.log('Success:', data);
                    })
                .catch((error) => {
                    console.error('Error:', error);
                    });
    }
        
}


