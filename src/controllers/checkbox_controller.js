import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["container"]

  connect() {
    console.log("Checkbox controller is connected")
  }

  selectAll() {
    const checkboxes = this.containerTarget.querySelectorAll('input[ type = "checkbox" ]')

    checkboxes.forEach(checkbox => {
      checkbox.checked = true
    }); 
  }

  deselectAll() {
    const checkboxes = this.containerTarget.querySelectorAll('input[ type = "checkbox" ]')

    checkboxes.forEach(checkbox => {
      checkbox.checked = false
    }); 
  }

}
