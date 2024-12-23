import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
@Component({
  selector: 'dashboard-earning-review',
  templateUrl: './earning-review.component.html',
  styleUrl: './earning-review.component.scss',
})
export class EarningReviewComponent implements OnInit {
  ngOnInit(): void {
    var options = {
      series: [
        {
          name: 'sales',
          data: [
            {
              x: '2019/01/01',
              y: 400,
            },
            {
              x: '2019/04/01',
              y: 430,
            },
            {
              x: '2019/07/01',
              y: 448,
            },
            {
              x: '2019/10/01',
              y: 470,
            },
            {
              x: '2020/01/01',
              y: 540,
            },
            {
              x: '2020/04/01',
              y: 580,
            },
            {
              x: '2020/07/01',
              y: 690,
            },
            {
              x: '2020/10/01',
              y: 690,
            },
          ],
        },
      ],
      chart: {
        animations: {
          enabled: true,
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        fillColor: '#EB8C87',
        width: '100%',
        type: 'bar',

        border: 'none',
        height: 380,
      },
      theme: {
        palette: 'palette10',
        monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      xaxis: {
        type: 'category',
        labels: {
          formatter: function (val: any) {
            return 'Q' + 2;
          },
        },
        group: {
          style: {
            fontSize: '10px',
            fontWeight: 700,
          },
          groups: [
            { title: '2019', cols: 4 },
            { title: '2020', cols: 4 },
          ],
        },
      },
      title: {
        text: 'Grouped Labels on the X-axis',
      },
      tooltip: {
        x: {
          formatter: function (val: any) {
            return 'Q' + 2 + ' ' + 2;
          },
        },
      },
      grid: {
        show: false,
      },
    };

    var options2 = {
      chart: {
        type: 'donut',
        colors: ['#F44336', '#E91E63'],
        height:"100%"
      },
      // options: {
      //   plotOptions: {
      //     pie: {
      //       customScale: 0.7,
      //     },
      //   },
      // },
      theme: {
        palette: 'palette10',
        monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      series: [86, 14],
      chartOptions: {
        labels: ['Egypt', 'Turkey'],
      },
    };
    var chart = new ApexCharts(document.querySelector('#lineChart'), options);
    var donutchart = new ApexCharts(
      document.querySelector('#donutChart'),
      options2,
    );
    chart.render();
    donutchart.render();
    // const data = [
    //   { month: 2010, count: 10 },
    //   { month: 2011, count: 20 },
    //   { month: 2012, count: 15 },
    //   { month: 2013, count: 25 },
    //   { month: 2014, count: 22 },
    //   { month: 2015, count: 30 },
    //   { month: 2016, count: 28 },
    // ];

    // new Chart(document.getElementById('myChart') as ChartItem, {
    //   type: 'bar',
    //   data: {
    //     labels: data.map((row) => row.month),
    //     datasets: [
    //       {
    //         label: 'Earning By Month',
    //         data: data.map((row) => row.count),
    //       },
    //     ],
    //   },
    //   options: {
    //     backgroundColor: '#8930c0',
    //   },
    // });
  }
}
