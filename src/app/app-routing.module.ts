import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartPageComponent } from "./pages/start-page/start-page.component";
import { ChartsPageComponent } from "./pages/charts-page/charts-page.component";
import { GraphQLPageComponent } from "./pages/graph-ql-page/graph-ql-page.component";
import { PieChartComponent } from "./pages/charts-page/charts/pie-chart/pie-chart.component";
import { RadarChartComponent } from "./pages/charts-page/charts/radar-chart/radar-chart.component";
import { BarChartComponent } from "./pages/charts-page/charts/bar-chart/bar-chart.component";
import { LineChartComponent } from "./pages/charts-page/charts/line-chart/line-chart.component";
import { DoughnutChartComponent } from "./pages/charts-page/charts/doughnut-chart/doughnut-chart.component";
import { CalendarPageComponent } from "./pages/calendar-page/calendar-page.component";
import { PolarAreaChartComponent } from "./pages/charts-page/charts/polar-area-chart/polar-area-chart.component";
import { HorizontalBarChartComponent } from "./pages/charts-page/charts/horizontal-bar-chart/horizontal-bar-chart.component";
import { HomeComponent } from "./pages/graph-ql-page/home/home.component";
import { RankingComponent } from "./pages/graph-ql-page/ranking/ranking.component";
import { PlayersComponent } from "./pages/graph-ql-page/players/players.component";

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
  },
  {
    path: "graphql",
    component: GraphQLPageComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "players",
        component: PlayersComponent
      },
      {
        path: "ranking",
        component: RankingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
