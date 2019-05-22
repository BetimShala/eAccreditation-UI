import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-chart-bar",
  templateUrl: "./chart-bar.component.html",
  styleUrls: ["./chart-bar.component.scss"]
})
export class ChartBarComponent implements OnInit {
  @ViewChild("canvas") canvasContext: ElementRef;

  @Input() headerName: string;

  @Input() freeColor: string;
  @Input() freeBorderColor: string;
  @Input() soldColor: string;
  @Input() soldBorderColor: string;
  @Input() borderWidth: number;
  @Input() labels: string;
  @Input() soldLabel: string;

  @Input() freeMetersData: any;
  @Input() initFreeMetersData: any;

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
      type: "bar",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "Total Meters",
            data: this.initFreeMetersData,
            backgroundColor: "#52BF8A"
          },
          {
            label: "Total Free Meters",
            data: this.freeMetersData,
            backgroundColor: "#638CA6"
          }
        ]
      },
      options: {
        legend: {
          display: true,
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
