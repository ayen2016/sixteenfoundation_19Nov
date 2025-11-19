window.addEventListener('scroll', () => {
    const header = document.querySelector('.six_foundation_nav-header');
    if(window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});


const mobileToggle = document.querySelector('.six_foundation_nav-mobile-toggle');
const mobileMenu = document.querySelector('.six_foundation_nav-mobile-menu');
const mobileClose = document.querySelector('.six_foundation_nav-mobile-close');
const backdrop = document.querySelector('.six_foundation_nav-backdrop');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeMobileMenu(){
    mobileMenu.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelectorAll('.six_foundation_nav-mobile-item').forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('.six_foundation_nav-dropdown-toggle i');
        if(icon) icon.style.transform = 'rotate(0)';
    });
}

mobileClose.addEventListener('click', closeMobileMenu);
backdrop.addEventListener('click', closeMobileMenu);


const dropdownToggles = document.querySelectorAll('.six_foundation_nav-dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const parentItem = toggle.closest('.six_foundation_nav-mobile-item');

     
        document.querySelectorAll('.six_foundation_nav-mobile-item.active').forEach(item => {
            if (item !== parentItem) {
                item.classList.remove('active');
                const icon = item.querySelector('.six_foundation_nav-dropdown-toggle i');
                if(icon) icon.style.transform = 'rotate(0)';
            }
        });

        
        parentItem.classList.toggle('active');

        
        const icon = toggle.querySelector('i');
        icon.style.transform = parentItem.classList.contains('active') 
            ? 'rotate(180deg)' 
            : 'rotate(0)';
    });
});


document.querySelectorAll('.six_foundation_nav-mobile-link, .six_foundation_nav-mobile-dropdown-item').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!link.nextElementSibling || !link.nextElementSibling.classList.contains('six_foundation_nav-mobile-dropdown')) {
            closeMobileMenu();
        }
    });
});


window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        closeMobileMenu();
    }
});