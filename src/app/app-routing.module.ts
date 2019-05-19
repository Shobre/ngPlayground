import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartPageComponent } from "./pages/start-page/start-page.component";
import { ChartsPageComponent } from "./pages/charts-page/charts-page.component";
import { PieChartComponent } from "./components/charts/pie-chart/pie-chart.component";
import { RadarChartComponent } from "./components/charts/radar-chart/radar-chart.component";
import { BarChartComponent } from "./components/charts/bar-chart/bar-chart.component";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";
import { DoughnutChartComponent } from "./components/charts/doughnut-chart/doughnut-chart.component";
import { CalendarPageComponent } from "./pages/calendar-page/calendar-page.component";
import { PolarAreaChartComponent } from "./components/charts/polar-area-chart/polar-area-chart.component";
import { HorizontalBarChartComponent } from "./components/charts/horizontal-bar-chart/horizontal-bar-chart.component";

const routes: Routes = [
  { path: "", redirectTo: "start-page", pathMatch: "full" },
  {
    path: "start-page",
    component: StartPageComponent,
    data: { title: "Start page" }
  },
  {
    path: "charts",
    component: ChartsPageComponent,
    children: [
      { path: "", redirectTo: "bar", pathMatch: "full" },
      {
        path: "bar",
        component: BarChartComponent
      },
      {
        path: "doughnut",
        component: DoughnutChartComponent
      },
      {
        path: "pie",
        component: PieChartComponent
      },
      {
        path: "radar",
        component: RadarChartComponent
      },
      {
        path: "line",
        component: LineChartComponent
      },
      {
        path: "polar-area",
        component: PolarAreaChartComponent
      },
      {
        path: "horizontal-bar",
        component: HorizontalBarChartComponent
      }
    ]
  },
  {
    path: "calendar",
    component: CalendarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
