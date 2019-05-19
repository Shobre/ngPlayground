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
import { BarChartComponent } from "./components/charts/bar-chart/bar-chart.component";
import { DoughnutChartComponent } from "./components/charts/doughnut-chart/doughnut-chart.component";
import { RadarChartComponent } from "./components/charts/radar-chart/radar-chart.component";
import { PieChartComponent } from "./components/charts/pie-chart/pie-chart.component";
import { ChartsPageComponent } from "./pages/charts-page/charts-page.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { CalendarPageComponent } from "./pages/calendar-page/calendar-page.component";
import { LineChartComponent } from "./components/charts/line-chart/line-chart.component";
import { PolarAreaChartComponent } from './components/charts/polar-area-chart/polar-area-chart.component';
import { HorizontalBarChartComponent } from './components/charts/horizontal-bar-chart/horizontal-bar-chart.component';

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
    HorizontalBarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    ChartsModule,
    MatCardModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
