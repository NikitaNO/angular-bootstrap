import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import {WorkflowKitComponent} from '../shared/workflow-kit/workflow-kit.component';
import {TriggerComponent} from 'app/shared/trigger/trigger.component';
import {ActionComponent} from 'app/shared/action/action.component';

@NgModule({
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ],
  declarations: [
    WorkflowComponent,
    WorkflowKitComponent,
    TriggerComponent,
    ActionComponent
  ]
})
export class WorkflowModule { }
