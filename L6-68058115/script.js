// เลื่อนลงไป Section About
function scrollToSection(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

// Navbar เปลี่ยนสีเมื่อเลื่อน
window.addEventListener("scroll", function(){
    const nav = document.getElementById("navbar");
    const topBtn = document.getElementById("topBtn");

    if(window.scrollY > 50){
        nav.classList.add("scrolled");
        topBtn.style.display = "block";
    } else {
        nav.classList.remove("scrolled");
        topBtn.style.display = "none";
    }
});

// กลับขึ้นบน
function scrollToTop(){
    window.scrollTo({top:0, behavior:"smooth"});
}

// เปิด Modal
function openModal(src){
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}

// ปิด Modal
function closeModal(){
    document.getElementById("imageModal").style.display = "none";
}