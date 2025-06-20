



const renderSkills = () => {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    skillsData.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'skill-category';

        categoryEl.innerHTML = `
                    <h3><i class="${category.icon}"></i> ${category.title}</h3>
                `;

        category.skills.forEach(skill => {
            const skillHTML = `
                        <div class="skill-bar">
                            <div class="skill-info">
                                <span>${skill.name}</span>
                                <span>${skill.level}%</span>
                            </div>
                            <div class="skill-progress">
                                <span style="width: ${skill.level}%"></span>
                            </div>
                        </div>
                    `;
            categoryEl.innerHTML += skillHTML;
        });

        container.appendChild(categoryEl);
    });
}
const renderProjects = () => {
    const container = document.getElementById('projects-grid');
    container.innerHTML = '';

    projectsData.forEach(project => {
        const projectEl = document.createElement('div');
        projectEl.className = 'project-card';

        projectEl.innerHTML = `
                    <div class="project-img">
                        <img src="${project.imgAdress || ""}" alt="Image missing">
                    </div>
                    <div class="project-content">
                        <h3>${project.title || "A New Project"}</h3>
                        <p>${project.description || "Created with Love "}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => { return `<span>${tag}</span>` }).join("")}
                        </div>
                        <a href="${project.liveLink}"  target="_blank" class="btn">View Project</a>
                    </div>
                `;

        container.appendChild(projectEl);
    });
}


const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.innerHTML = '<i class="fas fa-bars""></i>';
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});


const animateOnScroll = () => {
    const elements = document.querySelectorAll('.stat-box, .project-card, .skill-bar, .contact-item');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};


document.querySelectorAll('.stat-box, .project-card, .skill-bar, .contact-item').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});


const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);