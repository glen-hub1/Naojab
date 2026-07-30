// =======================================
// language.js
// The New Generation Website
// By Elijah Ombogo Ondieki
// =======================================

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Basic translation data
const translations = {
en: {
home: 'Home',
about: 'About',
course: 'Course',
support: 'Support',
contact: 'Contact',
startReading: 'Start Reading',
aboutAuthor: 'About the Author'
},

sw: {
    home: 'Nyumbani',
    about: 'Kuhusu',
    course: 'Kozi',
    support: 'Msaada',
    contact: 'Mawasiliano',
    startReading: 'Anza Kusoma',
    aboutAuthor: 'Kuhusu Mwandishi'
},

gusii: {
    home: 'Eka',
    about: 'Korwa',
    course: 'Esomo',
    support: 'Obotabasi',
    contact: 'Amache',
    startReading: 'Tang\'a Gosoma',
    aboutAuthor: 'Korwa Omwandiki'
}

};

// Change language
function changeLanguage(language) {
currentLanguage = language;

// Save language preference
localStorage.setItem('language', language);

// Update page text
applyLanguage(language);

console.log('Language changed to:', language);

}

// Apply translations
function applyLanguage(language) {

const data = translations[language];

if (!data) return;

// Navigation
const links = document.querySelectorAll('.nav-links a');

if (links.length >= 5) {
    links[0].textContent = data.home;
    links[1].textContent = data.about;
    links[2].textContent = data.course;
    links[3].textContent = data.support;
    links[4].textContent = data.contact;
}

// Hero buttons
const buttons = document.querySelectorAll('.hero-buttons a');

if (buttons.length >= 2) {
    buttons[0].textContent = data.startReading;
    buttons[1].textContent = data.aboutAuthor;
}

}

// Create language selector
function createLanguageSelector() {

const selector = document.createElement('select');

selector.style.position = 'fixed';
selector.style.top = '18px';
selector.style.right = '20px';
selector.style.padding = '10px';
selector.style.borderRadius = '12px';
selector.style.border = '1px solid #38bdf8';
selector.style.background = '#071427';
selector.style.color = '#ffffff';
selector.style.boxShadow = '0 0 12px rgba(56,189,248,.35)';
selector.style.zIndex = '2000';

selector.innerHTML = `
    <option value="en">English</option>
    <option value="sw">Kiswahili</option>
    <option value="gusii">Ekegusii</option>
`;

selector.value = currentLanguage;

selector.addEventListener('change', function () {
    changeLanguage(this.value);
});

document.body.appendChild(selector);

}

// Initialize language system
window.addEventListener('load', function () {

createLanguageSelector();

applyLanguage(currentLanguage);

console.log('Multilingual system initialized');

});
