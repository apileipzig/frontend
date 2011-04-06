var chart;
$(document).ready(function() {
    chart = new Highcharts.Chart({
      chart: {
        renderTo: 'stats-container',
        defaultSeriesType: 'bar'
      },
      title: {
        text: 'Nutzungsstatistik'
      },
      xAxis: {
        categories: stats_user_array
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Nutzung der verschiedenen Datentabellen'
        }
      },
      legend: {
        backgroundColor: '#FFFFFF',
        reversed: true
      },
      tooltip: {
        formatter: function() {
          return ''+
          this.series.name +': '+ this.y +'';
        }
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: stats_data_series_array
  });
});
