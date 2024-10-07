// ฟังก์ชันสำหรับเปิด modal
function openModal(imageSrc, text) {
    var modal = document.querySelector(".modal");
    var modalImage = document.querySelector(".modal-image");
    var modalText = document.querySelector(".modal-text");

    // ใส่ src ของรูปภาพลงใน modal
    modalImage.src = imageSrc;

    // ใส่ข้อความลงใน modal
    modalText.textContent = text;

    // เพิ่มคลาส appear เพื่อแสดง modal
    modal.classList.add("appear");
}

// ฟังก์ชันสำหรับปิด modal
function closeModal() {
    var modal = document.querySelector(".modal");
    modal.classList.remove("appear");
}

// กำหนดการปิด modal เมื่อคลิกปุ่ม close
document.querySelector(".close").addEventListener("click", closeModal);

// กำหนดการปิด modal เมื่อคลิกพื้นที่นอก modal-content
document.querySelector(".modal").addEventListener("click", function(event) {
    var modalContent = document.querySelector(".modal-content");
    
    // ตรวจสอบว่าคลิกนอก modal-content หรือไม่
    if (!modalContent.contains(event.target)) {
        closeModal();
    }
});