import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollspyDirective } from './scrollspy.directive';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { PriceComponent } from './price/price.component';



@NgModule({
  declarations: [AboutComponent, ClientsComponent, ContactComponent, FeaturesComponent, FooterComponent, ServicesComponent, ScrollspyDirective, PriceComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent, ClientsComponent, ContactComponent, FeaturesComponent, FooterComponent, ServicesComponent, ScrollspyDirective, PriceComponent]
})
export class SharedModule { }
