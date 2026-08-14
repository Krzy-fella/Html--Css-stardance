document.addEventListener('DOMContentLoaded', () => {

    const yearspan = document.getElementById('current-year');
    if (yearspan) {
        yearspan.textContent = new Data().getFullYear();
    }

    const menuBtn = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', () => {

            const isVisible = navList.style.display == 'flex';
            navList.style.display = isVisible ? 'none' : 'flex';
            navList.style.flexDirection = 'column';
            navList.style.position = 'absolute';
            navList.style.top = '80px';
            navList.style.left = '0';
            navList.style.width = '100%';
            navList.style.background = 'white';
            navList.style.padding = '1rem';
            navList.style.borderBottom = '1px solid #e2e8f0';
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});