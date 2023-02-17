// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    // labels: ['Coding', 'Development', 'Design', 'Mock-Test', 'Project-Verification', 'CS-Subjects',],
    datasets: [{
      label: 'Improvement',
      data: [12, 19, 3, 5, 2, 10, 8, 9.5, 15, 18, 20, 11],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});