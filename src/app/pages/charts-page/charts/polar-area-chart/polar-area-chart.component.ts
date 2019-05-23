import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-polar-area-chart",
  templateUrl: "./polar-area-chart.component.html",
  styleUrls: ["./polar-area-chart.component.scss"]
})
export class PolarAreaChartComponent implements OnInit {
  chartType: string = "polarArea";

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: "Account A" },
    { data: [120, 455, 100, 340], label: "Account B" },
    { data: [45, 67, 800, 500], label: "Account C" }
  ];

  chartLabels = ["January", "February", "Mars", "April"];

  onChartClick(event) {
    console.log(event);
  }

  constructor() {}

  ngOnInit() {}
}
