import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["icon", "details"]
  static classes = ["rotate"]
  connect() {
    console.log("Accordian controller is connected")
  }

  toggle() {
    this.iconTarget.classList.toggle('rotate-180')

    if (this.detailsTarget.style.maxHeight) {
      this.detailsTarget.style.maxHeight = null
    } else {
      this.detailsTarget.style.maxHeight = this.detailsTarget.scrollHeight + 'px'
    }
  }

}
