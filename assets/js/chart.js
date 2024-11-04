
const data = {
  labels: [
  ],
  datasets: [{
    data: [83.14, 16.86],
    backgroundColor: [
      'rgb(32, 132, 250)',
      'rgba(54, 162, 235, 0)',
    ],
    hoverOffset: 4
  }]
};
const config = {
  type: 'doughnut',
  data: data,
  options: {
  	responsive: true,
	  elements: {
      center: {
        text: 'Red is 2/3 the total numbers',
        color: '#FF6384', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25 // Default is 25 (in px), used for when text wraps
      },
      arc: {
          borderWidth: 0
      }
	  },
	  cutoutPercentage: 20
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);