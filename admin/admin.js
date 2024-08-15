document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const adminSection = document.getElementById('admin-section');
    const loginForm = document.getElementById('login-form');
    const clientForm = document.getElementById('client-form');
    const clientsList = document.getElementById('clients-list');

    // Simulate an admin password
    const ADMIN_PASSWORD = 'admin123';

    // Handle login
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const password = document.getElementById('password').value;
        if (password === ADMIN_PASSWORD) {
            loginSection.classList.add('hidden');
            adminSection.classList.remove('hidden');
        } else {
            alert('Invalid password');
        }
    });

    // Handle client form submission
    clientForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const clientName = document.getElementById('client-name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const service = document.getElementById('service').value;

        // Create client object
        const client = {
            name: clientName,
            date: new Date(date),
            time,
            service
        };

        // Add client to table
        addClientToTable(client);

        // Clear form
        clientForm.reset();
    });

    function addClientToTable(client) {
        const rows = Array.from(clientsList.querySelectorAll('tr'));
        const index = rows.findIndex(row => {
            const rowDate = new Date(row.querySelector('.date').textContent);
            return client.date < rowDate || (client.date.toDateString() === rowDate.toDateString() && client.time < row.querySelector('.time').textContent);
        });

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td class="p-2 border-b date">${client.date.toISOString().split('T')[0]}</td>
            <td class="p-2 border-b time">${client.time}</td>
            <td class="p-2 border-b">${client.name}</td>
            <td class="p-2 border-b">${client.service}</td>
        `;

        if (index === -1) {
            clientsList.appendChild(newRow);
        } else {
            clientsList.insertBefore(newRow, rows[index]);
        }
    }
});
