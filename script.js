let totalIncome = 0;
let totalExpenses = 0;

function addEntry() {
    let incomeInput = document.getElementById("income").value;
    let expenseInput = document.getElementById("expense").value;

    if (incomeInput) {
        totalIncome += parseFloat(incomeInput);
    }
    
    if (expenseInput) {
        totalExpenses += parseFloat(expenseInput);
    }

    document.getElementById("totalIncome").innerText = totalIncome;
    document.getElementById("totalExpenses").innerText = totalExpenses;
    document.getElementById("savings").innerText = totalIncome - totalExpenses;

    document.getElementById("income").value = "";
    document.getElementById("expense").value = "";

    updateChart();
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

