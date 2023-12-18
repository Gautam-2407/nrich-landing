// src/app/layouts/layouts.module.ts (or the module where Layout4Component is declared)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Layout4Component } from './layout4/layout4.component';
import { SharedModule } from '../shared/shared.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LayoutsRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [Layout4Component], 
  imports: [
    CommonModule,
    FormsModule, // Include FormsModule here
    LayoutsRoutingModule,
    ScrollToModule.forRoot(),
    SharedModule,
  ],
})
export class LayoutsModule {}
