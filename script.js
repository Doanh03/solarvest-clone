// ===== NHÚNG HEADER & FOOTER DÙNG CHUNG =====
function naploadPartial(url, placeholderId) {
    fetch(url)
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            document.querySelector(placeholderId).innerHTML = html;
        })
        .then(function() {
            // Sau khi Header đã load xong, mới gắn sự kiện Menu Hamburger
            if (placeholderId === "#header-placeholder") {
                const menuToggle = document.querySelector("#menuToggle");
                const navbar = document.querySelector("#navbar");
                menuToggle.addEventListener("click", function() {
                    navbar.classList.toggle("active");
                });
            }
        });
}

naploadPartial("partials/header.html", "#header-placeholder");
naploadPartial("partials/footer.html", "#footer-placeholder");

// SunPower Việt - script.js
console.log("Trang web đã load thành công!");

// ===== DỮ LIỆU DỰ ÁN =====
const danhSachDuAn = [
    {
        ten: "Nhà Máy Dệt May",
        diaDiem: "Bình Dương",
        nganh: "san-xuat",
        congSuat: "800 kWp",
        anh: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
    },
    {
        ten: "Nhà Máy Chế Biến Gỗ",
        diaDiem: "Đồng Nai",
        nganh: "san-xuat",
        congSuat: "600 kWp",
        anh: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
    },
    {
        ten: "Nhà Máy Thực Phẩm",
        diaDiem: "Hải Dương",
        nganh: "san-xuat",
        congSuat: "1,200 kWp",
        anh: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
    },
    {
        ten: "Kho Vận Logistics ABC",
        diaDiem: "Long An",
        congSuat: "450 kWp",
        nganh: "kho-van",
        anh: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
    },
    {
        ten: "Trung Tâm Phân Phối XYZ",
        diaDiem: "Bắc Ninh",
        congSuat: "700 kWp",
        nganh: "kho-van",
        anh: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
    },
    {
        ten: "Tòa Nhà Văn Phòng Sun Tower",
        diaDiem: "TP.HCM",
        congSuat: "300 kWp",
        nganh: "van-phong",
        anh: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400"
    }
];

// ===== DỮ LIỆU DỊCH VỤ =====
const danhSachDichVu = [
    {
        icon: "☀️",
        ten: "Điện Mặt Trời Áp Mái",
        moTa:"Lắp đặt hệ thống điện mặt trời trên mái nhà xưởng, văn phòng, giúp tiết kiệm chi phí điện."
    },
    {
        icon: "💰",
        ten: "Giải Pháp Tài Chính",
        moTa: "Hỗ trợ tài chính linh hoạt, không cần vốn đầu tư ban đầu (Zero-CAPEX)."
    },
    {
        icon: "🔧",
        ten: "Vận Hành & Bảo Trì",
        moTa: "Giám sát, bảo dưỡng định kỳ, đảm bảo hệ thống vận hành hiệu quả lâu dài."
    }
];

const serviceContainer = document.querySelector("#serviceCards");

if (serviceContainer) {
    danhSachDichVu.forEach(function(dichVu) {
        serviceContainer.innerHTML += `...`;
    });
}

// ===== DỮ LIỆU TESTIMONIALS =====
const danhSachDanhGia = [
    {
        noiDung: "Hệ thống vận hành ổn định, tiết kiệm hơn 30% chi phí điện mỗi tháng. Đội ngũ hỗ trợ rất chuyên nghiệp.",
        ten: "Anh Nguyễn Văn Hùng",
        chucVu: "Giám đốc Nhà Máy Dệt May"
    },
    {
        noiDung: "Quy trình lắp đặt nhanh gọn, không ảnh hưởng đến hoạt động sản xuất. Rất hài lòng với dịch vụ.",
        ten: "Chị Trần Thị Mai",
        chucVu: "Quản lý Nhà Máy Chế Biến Gỗ"
    },
    {
        noiDung: "Giải pháp tài chính linh hoạt giúp công ty đầu tư mà không cần vốn lớn ban đầu. Đáng tin cậy.",
        ten: "Anh Lê Minh Đức",
        chucVu: "CEO Nhà Máy Thực Phẩm"
    }
];

