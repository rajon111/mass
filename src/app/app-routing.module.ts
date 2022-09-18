
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
import { ServiceComponent } from './pages/Solutions/service/service.component';
import { UsaResellerHstingComponent } from './pages/Service/usa-reseller-hsting/usa-reseller-hsting.component';
import { DomainProviderInBdComponent } from './pages/Service/domain-provider-in-bd/domain-provider-in-bd.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MaskingSmsBdComponent } from './pages/Service/SMS/masking-sms-bd/masking-sms-bd.component';
import { NonMaskingSmsComponent } from './pages/Service/SMS/non-masking-sms/non-masking-sms.component';
import { OtpComponent } from './pages/Service/SMS/otp/otp.component';
import { PromotionalSmsComponent } from './pages/Service/SMS/promotional-sms/promotional-sms.component';
import { SmppSolutionsComponent } from './pages/Service/SMS/smpp-solutions/smpp-solutions.component';
import { FinanceManagementSystemComponent } from './pages/Solutions/finance-management-system/finance-management-system.component';
import { SupplyChainManagementBdComponent } from './pages/Solutions/supply-chain-management-bd/supply-chain-management-bd.component';
import { SdmComponent } from './pages/Solutions/supply-chain-management-bd/sdm/sdm.component';
import { HcmComponent } from './pages/Solutions/supply-chain-management-bd/hcm/hcm.component';
import { PpcComponent } from './pages/Solutions/supply-chain-management-bd/ppc/ppc.component';
import { PrdComponent } from './pages/Solutions/supply-chain-management-bd/prd/prd.component';
import { CrmComponent } from './pages/Solutions/supply-chain-management-bd/crm/crm.component';
import { AdmComponent } from './pages/Solutions/supply-chain-management-bd/adm/adm.component';
import { PsComponent } from './pages/Solutions/supply-chain-management-bd/ps/ps.component';
import { CscComponent } from './pages/Solutions/supply-chain-management-bd/csc/csc.component';
import { NotFoundComponent } from './pages/NotFound/not-found/not-found.component';


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
  {path:"best-eCommerce-Website-Development-Company-in-Bangladesh", component:ServiceComponent},
  {path:"usa-reseller-hosting-in-bd", component:UsaResellerHstingComponent},
  {path:"domain-provider-in-bd", component:DomainProviderInBdComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"masking-sms-in-bd", component:MaskingSmsBdComponent},
  {path:"non-masking-sms-in-bd", component:NonMaskingSmsComponent},
  {path:"otp-provider-in-bd", component:OtpComponent},
  {path:"promotional-sms-in-bd", component:PromotionalSmsComponent},
  {path:"smpp-gateway-provider-in-bd", component:SmppSolutionsComponent},
  {path:"financial-management-system", component:FinanceManagementSystemComponent},
  {path:"supplyChain-management-system-bd", component:SupplyChainManagementBdComponent},
 
  {path:"sales-and-distribution-management", component:SdmComponent},
  {path:"human-capital-management", component:HcmComponent},
  {path:"production-Planning-and-Control", component:PpcComponent},
 
  {path:"productivity-management", component:PrdComponent},
  {path:"customer-relationship-management", component:CrmComponent},
  
  {path:"project-system", component:PsComponent},
  {path:"core-system-components", component:CscComponent},
  {path:"office-administration-management", component:AdmComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
