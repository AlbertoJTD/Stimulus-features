import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["display"]

  connect() {
    console.log("Slider controller is connected")
  }

  setInput(e) {
    const value = e.currentTarget.value
    this.displayTarget.textContent = value
  }

}
