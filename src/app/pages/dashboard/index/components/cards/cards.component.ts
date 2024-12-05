import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
@Component({
  selector: 'dashboard-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  ngOnInit(): void {
    this.chartsInit();
  }
  private randomizeArray = function (arg: any) {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  chartsInit() {
    var sparklineData = [
      47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
      61, 27, 54, 43, 19, 46,
    ];
    var colorPalette = ['#00D8B6', '#008FFB', '#FEB019', '#FF4560', '#775DD0'];

    var spark1 = {
    
      chart: {
        id: 'sparkline1',
        group: 'sparklines',
        foreColor:'white',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 1,
      },
      series: [
        {
          name: 'Sales',
          data: this.randomizeArray(sparklineData),
        },
      ],
      labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
      yaxis: {
        min: 0,
      },
      xaxis: {
        type: 'datetime',
      },
      colors: ['#03e3fc'],
      title: {
      
        text: '$424,652',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      subtitle: {
        text: 'Sales',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
    };

    var spark2 = {
      chart: {
        id: 'sparkline2',
        group: 'sparklines',
        type: 'area',
        height: 160,
        foreColor:'white',
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 1,
      },
      series: [
        {
          name: 'Expenses',
          data: this.randomizeArray(sparklineData),
        },
      ],
      labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
      yaxis: {
        min: 0,
      },
      
      xaxis: {
        type: 'datetime',
      },
      colors: ['#03e3fc'],
      title: {
        text: '$235,312',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      subtitle: {
        text: 'Expenses',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
    };

    var spark3 = {
      chart: {
        id: 'sparkline3',
        group: 'sparklines',
        foreColor:'white',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 1,
      },
      series: [
        {
          name: 'Profits',
          data: this.randomizeArray(sparklineData),
        },
      ],
      labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        min: 0,
      },
      colors: ['#03e3fc'],
      //colors: ['#5564BE'],
      title: {
        text: '$135,965',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      subtitle: {
        text: 'Profits',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
    };
    var spark4 = {
      chart: {
        id: 'sparkline4',
        group: 'sparklines',
        foreColor:'white',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true,
          
        },
      },
      stroke: {
        curve: 'straight',
      },
      fill: {
        opacity: 1,
      },
      series: [
        {
          name: 'Students',
          data: this.randomizeArray(sparklineData),
        },
      ],
      labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        min: 0,
      },
      colors: ['#03e3fc'],
      //colors: ['#5564BE'],
      title: {
        text: '160',
        offsetX: 30,
        style: {
          fontSize: '24px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      subtitle: {
        text: 'Students',
        offsetX: 30,
        style: {
          fontSize: '14px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
    };

    new ApexCharts(document.querySelector('#spark1'), spark1).render();
    new ApexCharts(document.querySelector('#spark2'), spark2).render();
    new ApexCharts(document.querySelector('#spark3'), spark3).render();
    new ApexCharts(document.querySelector('#spark4'), spark4).render();
  }
}
