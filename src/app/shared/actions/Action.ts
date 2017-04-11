/**
 * Created by timofeymelnik on 4/11/17.
 */

export default class Action {
  text: string;
  color: string;
  fill: string;

  constructor({text = 'Send campaign', color = '#4477bd', fill = '#dae6f6'}) {
    this.text = text;
    this.color = color;
    this.fill = fill;
  }
};
