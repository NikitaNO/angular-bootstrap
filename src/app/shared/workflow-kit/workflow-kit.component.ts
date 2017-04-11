import {Component, Input} from '@angular/core';
import Actions from 'app/shared/actions/Actions';
import Action from '../actions/Action';
import Workflow from '../services/workflow.service';

@Component({
  selector: 'g[app-workflow-kit]',
  template: `
    <svg:g app-trigger [color]="'#e2911a'" [fill]="'#f9e7cd'" (addAction)="addAction($event)"></svg:g>
    <svg:g *ngFor="let action of actionsList; let i = index">
      <svg:g [attr.transform]="createGap(i)" app-action [action]="action"></svg:g>
    </svg:g>
  `
})
export class WorkflowKitComponent {
  actionsList: Action[];

  constructor(private actions: Actions,
  private workflow: Workflow) {
    this.actionsList = this.actions.getActions();
  }

  addAction(evt) {
    this.actions.addAction(evt);

    if (this.workflow.height < (this.actionsList.length + 1) * Workflow.actionHeight) {
      this.workflow.height += Workflow.actionHeight;
    }
  }

  createGap(i) {
    return `translate(0, ${(i + 1) * Workflow.actionHeight})`
  }
}
