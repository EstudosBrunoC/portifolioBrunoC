document.querySelectorAll('header nav a').forEach(link => {
link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    document.querySelectorAll('header nav a').forEach(a => a.classList.remove('active'));
    this.classList.add('active');
    }
});
});

