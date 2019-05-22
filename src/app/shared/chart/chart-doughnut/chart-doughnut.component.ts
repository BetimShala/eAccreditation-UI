import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-chart-doughnut",
  templateUrl: "./chart-doughnut.component.html",
  styleUrls: ["./chart-doughnut.component.scss"]
})
export class ChartDoughnutComponent implements OnInit {
  @ViewChild("canvas") canvasContext: ElementRef;

  @Input() headerName: string;
  @Input() freePercend: string;
  @Input() soldPercend: string;

  @Input() freeColor: string;
  @Input() freeBorderColor: string;
  @Input() soldColor: string;
  @Input() soldBorderColor: string;
  @Input() borderWidth: number;
  @Input() freeLabel: string;
  @Input() soldLabel: string;

  @Input() freeMetersData: any;
  @Input() percendData: number;

  @Input() legend: boolean;
  @Input() legendPosition: string;

  public chart: Chart;

  constructor() {}

  ngOnInit() {
    this.getChart();
  }

  getChart() {
    let context = this.canvasContext.nativeElement;

    this.chart = new Chart(context, {
      type: "doughnut",
      data: {
        labels: [this.freeLabel, this.soldLabel],
        datasets: [
          {
            data: [this.freeMetersData, this.percendData],
            backgroundColor: [this.freeColor, this.soldColor],
            borderWidth: this.borderWidth
          }
        ]
      },
      options: {
        legend: {
          display: false,
          position: this.legendPosition,
          fullWidth: true,
          labels: {
            boxWidth: 10,
            fontSize: 14
          }
        },
        scals: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
