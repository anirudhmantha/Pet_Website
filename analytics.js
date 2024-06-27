document.addEventListener('DOMContentLoaded', function () {
    const ctxSalesOverview = document.getElementById('salesOverviewChart').getContext('2d');
    const ctxMonthlySales = document.getElementById('monthlySalesChart').getContext('2d');
    const ctxReviews = document.getElementById('reviewsChart').getContext('2d');

    new Chart(ctxSalesOverview, {
        type: 'bar',
        data: {
            labels: ['Dog Dry Food', 'Dog Wet Food', 'Cat Dry Food', 'Cat Wet Food', 'Dog Toys', 'Cat Toys'],
            datasets: [{
                label: 'Sales (in units)',
                data: [1200, 850, 900, 650, 300, 450],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ],
                borderColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales (in units)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return 'Sales: ' + context.raw + ' units';
                        }
                    }
                }
            }
        }
    });

    new Chart(ctxMonthlySales, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Dog Foods',
                    data: [120, 150, 180, 200, 150, 130, 170, 210, 190, 230, 220, 250],
                    borderColor: '#FF6384',
                    fill: false,
                    tension: 0.1
                },
                {
                    label: 'Cat Foods',
                    data: [100, 130, 160, 190, 140, 120, 160, 180, 170, 200, 190, 220],
                    borderColor: '#36A2EB',
                    fill: false,
                    tension: 0.1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales (in units)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.raw + ' units';
                        }
                    }
                }
            }
        }
    });

    new Chart(ctxReviews, {
        type: 'bar',
        data: {
            labels: ['Dog Dry Food', 'Dog Wet Food', 'Cat Dry Food', 'Cat Wet Food', 'Dog Toys', 'Cat Toys'],
            datasets: [
                {
                    label: 'Positive Reviews',
                    data: [150, 120, 130, 110, 80, 90],
                    backgroundColor: '#4CAF50'
                },
                {
                    label: 'Neutral Reviews',
                    data: [30, 20, 25, 15, 10, 15],
                    backgroundColor: '#FFC107'
                },
                {
                    label: 'Negative Reviews',
                    data: [10, 15, 5, 10, 5, 3],
                    backgroundColor: '#F44336'
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Reviews'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.raw;
                        }
                    }
                }
            }
        }
    });
});
