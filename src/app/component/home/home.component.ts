import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { ChartJs } from "src/app/shared/chart/chartjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chart: Chart;
  @ViewChild("accreditedProgramsChart")
  accreditedProgramsChart: ElementRef;
  @ViewChild("academicStaffCommitmentsChart")
  academicStaffCommitmentsChart: ElementRef;

  constructor(private chartjs: ChartJs) { }


  ngOnInit() {
    this.showAccreditedProgramsChart();
    this.showAcademicStaffCommitmentsChart();
  }

  showAccreditedProgramsChart(){
    var pdata = [48,50,121]
    let context = this.accreditedProgramsChart.nativeElement;
    this.chart = new Chart(context, {
      type: 'doughnut',
      data: {
        labels: ['2016','2017','2018'],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#ffc107",
            "#17a2b8"
          ],
          data: pdata
        }]
      },
      options: {
        title: {
          display: true,
        },
        responsive: true,
        tooltips: {
          callbacks: {
            afterLabel: function (tooltipItem, data) {
              var dataset = data['datasets'][0];
              var percent = dataset['data'][tooltipItem['index']]
              return '(' + percent + '%)';
            }
          },
        }
      }
    })
  }

  showAcademicStaffCommitmentsChart(){
    var pdata = [32.2,67.8]
    let context = this.academicStaffCommitmentsChart.nativeElement;
    this.chart = new Chart(context, {
      type: 'doughnut',
      data: {
        labels: ['Full Time','Part Time'],
        datasets: [{
          backgroundColor: [
            "#FF0000",
            "#1E90FF",
          ],
          data: pdata
        }]
      },
      options: {
        title: {
          display: true,
        },
        responsive: true,
        tooltips: {
          callbacks: {
            afterLabel: function (tooltipItem, data) {
              var dataset = data['datasets'][0];
              var percent = dataset['data'][tooltipItem['index']]
              return '(' + percent + '%)';
            }
          },
        }
      }
    })
  }
}


