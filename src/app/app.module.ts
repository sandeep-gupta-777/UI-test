import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {Route, Router, RouterModule} from "@angular/router";
import {NotfoundComponent} from "./notfound/notfound.component";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AuthService} from "./auth.service";
import {ServerService} from "./server.service";
import {HelperService} from "./helper.service";
import {AppVariablesService} from "./appVariables.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {DashboardComponent} from './dashboard/dashboard.component';
// import {GridComponent} from './grid/grid.component';
// import {OrderDisplayComponent} from './order-display/order-display.component';
// import {OrderDetailsComponent} from './order-details/order-details.component';
import {HomepageComponent} from './homepage/homepage.component';
import {RouterGaurdServiceService} from "./router-gaurd-service.service";
// import {TimelineComponent} from './timeline/timeline.component';
// import {EditorComponent} from './editor/editor.component';
// import {NewOrderComponent} from './new-order/new-order.component';
// import {PriceComponent} from './price/price.component';
import {PlanCardsComponent} from './plan-detail-dir/plan-cards/plan-cards.component';
import {PlanDetailsComponent} from './plan-detail-dir/plan-details/plan-details.component';
import {PrettyprintPipe} from './prettyprint.pipe';
import {PlanDetailsWrapperComponent} from './plan-detail-dir/plan-details-wrapper/plan-details-wrapper.component';
import { PlanDataComponent } from './plan-detail-dir/plan-data/plan-data.component';
import { PlanConfigComponent } from './plan-detail-dir/plan-config/plan-config.component';
import { TableComponent } from './utility/table/table.component';
import { TableRowComponent } from './utility/table-row/table-row.component';
import {AdventureTimeService} from "./advenduture-time.service";
import { PlansComponent } from './plan-detail-dir/plans/plans.component';
import { PlanOptionsComponent } from './plan-detail-dir/plan-options/plan-options.component';

const routes: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {path: '', redirectTo:'plans', pathMatch:'prefix'},
      {path: 'plans', component: PlansComponent},
      /*TODO: can this repetition be avoided?*/
      {path: 'plans/:plan_id', component: PlanDetailsWrapperComponent, children:[
          {path: '', component: PlanOptionsComponent},
          {path: 'data/:time', component: PlanDataComponent},
          {path: 'config/:time', component: PlanConfigComponent},
      ]},

    ]
  },
  {path: '', component: HomepageComponent},
  {path: '**', component: NotfoundComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    // GridComponent,
    // OrderDisplayComponent,
    // OrderDetailsComponent,
    HomepageComponent,
    // ImageEditComponent,
    // TimelineComponent,
    // EditorComponent,
    // NewOrderComponent,
    // PriceComponent,
    PlanCardsComponent,
    PlanDetailsComponent,
    PrettyprintPipe,
    PlanDetailsWrapperComponent,
    PlanDataComponent,
    PlanConfigComponent,
    TableComponent,
    TableRowComponent,
    PlansComponent,
    PlanOptionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    ServerService,
    HelperService,
    AppVariablesService,
    RouterGaurdServiceService,
    AdventureTimeService
  ],
  bootstrap: [
    AppComponent

  ]
})
export class AppModule {
}
