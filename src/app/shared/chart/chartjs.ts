import { Chart } from "chart.js";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ChartJs {
  constructor() { }
  chart: Chart;

  show(
    type: string,
    context: any,
    dataLabels: any,
    data: any,
    dataSetsLabels: any,
    backgroundColor: any
  ) {
    this.chart = new Chart(context, {
      type: type,
      data: {
        labels: dataLabels,
        datasets: [
          {
            label: dataSetsLabels,
            data: data,
            backgroundColor: backgroundColor
          }
        ]
      },
      options: {
        scaleShowValues: true,
        scales: {
          xAxes: [{
            stacked: false,
            beginAtZero: true,
            scaleLabel: {
              labelString: 'Month'
            },
            ticks: {
              stepSize: 1,
              min: 0,
              autoSkip: false
            }
          }]
        }
      }
    });
  }
}
