import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkflowComponent } from './workflow.component';

const workflowRoutes: Routes = [
    {
        path: '',
        component: WorkflowComponent,
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(workflowRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkflowRoutingModule {}
