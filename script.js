function orderNow() {
    alert("Thank you for your order! We will contact you soon.");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
});