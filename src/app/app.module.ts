import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { ChartsModule } from "ng2-charts";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import localeSv from "@angular/common/locales/sv";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeSv);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { StartPageComponent } from "./pages/start-page/start-page.component";
import { BarChartComponent } from "./pages/charts-page/charts/bar-chart/bar-chart.component";
import { DoughnutChartComponent } from "./pages/charts-page/charts/doughnut-chart/doughnut-chart.component";
import { RadarChartComponent } from "./pages/charts-page/charts/radar-chart/radar-chart.component";
import { PieChartComponent } from "./pages/charts-page/charts/pie-chart/pie-chart.component";
import { ChartsPageComponent } from "./pages/charts-page/charts-page.component";
import { CalendarComponent } from "./pages/calendar-page/calendar/calendar.component";
import { CalendarPageComponent } from "./pages/calendar-page/calendar-page.component";
import { LineChartComponent } from "./pages/charts-page/charts/line-chart/line-chart.component";
import { PolarAreaChartComponent } from "./pages/charts-page/charts/polar-area-chart/polar-area-chart.component";
import { HorizontalBarChartComponent } from "./pages/charts-page/charts/horizontal-bar-chart/horizontal-bar-chart.component";
import { GraphQLPageComponent } from "./pages/graph-ql-page/graph-ql-page.component";
import { HomeComponent } from "./pages/graph-ql-page/home/home.component";
import { PlayersComponent } from "./pages/graph-ql-page/players/players.component";
import { RankingComponent } from "./pages/graph-ql-page/ranking/ranking.component";
import { GraphQLModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartPageComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    ChartsPageComponent,
    CalendarComponent,
    CalendarPageComponent,
    LineChartComponent,
    PolarAreaChartComponent,
    HorizontalBarChartComponent,
    GraphQLPageComponent,
    HomeComponent,
    PlayersComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    ChartsModule,
    MatCardModule,
    MatInputModule,
    MatSortModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
