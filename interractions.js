document.addEventListener("DOMContentLoaded", function () {
    const changeButton = document.querySelector(".change-button");
    const shippingDetails = document.querySelector(".shipping-details");
    const paymentForm = document.querySelector(".payment-details form");

    // Toggle shipping information visibility
    changeButton.addEventListener("click", function () {
        shippingDetails.classList.toggle("hidden");
    });

    // Show/hide payment form based on payment method selection
    const paymentMethods = document.querySelectorAll(".payment-methods input[type='radio']");
    paymentMethods.forEach(function (method) {
        method.addEventListener("change", function () {
            if (method.id === "apple-pay") {
                paymentForm.style.display = "none";
            } else {
                paymentForm.style.display = "block";
            }
        });
    });
});
