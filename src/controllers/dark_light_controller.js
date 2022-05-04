import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['icon']
  static values = {mode: String}

  connect () {
    console.log("Drak light controller is connected")
  }

  toggleMode () {
    this.modeValue = this.modeValue == "light" ? "dark" : "light"
  }

  modeValueChanged () {
    const mapping = {"dark" : "fas fa-moon", "light" : "fas fa-sun"}
    this.iconTarget.className = mapping[this.modeValue]
  }

}
