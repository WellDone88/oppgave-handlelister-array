
function updateView(){
    let HTML = document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="cart" class="ShoppingCart"><h2> Handleliste<h2></div>
    <div>${[ShoppingProducts]} <br> ${[ShoppingImg]}<div>
    
    
    
    
    
    
    `
}

updateView()