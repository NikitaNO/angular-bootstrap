/**
 * Created by timofeymelnik on 4/11/17.
 */

export default class Workflow {
  static width: number = window.innerWidth - (window.innerWidth * 0.2);
  height: number = window.innerHeight;

  static actionHeight: number = 100;

  getWorkflowHeight() {
    return this.height;
  }

  updateWorkflowHeight(newHeight) {
    this.height = newHeight;
  }
}
