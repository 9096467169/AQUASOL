const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const creditCardInfo = document.querySelector('.credit-card-info');
const paypalInfo = document.querySelector('.paypal-info');
const upiInfo = document.querySelector('.upi-info');

// Function to show/hide relevant payment method fields
function showPaymentInfo() {
    creditCardInfo.style.display = 'none';
    paypalInfo.style.display = 'none';
    upiInfo.style.display = 'none';

    if (this.value === 'credit-card') {
        creditCardInfo.style.display = 'block';
    } else if (this.value === 'paypal') {
        paypalInfo.style.display = 'block';
    } else if (this.value === 'upi') {
        upiInfo.style.display = 'block';
    }
}

// Add event listeners to the radio buttons
paymentMethods.forEach(method => method.addEventListener('change', showPaymentInfo));

// Trigger the default display based on the pre-selected option
showPaymentInfo.call(document.querySelector('input[name="payment-method"]:checked'));