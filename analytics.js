// =======================================
// analytics.js
// The New Generation Website
// By Elijah Ombogo Ondieki
// =======================================

// Initialize analytics
function initializeAnalytics() {

// Total visitors
let visitors = parseInt(localStorage.getItem('visitors') || '0');
visitors += 1;
localStorage.setItem('visitors', visitors);

// Page views
let pageViews = parseInt(localStorage.getItem('pageViews') || '0');
pageViews += 1;
localStorage.setItem('pageViews', pageViews);

// Current page
const page = window.location.pathname.split('/').pop() || 'index.html';

// Track page visits
const pages = JSON.parse(localStorage.getItem('pages') || '{}');
pages[page] = (pages[page] || 0) + 1;
localStorage.setItem('pages', JSON.stringify(pages));

// Start time
sessionStorage.setItem('pageStartTime', Date.now());

console.log('Analytics initialized');
console.log('Visitors:', visitors);
console.log('Page views:', pageViews);

}

// Track time spent
function trackTimeSpent() {

const start = parseInt(sessionStorage.getItem('pageStartTime') || Date.now());

const seconds = Math.floor((Date.now() - start) / 1000);

let totalTime = parseInt(localStorage.getItem('totalTime') || '0');
totalTime += seconds;
localStorage.setItem('totalTime', totalTime);

console.log('Time on page:', seconds + ' seconds');

}

// Track chapter completion
function markChapterComplete() {

const page = window.location.pathname.split('/').pop();

if (page.startsWith('chapter')) {

    const completed = JSON.parse(
        localStorage.getItem('completedChapters') || '[]'
    );

    if (!completed.includes(page)) {

        completed.push(page);

        localStorage.setItem(
            'completedChapters',
            JSON.stringify(completed)
        );

        console.log('Chapter completed:', page);
    }
}

}

// Reading progress
function trackReadingProgress() {

const progress = Math.round(

    (window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight)) * 100

);

localStorage.setItem('lastReadingProgress', progress);

return progress;

}

// Analytics dashboard
function getAnalyticsReport() {

return {

    visitors: parseInt(localStorage.getItem('visitors') || '0'),

    pageViews: parseInt(localStorage.getItem('pageViews') || '0'),

    totalTimeSeconds: parseInt(localStorage.getItem('totalTime') || '0'),

    completedChapters: JSON.parse(
        localStorage.getItem('completedChapters') || '[]'
    ),

    pages: JSON.parse(localStorage.getItem('pages') || '{}'),

    lastReadingProgress: parseInt(
        localStorage.getItem('lastReadingProgress') || '0'
    )

};

}

// Print analytics
function printAnalytics() {

const report = getAnalyticsReport();

console.log('=== THE NEW GENERATION ANALYTICS ===');

console.log('Visitors:', report.visitors);

console.log('Page Views:', report.pageViews);

console.log('Total Reading Time:', report.totalTimeSeconds, 'seconds');

console.log('Completed Chapters:', report.completedChapters.length);

console.log('Last Reading Progress:', report.lastReadingProgress + '%');

console.log('Page Statistics:', report.pages);

}

// Reset analytics
function resetAnalytics() {

localStorage.removeItem('visitors');

localStorage.removeItem('pageViews');

localStorage.removeItem('totalTime');

localStorage.removeItem('completedChapters');

localStorage.removeItem('pages');

localStorage.removeItem('lastReadingProgress');

console.log('Analytics reset');

}

// Initialize
window.addEventListener('load', initializeAnalytics);

// Save time when leaving page
window.addEventListener('beforeunload', trackTimeSpent);

// Track scrolling
window.addEventListener('scroll', trackReadingProgress);

// Mark chapter complete near bottom
window.addEventListener('scroll', function () {

const progress = trackReadingProgress();

if (progress >= 90) {

    markChapterComplete();

}

});
