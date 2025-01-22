import { checkAuth } from './auth.js';

// Load reusable components (header and footer)
async function loadComponents() {
    const header = await fetch('./src/header.html');
    const footer = await fetch('./src/footer.html');

    document.getElementById('header').innerHTML = await header.text();
    document.getElementById('footer').innerHTML = await footer.text();
}

// Initialize the page
export async function initPage() {
    await loadComponents();
    await checkAuth(); // Ensure user is authenticated for protected pages
}
