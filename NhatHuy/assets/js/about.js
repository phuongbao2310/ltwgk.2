// ===========================================
// PHẦN 2: QUẢN LÝ TAB KỸ NĂNG (SKILLS TAB)
// ===========================================

/**
 * Hiển thị tab kỹ năng được chọn và ẩn các tab khác.
 * Đồng thời, đánh dấu nút tab tương ứng là active.
 * @param {string} tabName - Tên của tab cần hiển thị (ví dụ: 'tech', 'language', 'soft').
 */
function showTab(tabName) {
    // Ẩn tất cả các nội dung tab kỹ năng
    const tabContents = document.querySelectorAll('.skills-list.skills-grid');
    tabContents.forEach(content => {
        content.classList.remove('active'); // Xóa class 'active' để hủy hiệu ứng
        content.style.display = 'none';     // Ẩn hoàn toàn phần tử
    });

    // Xóa class 'active' khỏi tất cả các nút tab
    const tabButtons = document.querySelectorAll('.skills-tab');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Hiển thị nội dung tab được chọn
    const selectedTab = document.getElementById(`skills-${tabName}`);
    if (selectedTab) {
        // Đặt display: flex trước khi thêm class 'active' để đảm bảo transition hoạt động
        selectedTab.style.display = 'flex';
        // Sử dụng setTimeout với độ trễ nhỏ để trình duyệt có thời gian render 'display: flex'
        // trước khi thêm class 'active' để kích hoạt hiệu ứng chuyển động.
        setTimeout(() => {
            selectedTab.classList.add('active');
            // Chạy hiệu ứng skill bar nếu có
            animateSkillBars(selectedTab);
        }, 10);
    }

    // Đánh dấu nút tab được chọn là active
    const activeButton = document.querySelector(`.skills-tab[onclick="showTab('${tabName}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Hiệu ứng chạy phần trăm skill khi xuất hiện
function animateSkillBars(container) {
    const bars = container.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        bar.style.width = '0';
        const percent = bar.getAttribute('data-percent');
        setTimeout(() => {
            bar.style.width = percent + '%';
        }, 200);
    });
}

// Gọi hàm showTab('tech') khi trang tải lần đầu
// Điều này đảm bảo tab "Công nghệ" (Tech) sẽ được hiển thị mặc định.
document.addEventListener('DOMContentLoaded', () => {
    showTab('tech');
});

function showAboutTab(tab) {
    document.querySelectorAll('.about-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.about-tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`.about-tab[onclick*="${tab}"]`).classList.add('active');
    document.getElementById('about-' + tab).classList.add('active');
}
