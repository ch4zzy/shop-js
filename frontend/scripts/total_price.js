document.addEventListener('DOMContentLoaded', function() {
    let bookPrice = parseFloat(document.getElementById("productPrice").innerText.replace("$", ""));
    let bookQuantity = document.getElementById("inputQuantity");
    let totalPriceElement = document.getElementById("totalPrice");

    function updatePrice(bookPrice, bookQuantity) {
        let quantity = bookQuantity.value;
        if (quantity < 0) {
            bookQuantity.value = 0;
            quantity = 0;
        }
        let totalPrice = bookPrice * bookQuantity.value;
        totalPriceElement.innerText = "$" + totalPrice.toFixed(2);
    }
    updatePrice(bookPrice, bookQuantity);
    bookQuantity.addEventListener("input", function()
    {
        updatePrice(bookPrice, bookQuantity);
    });
});