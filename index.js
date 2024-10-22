function filterPortfolio(category) {
    const aiProjects = document.querySelectorAll('.portfolio-item.ai');
    const webMobileProjects = document.querySelectorAll('.portfolio-item.web-mobile');
    const aiTab = document.getElementById('ai-tab');
    const webMobileTab = document.getElementById('web-mobile-tab');

    if (category === 'ai') {
        aiProjects.forEach(item => item.classList.add('active'));
        webMobileProjects.forEach(item => item.classList.remove('active'));
        aiTab.classList.add('active');
        webMobileTab.classList.remove('active');
    } else if (category === 'web-mobile') {
        aiProjects.forEach(item => item.classList.remove('active'));
        webMobileProjects.forEach(item => item.classList.add('active'));
        webMobileTab.classList.add('active');
        aiTab.classList.remove('active');
    }
}