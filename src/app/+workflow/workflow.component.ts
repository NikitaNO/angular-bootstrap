import {Component, OnInit} from '@angular/core';
import Workflow from 'app/shared/services/workflow.service';

@Component({
  selector: 'app-home',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  private workflowWidth: number;
  private workflowHeight: number;

  constructor(private workflow: Workflow) {
    this.workflow = workflow;
  }

  ngOnInit() {
    this.workflowWidth = Workflow.width;
    this.workflowHeight = this.workflow.height;
  }

  getViewBox() {
    return `0 0 ${Workflow.width} ${this.workflow.height}`
  }

}
