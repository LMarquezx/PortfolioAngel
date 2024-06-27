document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deselect all tabs
            tabs.forEach(t => {
                t.setAttribute('aria-selected', 'false');
            });
            // Hide all tab panels
            tabPanels.forEach(panel => {
                panel.hidden = true;
            });
            // Select the clicked tab
            tab.setAttribute('aria-selected', 'true');
            // Show the associated tab panel
            const panel = document.getElementById(tab.getAttribute('aria-controls'));
            panel.hidden = false;
        });
    });
});