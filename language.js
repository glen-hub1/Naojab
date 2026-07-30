// =======================================
// language.js (Premium Version)
// The New Generation Website
// By Elijah Ombogo Ondieki
// =======================================

// -------------------------------
// Language data
// -------------------------------
const translations = {
en: {
home: 'Home',
about: 'About',
course: 'Course',
support: 'Support',
contact: 'Contact',
startReading: 'Start Reading',
aboutAuthor: 'About the Author',
dashboard: 'Your Learning Dashboard',
courseProgress: 'Course Progress',
chaptersCompleted: 'Chapters Completed',
continueReading: 'Continue Reading',
supportProject: 'Support the Project'
},

sw: {
    home: 'Nyumbani',
    about: 'Kuhusu',
    course: 'Kozi',
    support: 'Msaada',
    contact: 'Mawasiliano',
    startReading: 'Anza Kusoma',
    aboutAuthor: 'Kuhusu Mwandishi',
    dashboard: 'Dashibodi Yako ya Kujifunza',
    courseProgress: 'Maendeleo ya Kozi',
    chaptersCompleted: 'Sura Zilizokamilika',
    continueReading: 'Endelea Kusoma',
    supportProject: 'Saidia Mradi'
},

gusii: {
    home: 'Eka',
    about: 'Korwa',
    course: 'Esomo',
    support: 'Obotabasi',
    contact: 'Amache',
    startReading: 'Tang\\'a Gosoma',
    aboutAuthor: 'Korwa Omwandiki',
    dashboard: 'Dashboard Yae Yegosoma',
    courseProgress: 'Ogotia kwa Esomo',
    chaptersCompleted: 'Esura Ebitire',
    continueReading: 'Enderia Gosoma',
    supportProject: 'Botia Omoradi'
}

};

// -------------------------------
// Current language
// -------------------------------
let currentLanguage =
localStorage.getItem('language') || 'en';

// -------------------------------
// Apply translations
// -------------------------------
function applyLanguage(language) {

const data = translations[language];

if (!data) return;

// Navigation
const navLinks =
    document.querySelectorAll('.nav-links a');

if (navLinks.length >= 5) {
    navLinks[0].textContent = data.home;
    navLinks[1].textContent = data.about;
    navLinks[2].textContent = data.course;
    navLinks[3].textContent = data.support;
    navLinks[4].textContent = data.contact;
}

// Hero buttons
const heroButtons =
    document.querySelectorAll('.hero-buttons a');

if (heroButtons.length >= 2) {
    heroButtons[0].textContent = data.startReading;
    heroButtons[1].textContent = data.aboutAuthor;
}

// Dashboard title
const dashboardTitle =
    document.querySelector('.section h2');

if (dashboardTitle) {
    dashboardTitle.textContent = data.dashboard;
}

// Continue button
const continueButton =
    document.querySelector('.glass-card .btn.primary');

if (continueButton) {
    continueButton.textContent = data.continueReading;
}

// Save preference
localStorage.setItem('language', language);

console.log('Language applied:', language);

}

// -------------------------------
// Change language
// -------------------------------
function changeLanguage(language) {

currentLanguage = language;

applyLanguage(language);

}

// -------------------------------
// Create language selector
// -------------------------------
function createLanguageSelector() {

// Avoid duplicates
if (document.getElementById('language-selector')) return;

const selector = document.createElement('select');

selector.id = 'language-selector';

selector.style.position = 'fixed';
selector.style.top = '18px';
selector.style.right = '20px';
selector.style.padding = '10px 14px';
selector.style.borderRadius = '14px';
selector.style.border = '1px solid #22c55e';
selector.style.background = '#071427';
selector.style.color = '#ffffff';
selector.style.fontWeight = 'bold';
selector.style.boxShadow =
    '0 0 16px rgba(34,197,94,0.35)';
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

// -------------------------------
// Initialize
// -------------------------------
window.addEventListener('load', () => {

createLanguageSelector();

applyLanguage(currentLanguage);

console.log('Multilingual system initialized');

});
