/**
 * Created by timofeymelnik on 4/11/17.
 */

import {Injectable} from '@angular/core';
import Action from './Action';

@Injectable()
export default class Actions {
  actions = [];

  getActions(): Action[] {
    return this.actions
  }

  addAction(action) {
    this.actions.push(action)
  }
}
