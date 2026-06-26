let cart = [];

let total = 0;


function addCart(name, price) {


    let product = {

        name: name,
        price: price

    };


    cart.push(product);


    total = total + price;


    document.getElementById("cartCount").innerHTML = cart.length;


    document.getElementById("totalPrice").innerHTML = total;


    displayCart();

}




function removeCart(index) {


    total = total - cart[index].price;


    cart.splice(index,1);



    document.getElementById("cartCount").innerHTML = cart.length;


    document.getElementById("totalPrice").innerHTML = total;



    displayCart();


}




function displayCart() {


    let cartBox = document.getElementById("cart");


    cartBox.innerHTML = "";



    if(cart.length == 0){

        cartBox.innerHTML = "Your cart is empty";

        return;

    }




    for(let i=0;i<cart.length;i++){



        cartBox.innerHTML +=

        `
        <div class="cartItem">

        ${i+1}. ${cart[i].name}
        - ₹${cart[i].price}

        <button onclick="removeCart(${i})">
        Remove
        </button>


        </div>
        `;


    }



}