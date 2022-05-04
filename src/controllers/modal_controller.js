import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["container", "closeBtn"]

  connect() {
    console.log("Modal controller is connected")
  }

  open() {
    this.containerTarget.style.display = "block"
  }

  close(e) {
    if (e.target == this.containerTarget || e.target == this.closeBtnTarget) {
      this.containerTarget.style.display = "none"
    } 
  }

}
