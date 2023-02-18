// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Coding',
        data: [12, 19, 3, 5, 2, 10, 8, 9.5, 15, 18, 20, 11],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: 'Development',
        data: [4, 6, 8, 9.5, 12, 4, 10, 18, 20, 7, 3, 26],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }, {
        label: 'Design',
        data: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 13],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }, {
        label: 'Project-Verification',
        data: [5, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 20],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }, {
        label: 'Spoken English',
        data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 9.5],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }, {
        label: 'Mock-Test',
        data: [10, 11, 9, 8, 11, 12, 13, 12, 14, 15, 16, 17],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
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



  //chart for applications//
  let applications = [
    { month: "January", count: 0, company: " " },
    { month: "February", count: 1, company: "XYZ Corp.(off-cumpus)"},
    { month: "March", count: 3, company: "Acme Ltd.(off-cumpus), TCS(off-cumpus), Infosis(On-cumpus)" },
    { month: "April", count: 1, company: "Adove(Off-cumpus)" },
    { month: "May", count: 0, company: " " },
    { month: "June", count: 1, company: "Goldmen Sachs(On-cumpus)" },
    { month: "July", count: 1, company: "Trilogy Inovations(Off-cumpus), Deloitte(On-cumpus)" },
    { month: "August", count: 4, company: "Amazon(On-cumpus), Aryaka(On-cumpus), Digi(On-cumpus), number-Theoy(On-cumpus)" },
    { month: "September", count: 2, company: "Atyati(On-cumpus), Genpact(On-cumpus)" },
    { month: "October", count: 2, company: "MAQ Software(On-cumpus), Amdocs(On-cumpus)" },
    { month: "November", count: 2, company: "Sarotech(On-cumpus), Nokia(On-cumpus)" },
    { month: "December", count: 1, company: "Netmed.com(On-cumpus)" },
  ];

  // Get the canvas element for applications-chart
const applicationsChart = document.getElementById("applications-chart");

// Get the data for the chart
const applicationsData = {
  labels: applications.map(app => app.month),
  datasets: [{
    label: "Applications for FTE",
    data: applications.map(app => app.count),
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"],
    borderWidth: 1
  }]
};

// Get the options for the chart
const applicationsOptions = {
  title: {
    display: true,
    text: "Applications for FTE"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  legend: {
    position: "bottom"
  },
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        const label = data.datasets[tooltipItem.datasetIndex].label || "";
        const company = applications[tooltipItem.index].company || "";
        const count = tooltipItem.yLabel;
        return `${label}: ${count} (${company})`;
      }
    }
  }
};

// Create the chart
const myApplicationsChart = new Chart(applicationsChart, {
  type: "bar",
  data: applicationsData,
  options: applicationsOptions
});



//chart for interships//
let internships = [
    { month: "January", count: 1, company: "A" },
    { month: "February", count: 2, company: "A, B" },
    { month: "March", count: 0, company: " " },
    { month: "April", count: 2, company: "A, B" },
    { month: "May", count: 4, company: "A, B, C, D" },
    { month: "June", count: 3, company: "A, B, C" },
    { month: "July", count: 2, company: "A, B" },
    { month: "August", count: 1, company: "A" },
    { month: "September", count: 0, company: "" },
    { month: "October", count: 4, company: "XYZ, ABC, EFG, KLR" },
    { month: "November", count: 3, company: "ABC, TYU, OPO" },
    { month: "December", count: 2, company: "OPPO, VIVO" },
    ];

    // Get the canvas element for internships-chart
const internshipsChart = document.getElementById("Internships-chart");

// Get the data for the chart
const internshipsData = {
    labels: internships.map(app => app.month),
    datasets: [{
        label: "Internships Applied",
        data: internships.map(app => app.count),
        backgroundColor:  ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1
      }]
    };

    // Get the options for the chart
const internshipsOptions = {
    title: {
        display: true,
        text: "Internships Applied"
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true   
            }
        }]
    },
    legend: {
        position: "bottom"
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                const label = data.datasets[tooltipItem.datasetIndex].label || "";
                const company = internships[tooltipItem.index].company || "";
                const count = tooltipItem.yLabel;
                return `${label}: ${count} (${company})`;
            }
        }
    }
};

// Create the chart
const myInternshipsChart = new Chart(internshipsChart, {
    type: "bar",
    data: internshipsData,
    options: internshipsOptions
});


// make the chart responsive
window.addEventListener("resize", function() {
    myApplicationsChart.resize();
    myInternshipsChart.resize();
});


//chart for interview//

let interviews = [
    { month: "January", count: 0, company: " " },
    { month: "February", count: 1, company: "XYZ Corp.(off-cumpus)"},
    { month: "March", count: 3, company: "Acme Ltd.(off-cumpus), TCS(off-cumpus), Infosis(On-cumpus)" },
    { month: "April", count: 1, company: "Adove(Off-cumpus)" },
    { month: "May", count: 0, company: " " },
    { month: "June", count: 1, company: "Goldmen Sachs(On-cumpus)" },
    { month: "July", count: 1, company: "Trilogy Inovations(Off-cumpus), Deloitte(On-cumpus)" },
    { month: "August", count: 4, company: "Amazon(On-cumpus), Aryaka(On-cumpus), Digi(On-cumpus), number-Theoy(On-cumpus)" },
    { month: "September", count: 0, company: "" },
    { month: "October", count: 0, company: "" },
    { month: "November", count: 0, company: "" },
    { month: "December", count: 0, company: "" },
];

// Get the canvas element for interviews-chart
const interviewsChart = document.getElementById("interviews-chart");

// Get the data for the chart
const interviewsData = {
    labels: interviews.map(app => app.month),
    datasets: [{
        label: "Interviews",
        data: interviews.map(app => app.count),
        backgroundColor:   ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1
      }]
    };

    // Get the options for the chart
const interviewsOptions = {
    title: {
        display: true,
        text: "Interviews"
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        position: "bottom"
    },
    tooltips: {
        callbacks: {
            label: function(tooltipItem, data) {
                const label = data.datasets[tooltipItem.datasetIndex].label || "";
                const company = interviews[tooltipItem.index].company || "";
                const count = tooltipItem.yLabel;
                return `${label}: ${count} (${company})`;
            }
        }
    }
};

// Create the chart
const myInterviewsChart = new Chart(interviewsChart, {
    type: "line",
    data: interviewsData,
    options: interviewsOptions
});
