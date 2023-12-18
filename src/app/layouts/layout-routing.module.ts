import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout4Component } from './layout4/layout4.component';
const routes: Routes = [
    {
        path: '**',
        redirectTo: '/layout-4', pathMatch: 'full'
    },
    {
        path: ' ',
        redirectTo: '/layout-4', pathMatch: 'full'
    },
    {
        path: 'layout-4',
        component: Layout4Component
    }
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule { }
