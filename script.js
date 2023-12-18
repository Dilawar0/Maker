document.addEventListener("DOMContentLoaded", function () {
    createTimetable();
});

function createTimetable() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const times = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

    const timetableContainer = document.getElementById('timetable');
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');

    // Create table headers
    const emptyHeader = document.createElement('th');
    headerRow.appendChild(emptyHeader);

    for (const day of days) {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    // Create table cells
    for (const time of times) {
        const row = document.createElement('tr');

        // Time column
        const timeCell = document.createElement('td');
        timeCell.textContent = time;
        row.appendChild(timeCell);

        // Day columns
        for (const day of days) {
            const td = document.createElement('td');
            td.setAttribute('contenteditable', 'true'); // Make cells editable
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    timetableContainer.appendChild(table);
}

function clearTimetable() {
    const cells = document.querySelectorAll('#timetable td');
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
