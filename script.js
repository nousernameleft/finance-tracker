// Load saved data from localStorage (if available)
let totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
let totalExpenses = parseFloat(localStorage.getItem('totalExpenses')) || 0;

// Update the displayed values and chart
function updateUI() {
    document.getElementById("totalIncome").innerText = totalIncome.toFixed(2);
    document.getElementById("totalExpenses").innerText = totalExpenses.toFixed(2);
    document.getElementById("savings").innerText = (totalIncome - totalExpenses).toFixed(2);

    // Update chart
    updateChart();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('totalIncome', totalIncome);
    localStorage.setItem('totalExpenses', totalExpenses);
}

// Add income or expense entry
function addEntry() {
    let incomeInput = document.getElementById("income").value;
    let expenseInput = document.getElementById("expense").value;

    // Validate inputs
    if (incomeInput) {
        totalIncome += parseFloat(incomeInput);
    }
    
    if (expenseInput) {
        totalExpenses += parseFloat(expenseInput);
    }

    // Clear inputs
    document.getElementById("income").value = "";
    document.getElementById("expense").value = "";

    // Update the displayed values
    updateUI();
    
    // Save to localStorage
    saveData();
}

// Chart.js for visualization
function updateChart() {
    let ctx = document.getElementById("chart").getContext("2d");

    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Income", "Expenses"],
            datasets: [{
                data: [totalIncome, totalExpenses],
                backgroundColor: ["#28a745", "#dc3545"]
            }]
        }
    });
}

// Reset data
function resetData() {
    totalIncome = 0;
    totalExpenses = 0;
    localStorage.removeItem('totalIncome');
    localStorage.removeItem('totalExpenses');
    
    updateUI();
}

// Initialize the app by updating the UI
updateUI();
