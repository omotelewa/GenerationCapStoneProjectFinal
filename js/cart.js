
function calculateFun() {
    var items = document.getElementsByClassName('price');

    var total = 0;

    Array.from(items).forEach(
        (i) => {
            price = i.innerHTML ;
            console.log(price);
            total = total + parseInt(price)  ;
        }
    )

    // console.log(total);

    var totalTag = document.getElementById('total-price');

    totalTag.innerHTML =  total ;
}





