// SunPower Việt - script.js
console.log("Trang web đã load thành công!");
// Menu Hamburger
const menuToggle = document.querySelector("#menuToggle");
const navbar = document.querySelector("#navbar");

menuToggle.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

// Form Validation
const form = document.querySelector("#contactForm");
const errorText = document.querySelector("#formError");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const ten = document.querySelector("#inputName").value;
    const email = document.querySelector("#inputEmail").value;
    const phone = document.querySelector("#inputPhone").value;

    if (ten === "") {
        errorText.style.color = "red";
        errorText.textContent = "Vui lòng nhập họ tên";
    } else if (!email.includes("@")) {
        errorText.style.color = "red";
        errorText.textContent = "Email không hợp lệ";
    } else if (phone.length < 9) {
        errorText.style.color = "red";
        errorText.textContent = "Số điện thoại không hợp lệ";
    } else {
        errorText.style.color = "green";
        errorText.textContent = "Gửi thành công! Cảm ơn bạn đã liên hệ.";
        form.reset();
    }
});