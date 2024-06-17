document.getElementById('contributionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const week = document.getElementById('week').value;
    const darp = parseFloat(document.getElementById('darp').value);
    const atharva = parseFloat(document.getElementById('atharva').value);
    const ahmad = parseFloat(document.getElementById('ahmad').value);
    const ranjan = parseFloat(document.getElementById('ranjan').value);

    const tableBody = document.getElementById('contributionTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const cellWeek = newRow.insertCell(0);
    const cellDarp = newRow.insertCell(1);
    const cellAtharva = newRow.insertCell(2);
    const cellAhmad = newRow.insertCell(3);
    const cellRanjan = newRow.insertCell(4);

    cellWeek.textContent = week;
    cellDarp.textContent = darp.toFixed(2);
    cellAtharva.textContent = atharva.toFixed(2);
    cellAhmad.textContent = ahmad.toFixed(2);
    cellRanjan.textContent = ranjan.toFixed(2);

    updateTotals(darp, atharva, ahmad, ranjan);

    document.getElementById('contributionForm').reset();
});

function updateTotals(darp, atharva, ahmad, ranjan) {
    const totalDarp = document.getElementById('totalDarp');
    const totalAtharva = document.getElementById('totalAtharva');
    const totalAhmad = document.getElementById('totalAhmad');
    const totalRanjan = document.getElementById('totalRanjan');

    totalDarp.textContent = (parseFloat(totalDarp.textContent) + darp).toFixed(2);
    totalAtharva.textContent = (parseFloat(totalAtharva.textContent) + atharva).toFixed(2);
    totalAhmad.textContent = (parseFloat(totalAhmad.textContent) + ahmad).toFixed(2);
    totalRanjan.textContent = (parseFloat(totalRanjan.textContent) + ranjan).toFixed(2);
}
