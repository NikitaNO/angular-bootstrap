import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Workflow from '../services/workflow.service';
import Action from '../actions/action';

@Component({
  selector: 'g[app-trigger]',
  template: `
    <svg:g (click)="triggerClicked()" [attr.transform]="transformText">
      <svg:rect class="trigger" [attr.fill]="fill" [attr.stroke]="color" x="0" y="1" rx="4" ry="4" [attr.width]="buttonWidth"
                height="48"></svg:rect>
      <svg:g transform="translate(16,16)">
        <svg:text y="12" dy="0">
          <svg:tspan class="label" [attr.fill]="color" x="0" y="12" dy="0em">{{ text }}</svg:tspan>
        </svg:text>
      </svg:g>
    </svg:g>
  `,
  styles: [`
    .trigger {
      cursor: pointer;
      stroke-dasharray: 5, 1;
      stroke-width: 2px;
    }

    .label {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 13px;
      font-weight: normal;
      cursor: pointer;
    }
  `]
})
export class TriggerComponent implements OnInit {
  @Input() color: string = '#ccc';
  @Input() fill: string = '#fff';
  @Input() text: string = 'Define your trigger...';

  @Output() addAction = new EventEmitter();
  counter: number = 2;
  buttonWidth: number;
  transformText: string;

  ngOnInit(): void {
    this.buttonWidth = this.getTextWidth(this.text, 13, 'Helvetica') + 30;
    this.transformText = `translate(${(Workflow.width / 2) - (this.buttonWidth / 2)}, 50)`;
  }

  getTextWidth(text, fontSize, fontFace) {
    let canvas = document.createElement('canvas');
    let context2D = canvas.getContext('2d');
    context2D.font = fontSize + 'px ' + fontFace;
    return context2D.measureText(text).width;
  }

  triggerClicked() {
    let campaignName = prompt('Name your campaign', `#${this.counter *= this.counter}`);
    this.addAction.next(new Action({text: `Action: Send Campaign ${campaignName}`}))
  }
}
