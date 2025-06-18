function scrollToSection(sectionId, event) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    
    if (section) {
        // Tính toán vị trí scroll có tính offset
        const offset = 20; // Điều chỉnh offset nếu cần
        const sectionTop = section.offsetTop - offset;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });

        // Đóng sidebar trên mobile nếu đang mở
        const sidebar = document.getElementById('sidebarNav');
        const mainContent = document.getElementById('mainContentWrapper');
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('sidebar-active');
        }
    }
}
