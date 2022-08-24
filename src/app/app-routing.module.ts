
import { TermsAndConditionComponent } from './pages/About/terms-and-condition/terms-and-condition.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMassDataComponent } from './pages/About/about-mass-data/about-mass-data.component';
import { RefundAndReturnPolicyComponent } from './pages/About/refund-and-return-policy/refund-and-return-policy.component';
import { HomeMainComponent } from './pages/Home/home-main/home-main.component';
import { PrivacyPolicyComponent } from './pages/About/privacy-policy/privacy-policy.component';
import { HostingPrivacyPolicyComponent } from './pages/Hosting/hosting-privacy-policy/hosting-privacy-policy.component';
import { ServiceLevelArgeeComponent } from './pages/Hosting/service-level-argee/service-level-argee.component';
import { TermsOfServiceComponent } from './pages/Hosting/terms-of-service/terms-of-service.component';
import { TocComponent } from './pages/Hosting/toc/toc.component';
import { PluginsComponent } from './pages/Plugins/plugins/plugins.component';
import { SanitaryManagementSystemComponent } from './pages/Services/sanitary-management-system/sanitary-management-system.component';
import { SoftSolutionForIndustryComponent } from './pages/Solutions/soft-solution-for-industry/soft-solution-for-industry.component';
import { SupplyChainManSystemComponent } from './pages/Solutions/supply-chain-man-system/supply-chain-man-system.component';
import { CustomEcomWebsiteComponent } from './pages/Solutions/custom-ecom-website/custom-ecom-website.component';
import { SeoComponent } from './pages/Service/seo/seo.component';

const routes: Routes = [
  {path:"", component:HomeMainComponent},
  {path:"about-us", component:AboutMassDataComponent},
  {path:"refund-and-return-policy", component:RefundAndReturnPolicyComponent},
  {path:"terms-and-conditions", component:TermsAndConditionComponent},
  {path:"privacy-policy", component:PrivacyPolicyComponent},
  {path:"hosting-terms-of-service-tos", component:TocComponent},
  {path:"hosting-service-level-agreement", component:ServiceLevelArgeeComponent},
  {path:"hosting-privacy-policy", component:HostingPrivacyPolicyComponent},
  {path:"plugins", component:PluginsComponent},
  {path:"sanitary-management-system", component:SanitaryManagementSystemComponent},
  {path:"software-solution-for-industry", component:SoftSolutionForIndustryComponent},
  {path:"supply-chain-management-system", component:SupplyChainManSystemComponent},
  {path:"custom-ecommerce-website", component:CustomEcomWebsiteComponent},
  {path:"seo-service-provider-in-bd", component:SeoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
