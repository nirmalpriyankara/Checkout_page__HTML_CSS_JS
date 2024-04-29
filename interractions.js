const billingCheckbox = document.getElementById('billing-address');
const shippingForm = document.querySelector('.shipping-information form');

shippingForm.addEventListener('submit', (event) => {
    if (billingCheckbox.checked) {
        // Prevent form submission if billing address is same as shipping
        event.preventDefault();
        alert('Billing address is same as shipping. No additional information needed!');
    }
});
