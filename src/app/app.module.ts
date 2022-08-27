import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgParticlesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
