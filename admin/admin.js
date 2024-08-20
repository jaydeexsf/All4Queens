// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.content');
    const monthButtons = document.querySelectorAll('.month-button');
    const weekButtons = document.querySelectorAll('.week-button');
    const employeeList = document.getElementById('employeeList');
    const clientSchedule = document.getElementById('clientSchedule');

    let clients = {
        "January": {
            "Week 1": ["Client A", "Client B"],
            "Week 2": [],
            "Week 3": ["Client C"],
            "Week 4": ["Client D", "Client E"]
        },
        "February": {
            "Week 1": [],
            "Week 2": ["Client F"],
            "Week 3": ["Client G"],
            "Week 4": "Client H"
        },
        // Add more months and weeks with clients
    };

    // Toggle Sidebar
    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
    });

    // Handle Menu Item Clicks
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Highlight active menu
            menuItems.forEach(i => i.classList.remove('bg-gray-900'));
            item.classList.add('bg-gray-900');

            // Show corresponding content
            const targetContent = document.getElementById(`${item.id.replace('Menu', 'Content')}`);
            contentSections.forEach(section => section.classList.add('hidden'));
            targetContent.classList.remove('hidden');
        });
    });

    // Handle Month Clicks
    monthButtons.forEach(button => {
        button.addEventListener('click', () => {
            const month = button.dataset.month;
            const weekTitle = document.getElementById('weekTitle');
            weekTitle.textContent = `${month} Weeks Overview`;

            // Show the week overview section
            contentSections.forEach(section => section.classList.add('hidden'));
            document.getElementById('weekOverview').classList.remove('hidden');

            // Update week buttons and client schedule
            weekButtons.forEach(weekButton => {
                weekButton.addEventListener('click', () => {
                    const week = weekButton.dataset.week;
                    displayClients(month, week);
                });
            });
        });
    });

    // Function to display clients for a selected week
    function displayClients(month, week) {
        clientSchedule.innerHTML = ''; // Clear previous schedule

        if (clients[month] && clients[month][week]) {
            clients[month][week].forEach((client, index) => {
                const clientDiv = document.createElement('div');
                clientDiv.textContent = client;
                clientDiv.classList.add('p-4', 'rounded', 'text-white', `bg-color-${index % 5}`);
                clientSchedule.appendChild(clientDiv);
            });
        } else {
            clientSchedule.textContent = 'No clients scheduled for this week.';
        }
    }

    // Example for dynamically adding employees
    document.getElementById('addEmployee').addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = `Employee ${employeeList.children.length + 1}`;
        employeeList.appendChild(li);
    });

    // Add custom colors for client backgrounds
    const style = document.createElement('style');
    style.textContent = `
        .bg-color-0 { background-color: #FF6B6B; }
        .bg-color-1 { background-color: #6BCB77; }
        .bg-color-2 { background-color: #4D96FF; }
        .bg-color-3 { background-color: #FFD93D; }
        .bg-color-4 { background-color: #9D4EDD; }
    `;
    document.head.appendChild(style);
});
