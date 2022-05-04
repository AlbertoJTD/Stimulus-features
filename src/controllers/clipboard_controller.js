import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["toCopy", "tooltip"]

  connect() {
    console.log("Clipboard controller is connected")
  }
  
  copy() {
    this.toCopyTarget.select();
    document.execCommand('copy')
    this.tooltipTarget.textContent = "Copied!"
    setTimeout(() => {
      this.tooltipTarget.textContent = "Copy to clipboard"
    }, 3000);
  }

}
