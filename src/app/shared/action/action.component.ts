/**
 * Created by timofeymelnik on 4/11/17.
 */

import {Component, Input, OnInit} from '@angular/core';
import Workflow from '../services/workflow.service';
import Action from '../actions/action';

@Component({
  selector: 'g[app-action]',
  template: `
    <svg:g [attr.transform]="transformText">
      <svg:path stroke="#ccc" [attr.d]="getPathStyles()"></svg:path>
      <svg:rect class="trigger" [attr.fill]="action.fill" [attr.stroke]="action.color" x="0" y="1" rx="4" ry="4" [attr.width]="buttonWidth"
                height="48"></svg:rect>
      <svg:g transform="translate(16,16)">
        <svg:text y="12" dy="0">
          <svg:tspan class="label" [attr.fill]="action.color" x="0" y="12" dy="0em">{{ action.text }}</svg:tspan>
        </svg:text>
      </svg:g>
    </svg:g>
  `,
  styles: [`
    .trigger {
      stroke-width: 2px;
    }

    .label {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 13px;
      font-weight: normal;
    }
  `]
})
export class ActionComponent implements OnInit {
  @Input() action: Action;
  buttonWidth: number;
  transformText: string;

  ngOnInit(): void {
    this.buttonWidth = this.getTextWidth(this.action.text, 13, 'Helvetica') + 30;
    this.transformText = `translate(${(Workflow.width / 2) - (this.buttonWidth / 2)}, 50)`;
  }

  getTextWidth(text, fontSize, fontFace) {
    let canvas = document.createElement('canvas');
    let context2D = canvas.getContext('2d');
    context2D.font = fontSize + 'px ' + fontFace;
    return context2D.measureText(text).width;
  }

  getPathStyles() {
    return `M${this.buttonWidth / 2} -50 V0 50`;
  }
}
