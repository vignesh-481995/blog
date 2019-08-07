import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';

window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-thanksComponent
import { thanksComponent } from '../components/thanksComponent/thanks.component';
//CORE_REFERENCE_IMPORT-investmentriskComponent
import { investmentriskComponent } from '../components/investmentriskComponent/investmentrisk.component';
//CORE_REFERENCE_IMPORT-existinginvestmentsComponent
import { existinginvestmentsComponent } from '../components/existinginvestmentsComponent/existinginvestments.component';
//CORE_REFERENCE_IMPORT-dependantsdetailComponent
import { dependantsdetailComponent } from '../components/dependantsdetailComponent/dependantsdetail.component';
//CORE_REFERENCE_IMPORT-personalinformationComponent
import { personalinformationComponent } from '../components/personalinformationComponent/personalinformation.component';
//CORE_REFERENCE_IMPORT-dashboardcontentComponent
import { dashboardcontentComponent } from '../components/dashboardcontentComponent/dashboardcontent.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboardComponent/dashboard.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-thanksComponent
thanksComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-investmentriskComponent
investmentriskComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-existinginvestmentsComponent
existinginvestmentsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dependantsdetailComponent
dependantsdetailComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-personalinformationComponent
personalinformationComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardcontentComponent
dashboardcontentComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
dashboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'Login', component: loginComponent},{path: 'Home', component: homeComponent,
children: [{path: 'Dashboard', component: dashboardComponent},{path: 'PersonalInfo', component: personalinformationComponent},{path: 'DependantsDetail', component: dependantsdetailComponent},{path: 'ExistingInvestment', component: existinginvestmentsComponent},{path: 'InvestmentRisk', component: investmentriskComponent}]},{path: 'Dash', component: dashboardComponent},{path: 'personinfos', component: personalinformationComponent},{path: '', redirectTo: '/Login', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
