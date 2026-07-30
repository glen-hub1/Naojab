// =======================================
// analytics.js (Premium Dashboard Version)
// The New Generation Website
// By Elijah Ombogo Ondieki
// =======================================

// -------------------------------
// Initialize analytics
// -------------------------------
function initializeAnalytics() {

let visitors =
    parseInt(localStorage.getItem('visitors') || '0');

visitors += 1;

localStorage.setItem('visitors', visitors);

let pageViews =
    parseInt(localStorage.getItem('pageViews') || '0');

pageViews += 1;

localStorage.setItem('pageViews', pageViews);

const page =
    window.location.pathname.split('/').pop() || 'index.html';

const pages =
    JSON.parse(localStorage.getItem('pages') || '{}');

pages[page] = (pages[page] || 0) + 1;

localStorage.setItem('pages', JSON.stringify(pages));

sessionStorage.setItem('pageStartTime', Date.now());

updateDashboard();

}

// -------------------------------
// Track reading time
// -------------------------------
function trackTimeSpent() {

const start =
    parseInt(sessionStorage.getItem('pageStartTime') || Date.now());

const seconds =
    Math.floor((Date.now() - start) / 1000);

let totalTime =
    parseInt(localStorage.getItem('totalTime') || '0');

totalTime += seconds;

localStorage.setItem('totalTime', totalTime);

}

// -------------------------------
// Mark chapter as completed
// -------------------------------
function markChapterComplete() {

const page =
    window.location.pathname.split('/').pop();

if (!page.startsWith('chapter')) return;

let completed =
    JSON.parse(localStorage.getItem('completedChapters') || '[]');

if (!completed.includes(page)) {

    completed.push(page);

    localStorage.setItem(
        'completedChapters',
        JSON.stringify(completed)
    );

    updateDashboard();

    console.log('Chapter completed:', page);

}

}

// -------------------------------
// Reading progress
// -------------------------------
function trackReadingProgress() {

const progress = Math.round(

    (window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight)) * 100

);

localStorage.setItem(
    'lastReadingProgress',
    progress
);

if (progress >= 90) {

    markChapterComplete();

}

}

// -------------------------------
// Update homepage dashboard
// -------------------------------
function updateDashboard() {

const completed =
    JSON.parse(localStorage.getItem('completedChapters') || '[]');

const totalChapters = 14;

const completedCount = completed.length;

const percentage =
    Math.round((completedCount / totalChapters) * 100);

const countElement =
    document.getElementById('progress-count');

if (countElement) {

    countElement.textContent =
        completedCount + ' / ' + totalChapters;

}

const bar =
    document.getElementById('progress-bar-fill');

if (bar) {

    bar.style.width = percentage + '%';

}

const continueButton =
    document.querySelector('.glass-card .btn.primary');

if (continueButton) {

    if (completedCount === 0) {

        continueButton.href = 'chapter1.html';

    } else if (completedCount < totalChapters) {

        continueButton.href =
            'chapter' + (completedCount + 1) + '.html';

    } else {

        continueButton.href = 'certificate.html';

        continueButton.textContent =
            'View Certificate';

    }

}

}

// -------------------------------
// Analytics report
// -------------------------------
function getAnalyticsReport() {

return {

    visitors:
        parseInt(localStorage.getItem('visitors') || '0'),

    pageViews:
        parseInt(localStorage.getItem('pageViews') || '0'),

    totalTimeSeconds:
        parseInt(localStorage.getItem('totalTime') || '0'),

    completedChapters:
        JSON.parse(localStorage.getItem('completedChapters') || '[]'),

    pages:
        JSON.parse(localStorage.getItem('pages') || '{}'),

    lastReadingProgress:
        parseInt(localStorage.getItem('lastReadingProgress') || '0')

};

}

// -------------------------------
// Reset analytics
// -------------------------------
function resetAnalytics() {

localStorage.removeItem('visitors');

localStorage.removeItem('pageViews');

localStorage.removeItem('totalTime');

localStorage.removeItem('completedChapters');

localStorage.removeItem('pages');

localStorage.removeItem('lastReadingProgress');

updateDashboard();

}

// -------------------------------
// Initialize
// -------------------------------
window.addEventListener('load', initializeAnalytics);

window.addEventListener('beforeunload', trackTimeSpent);

window.addEventListener('scroll', trackReadingProgress);

console.log('Analytics dashboard initialized');
