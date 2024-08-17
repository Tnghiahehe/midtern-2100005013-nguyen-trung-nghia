// Hiệu ứng chuyển trang
document.querySelectorAll('.menu ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.content').classList.add('fade-out');
        document.querySelector('.left-aside').classList.add('fade-out');
        document.querySelector('.right-aside').classList.add('fade-out');

        setTimeout(() => {
            window.location.href = link.href;
        }, 550); // Thời gian hiệu ứng mờ
    });
});

// Hiệu ứng cho xe yêu thích
document.querySelectorAll('.car-link').forEach(link => {
    link.addEventListener('click', () => {
        link.querySelector('.car').classList.add('fade-out');
    });
});

// Hiệu ứng xuất hiện và biến mất của các phần aside
window.addEventListener('load', () => {
    document.querySelector('.content').classList.add('fade-in');
    document.querySelector('.left-aside').classList.add('fade-in');
    document.querySelector('.right-aside').classList.add('fade-in');
});
