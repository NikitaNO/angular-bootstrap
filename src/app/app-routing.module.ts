/**
 * Created by griga on 7/11/16.
 */

import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";


const appRoutes:Routes = [
  {
  path: '',
  component: MainLayoutComponent,
  children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './+home/home.module#HomeModule'},
      { path: 'workflow', loadChildren: './+workflow/workflow.module#WorkflowModule'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
