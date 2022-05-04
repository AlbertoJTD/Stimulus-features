import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["display"]
  static values = {score: Number}

  connect() {
    console.log("Counter controller is connected")
  }

  decrement() {
    if (this.scoreValue - 1 >= 0 ) {
      this.scoreValue--;
    }
  }

  increment() {
    this.scoreValue++;
  }

  scoreValueChanged() {
    this.displayTarget.textContent = this.scoreValue
  }

}
