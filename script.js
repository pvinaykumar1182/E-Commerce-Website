let cart = [];
let total = 0;

function addCart(product, price) {

```
cart.push({
    name: product,
    price: price
});

total += price;

displayCart();
```

}

function displayCart() {

```
let cartContainer = document.getElementById("cart");

if (!cartContainer) {
    return;
}

cartContainer.innerHTML = "";

for (let i = 0; i < cart.length; i++) {

    cartContainer.innerHTML += `
    <div class="cartItem">
        ${cart[i].name} - ₹${cart[i].price}
        <button onclick="removeItem(${i})">Remove</button>
    </div>
    `;
}

let cartCount = document.getElementById("cartCount");

if (cartCount) {
    cartCount.innerText = cart.length;
}

let totalPrice = document.getElementById("totalPrice");

if (totalPrice) {
    totalPrice.innerText = "Total: ₹" + total;
}
```

}

function removeItem(index) {

```
total -= cart[index].price;

cart.splice(index, 1);

displayCart();
```

}

function buyNow() {

```
if (cart.length === 0) {

    alert("Your cart is empty!");

    return;
}

alert("Order placed successfully!\nTotal Amount: ₹" + total);

cart = [];
total = 0;

displayCart();
```

}
