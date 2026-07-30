// =======================================
// The New Generation Website (Premium V2)
// By Elijah Ombogo Ondieki
// =======================================

// -------------------------------
// Reading Progress Bar
// -------------------------------
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '4px';
progressBar.style.width = '0%';
progressBar.style.background = '#38bdf8';
progressBar.style.boxShadow = '0 0 16px #38bdf8';
progressBar.style.zIndex = '2500';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

progressBar.style.width =
    (scrollTop / scrollHeight) * 100 + '%';

});

// -------------------------------
// Yellow Theme Button
// -------------------------------
const themeButton = document.createElement('button');
themeButton.textContent = '🌙';
themeButton.style.position = 'fixed';
themeButton.style.bottom = '20px';
themeButton.style.left = '20px';
themeButton.style.width = '58px';
themeButton.style.height = '58px';
themeButton.style.borderRadius = '50%';
themeButton.style.border = 'none';
themeButton.style.cursor = 'pointer';
themeButton.style.background = '#facc15';
themeButton.style.color = '#111827';
themeButton.style.fontSize = '1.4rem';
themeButton.style.boxShadow = '0 0 18px #facc15';
themeButton.style.zIndex = '1200';
document.body.appendChild(themeButton);

themeButton.addEventListener('click', () => {
document.body.classList.toggle('light-mode');

themeButton.textContent =
    document.body.classList.contains('light-mode')
        ? '☀️'
        : '🌙';

});

// -------------------------------
// Green Language Button
// -------------------------------
const languageButton = document.createElement('button');
languageButton.textContent = '🌍';
languageButton.style.position = 'fixed';
languageButton.style.bottom = '20px';
languageButton.style.left = '90px';
languageButton.style.width = '58px';
languageButton.style.height = '58px';
languageButton.style.borderRadius = '50%';
languageButton.style.border = 'none';
languageButton.style.cursor = 'pointer';
languageButton.style.background = '#22c55e';
languageButton.style.color = '#052e16';
languageButton.style.fontSize = '1.4rem';
languageButton.style.boxShadow = '0 0 18px #22c55e';
languageButton.style.zIndex = '1200';
document.body.appendChild(languageButton);

// Language Menu
const languageMenu = document.createElement('div');
languageMenu.style.position = 'fixed';
languageMenu.style.bottom = '90px';
languageMenu.style.left = '90px';
languageMenu.style.background = '#071427';
languageMenu.style.border = '1px solid #22c55e';
languageMenu.style.borderRadius = '16px';
languageMenu.style.padding = '10px';
languageMenu.style.display = 'none';
languageMenu.style.boxShadow =
'0 0 18px rgba(34,197,94,0.35)';
languageMenu.style.zIndex = '1200';

languageMenu.innerHTML = "<button class="lang-option" data-lang="en">English</button> <button class="lang-option" data-lang="sw">Kiswahili</button> <button class="lang-option" data-lang="gusii">Ekegusii</button>";

document.body.appendChild(languageMenu);

languageButton.addEventListener('click', () => {
languageMenu.style.display =
languageMenu.style.display === 'none'
? 'block'
: 'none';
});

// Language button styles
document.querySelectorAll('.lang-option').forEach(button => {

button.style.display = 'block';
button.style.width = '100%';
button.style.margin = '6px 0';
button.style.padding = '10px';
button.style.border = 'none';
button.style.borderRadius = '12px';
button.style.cursor = 'pointer';
button.style.background = '#22c55e';
button.style.color = '#052e16';
button.style.fontWeight = 'bold';

button.addEventListener('click', () => {

    const lang = button.dataset.lang;

    if (typeof changeLanguage === 'function') {
        changeLanguage(lang);
    }

    languageMenu.style.display = 'none';
});

});

// -------------------------------
// Orange Back To Top Button
// -------------------------------
const topButton = document.createElement('button');
topButton.textContent = '↑';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '20px';
topButton.style.width = '58px';
topButton.style.height = '58px';
topButton.style.borderRadius = '50%';
topButton.style.border = 'none';
topButton.style.cursor = 'pointer';
topButton.style.background = '#f97316';
topButton.style.color = '#7c2d12';
topButton.style.fontSize = '1.4rem';
topButton.style.boxShadow = '0 0 18px #f97316';
topButton.style.display = 'none';
topButton.style.zIndex = '1200';
document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
topButton.style.display =
window.scrollY > 300 ? 'block' : 'none';
});

topButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// -------------------------------
// Loading Screen + Fade Animations
// -------------------------------
window.addEventListener('load', () => {

setTimeout(() => {

    const loader = document.getElementById('loader');

    if (loader) {
        loader.classList.add('hide');
    }

}, 1500);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }

    });

}, { threshold: 0.15 });

document
    .querySelectorAll('.section, .chapter-card')
    .forEach(element => {

        element.classList.add('fade-in');
        observer.observe(element);

    });

});

console.log('The New Generation Website Loaded');
console.log('Premium V2 Activated');
