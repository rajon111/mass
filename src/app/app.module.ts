import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/Header/header/header.component';
import { FooterComponent } from './layout/Footer/footer/footer.component';
import { HomeComponent } from './pages/Home/home/home.component';
import { HomeMainComponent } from './pages/Home/home-main/home-main.component';
import { HomeSectionOneComponent } from './pages/Home/home-section-one/home-section-one.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutMassDataComponent } from './pages/About/about-mass-data/about-mass-data.component';
import { RefundAndReturnPolicyComponent } from './pages/About/refund-and-return-policy/refund-and-return-policy.component';
import { TermsAndConditionComponent } from './pages/About/terms-and-condition/terms-and-condition.component';
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
import { NgImageSliderModule } from 'ng-image-slider';
import { FinanceManagementSystemComponent } from './pages/Solutions/finance-management-system/finance-management-system.component';
import { SupplyChainManagementBdComponent } from './pages/Solutions/supply-chain-management-bd/supply-chain-management-bd.component';
import { SalesAndDistributionManagementComponent } from './pages/Solutions/sales-and-distribution-management/sales-and-distribution-management.component';
import { SdmComponent } from './pages/Solutions/supply-chain-management-bd/sdm/sdm.component';
import { HcmComponent } from './pages/Solutions/supply-chain-management-bd/hcm/hcm.component';
import { PpcComponent } from './pages/Solutions/supply-chain-management-bd/ppc/ppc.component';
import { PrdComponent } from './pages/Solutions/supply-chain-management-bd/prd/prd.component';
import { CrmComponent } from './pages/Solutions/supply-chain-management-bd/crm/crm.component';
import { AdmComponent } from './pages/Solutions/supply-chain-management-bd/adm/adm.component';
import { PsComponent } from './pages/Solutions/supply-chain-management-bd/ps/ps.component';
import { CscComponent } from './pages/Solutions/supply-chain-management-bd/csc/csc.component';
import { NotFoundComponent } from './pages/NotFound/not-found/not-found.component';
import { ResourceComponent } from './pages/Resource/resource/resource.component';
import { AnnualTourComponent } from './pages/Resource/annual-tour/annual-tour.component';
import { FastestWebHostingComponent } from './pages/Resource/fastest-web-hosting/fastest-web-hosting.component';
import { PromotionalComponent } from './pages/Resource/promotional/promotional.component';
import { SmsMarketingWhatComponent } from './pages/Resource/sms-marketing-what/sms-marketing-what.component';
import { MaskingSmsPriceInBangladeshComponent } from './pages/Resource/masking-sms-price-in-bangladesh/masking-sms-price-in-bangladesh.component';
import { WhatIsAnSmppGatewayComponent } from './pages/Resource/what-is-an-smpp-gateway/what-is-an-smpp-gateway.component';
import { AuthorAdminComponent } from './pages/Resource/author-admin/author-admin.component';
import { UncategorizedComponent } from './pages/Resource/uncategorized/uncategorized.component';
import { CatoguryHostingComponent } from './pages/Resource/catogury-hosting/catogury-hosting.component';
import { CategorySmsComponent } from './pages/Resource/category-sms/category-sms.component';
import { Events } from 'tsparticles-engine';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeMainComponent,
    HomeSectionOneComponent,
    AboutMassDataComponent,
    RefundAndReturnPolicyComponent,
    TermsAndConditionComponent,
    PrivacyPolicyComponent,
    HostingPrivacyPolicyComponent,
    ServiceLevelArgeeComponent,
    TermsOfServiceComponent,
    TocComponent,
    PluginsComponent,
    SanitaryManagementSystemComponent,
    SoftSolutionForIndustryComponent,
    SupplyChainManSystemComponent,
    CustomEcomWebsiteComponent,
    SeoComponent,
    ServiceComponent,
    UsaResellerHstingComponent,
    DomainProviderInBdComponent,
    ContactUsComponent,
    MaskingSmsBdComponent,
    NonMaskingSmsComponent,
    OtpComponent,
    PromotionalSmsComponent,
    SmppSolutionsComponent,
    FinanceManagementSystemComponent,
    SupplyChainManagementBdComponent,
    SalesAndDistributionManagementComponent,
    SdmComponent,
    HcmComponent,
    PpcComponent,
    PrdComponent,
    CrmComponent,
    AdmComponent,
    PsComponent,
    CscComponent,
    NotFoundComponent,
    ResourceComponent,
    AnnualTourComponent,
    FastestWebHostingComponent,
    PromotionalComponent,
    SmsMarketingWhatComponent,
    MaskingSmsPriceInBangladeshComponent,
    WhatIsAnSmppGatewayComponent,
    AuthorAdminComponent,
    UncategorizedComponent,
    CatoguryHostingComponent,
    CategorySmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgParticlesModule ,
    NgImageSliderModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
