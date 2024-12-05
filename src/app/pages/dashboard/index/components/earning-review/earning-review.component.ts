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
      chart: {
        type: 'area',
      },
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      curve: 'smooth',
      colors: ["#a400aa", "#8930c0"],
      color:'white',
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
     
    };
    var options2 = {
      chart: {
        type: 'bar',
      },
       foreColor:'white',
      series: [{
        data: [{
          x: 'category A',
          y: 10
        }, {
          x: 'category B',
          y: 18
        }, {
          x: 'category C',
          y: 13
        }]
      }],
      colors:["#a400aa","#8930c0"],
   
    };
    var chart = new ApexCharts(document.querySelector('#lineChart'), options);
    var donutchart = new ApexCharts(document.querySelector('#donutChart'), options2);
    chart.render();
    donutchart.render()
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
