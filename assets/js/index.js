// Dark Mode Toggle Logic
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    // If dark mode is active on load, show the light icon
    if (themeToggleLightIcon) {
        // Check if element exists before manipulating
        themeToggleLightIcon.classList.remove('hidden');
    }
} else {
    // If light mode is active on load, show the dark icon
    if (themeToggleDarkIcon) {
        // Check if element exists before manipulating
        themeToggleDarkIcon.classList.remove('hidden');
    }
}

var themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    // Ensure the button exists before adding event listener
    themeToggleBtn.addEventListener('click', function () {
        // Toggle icons inside button
        if (themeToggleDarkIcon) {
            themeToggleDarkIcon.classList.toggle('hidden');
        }
        if (themeToggleLightIcon) {
            themeToggleLightIcon.classList.toggle('hidden');
        }

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}

// Sidebar Toggle Logic
const sidebarShowBtn = document.getElementById('logly-sidebar-show');
const sidebarHideBtn = document.getElementById('logly-sidebar-hide');
const sidebar = document.getElementById('default-sidebar');

if (sidebarShowBtn && sidebarHideBtn && sidebar) {
    sidebarShowBtn.addEventListener('click', function () {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        sidebarShowBtn.classList.add('hidden'); // Hide show button
        sidebarHideBtn.classList.remove('hidden'); // Show hide button
    });

    sidebarHideBtn.addEventListener('click', function () {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.remove('translate-x-0');
        sidebarShowBtn.classList.remove('hidden'); // Show show button
        sidebarHideBtn.classList.add('hidden'); // Hide hide button
    });
}

// Ensure correct button visibility on page load (sidebar starts hidden)
// This part could be optionally added to the main theme check or here for clarity
document.addEventListener('DOMContentLoaded', function () {
    if (sidebar && sidebarShowBtn && sidebarHideBtn) {
        if (sidebar.classList.contains('-translate-x-full')) {
            sidebarShowBtn.classList.remove('hidden');
            sidebarHideBtn.classList.add('hidden');
        } else {
            sidebarShowBtn.classList.add('hidden');
            sidebarHideBtn.classList.remove('hidden');
        }
    }
});