const testimonialContainer = document.querySelector("#testimonialGrid");

if (testimonialContainer) {
    danhSachDanhGia.forEach(function(danhGia) {
        testimonialContainer.innerHTML += `
            <div class="testimonial-card">
                <p class="quote">${danhGia.noiDung}</p>
                <div class="author">
                    <strong>${danhGia.ten}</strong>
                    <span>${danhGia.chucVu}</span>
                </div>
            </div>
        `;
    });
}

// ===== TỰ ĐỘNG TẠO HTML TỪ DỮ LIỆU =====
const projectContainer = document.querySelector("#projectCards");

if (projectContainer) {
    const duAnNoiBat = danhSachDuAn.slice(0, 3);

    duAnNoiBat.forEach(function(duAn) {
        projectContainer.innerHTML += `
            <div class="project-card">
                <img src="${duAn.anh}" alt="${duAn.ten}">
                <div class="project-info">
                    <h3>${duAn.ten}</h3>
                    <p>${duAn.diaDiem} &middot; ${duAn.congSuat}</p>
                </div>
            </div>
        `;
    });
}

// Form Validation
const form = document.querySelector("#contactForm");
const errorText = document.querySelector("#formError");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const ten = document.querySelector("#inputName").value;
        const email = document.querySelector("#inputEmail").value;
        const phone = document.querySelector("#inputPhone").value;

        if (ten === "") {
            errorText.style.color = "red";
            errorText.textContent = "Vui lòng nhập họ tên";
            return;
        } else if (!email.includes("@")) {
            errorText.style.color = "red";
            errorText.textContent = "Email không hợp lệ";
            return;
        } else if (phone.length < 9) {
            errorText.style.color = "red";
            errorText.textContent = "Số điện thoại không hợp lệ";
            return;
        }

        errorText.style.color = "var(--color-primary)";
        errorText.textContent = "Đang gửi...";

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        })
        .then(function(response) {
            if (response.ok) {
                errorText.style.color = "green";
                errorText.textContent = "Gửi thành công! Cảm ơn bạn đã liên hệ.";
                form.reset();
            } else {
                errorText.style.color = "red";
                errorText.textContent = "Có lỗi xảy ra, vui lòng thử lại";
            }
        })
        .catch(function(error) {
            errorText.style.color = "red";
            errorText.textContent = "Không thể kết nối, vui lòng kiểm tra mạng.";
        });
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length > 0) {
    faqItems.forEach(function(item){
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", function() {
            item.classList.toggle("active");
        });
    });
}

// ===== TRANG DỰ ÁN: RENDER TOÀN BỘ + LỌC THEO NGÀNH =====
const allProjectContainer = document.querySelector("#allProjectCards");
const filterButtons = document.querySelector("#filterButtons");

function renderProjects(danhSach) {
    allProjectContainer.innerHTML = "";
    danhSach.forEach(function(duAn) {
        allProjectContainer.innerHTML += `
            <div class="project-card">
                <img src="${duAn.anh}" alt="${duAn.ten}">
                <div class="project-info">
                    <h3>${duAn.ten}</h3>
                    <p>${duAn.diaDiem} &middot; ${duAn.congSuat}</p>
                </div>
            </div>
        `;
    });
}

if (allProjectContainer) {
    renderProjects(danhSachDuAn);

    filterButtons.addEventListener("click", function(event) {
        if (event.target.classList.contains("filter-btn")) {

            document.querySelectorAll(".filter-btn").forEach(function(btn) {
                btn.classList.remove("active");
            });
            event.target.classList.add("active");

            const nganhDuocChon = event.target.dataset.nganh;

            if (nganhDuocChon === "tat-ca") {
                renderProjects(danhSachDuAn);
            } else {
                const ketQuaLoc = danhSachDuAn.filter(function(duAn) {
                    return duAn.nganh === nganhDuocChon;
                });
                renderProjects(ketQuaLoc);
            }
        }
    });
}