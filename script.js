document.addEventListener('DOMContentLoaded', (event) => {
    loadContributions();
    loadTotals();
});

document.getElementById('contributionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const week = document.getElementById('week').value;
    const darp = parseFloat(document.getElementById('darp').value);
    const atharva = parseFloat(document.getElementById('atharva').value);
    const ahmad = parseFloat(document.getElementById('ahmad').value);
    const ranjan = parseFloat(document.getElementById('ranjan').value);

    addContribution(week, darp, atharva, ahmad, ranjan);
    updateTotals(darp, atharva, ahmad, ranjan);

    document.getElementById('contributionForm').reset();
});

function addContribution(week, darp, atharva, ahmad, ranjan) {
    const contributions = getContributions();
    contributions.push({ week, darp, atharva, ahmad, ranjan });
    localStorage.setItem('contributions', JSON.stringify(contributions));
    renderContributions();
}

function getContributions() {
    const contributions = localStorage.getItem('contributions');
    return contributions ? JSON.parse(contributions) : [];
}

function renderContributions() {
    const contributions = getContributions();
    const tableBody = document.getElementById('contributionTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    contributions.forEach(contribution => {
        const newRow = tableBody.insertRow();

        const cellWeek = newRow.insertCell(0);
        const cellDarp = newRow.insertCell(1);
        const cellAtharva = newRow.insertCell(2);
        const cellAhmad = newRow.insertCell(3);
        const cellRanjan = newRow.insertCell(4);

        cellWeek.textContent = contribution.week;
        cellDarp.textContent = contribution.darp.toFixed(2);
        cellAtharva.textContent = contribution.atharva.toFixed(2);
        cellAhmad.textContent = contribution.ahmad.toFixed(2);
        cellRanjan.textContent = contribution.ranjan.toFixed(2);
    });
}

function updateTotals(darp, atharva, ahmad, ranjan) {
    const totalDarp = document.getElementById('totalDarp');
    const totalAtharva = document.getElementById('totalAtharva');
    const totalAhmad = document.getElementById('totalAhmad');
    const totalRanjan = document.getElementById('totalRanjan');

    totalDarp.textContent = (parseFloat(totalDarp.textContent) + darp).toFixed(2);
    totalAtharva.textContent = (parseFloat(totalAtharva.textContent) + atharva).toFixed(2);
    totalAhmad.textContent = (parseFloat(totalAhmad.textContent) + ahmad).toFixed(2);
    totalRanjan.textContent = (parseFloat(totalRanjan.textContent) + ranjan).toFixed(2);

    const totals = {
        darp: parseFloat(totalDarp.textContent),
        atharva: parseFloat(totalAtharva.textContent),
        ahmad: parseFloat(totalAhmad.textContent),
        ranjan: parseFloat(totalRanjan.textContent)
    };

    localStorage.setItem('totals', JSON.stringify(totals));
}

function loadContributions() {
    renderContributions();
}

function loadTotals() {
    const totals = JSON.parse(localStorage.getItem('totals')) || {
        darp: 0,
        atharva: 0,
        ahmad: 0,
        ranjan: 0
    };

    document.getElementById('totalDarp').textContent = totals.darp.toFixed(2);
    document.getElementById('totalAtharva').textContent = totals.atharva.toFixed(2);
    document.getElementById('totalAhmad').textContent = totals.ahmad.toFixed(2);
    document.getElementById('totalRanjan').textContent = totals.ranjan.toFixed(2);
}
