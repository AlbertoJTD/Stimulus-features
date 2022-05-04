import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["snackbar"]
  static timerTimeout

  connect() {
    console.log("Snackbar controller is connected")
  }

  show() {
    this.snackbarTarget.classList.add('show')
    clearTimeout(this.timerTimeout)

    setTimeout(() => {
      this.snackbarTarget.classList.add('show')
      this.timerTimeout = setTimeout( () => {
        this.snackbarTarget.classList.remove('show')
      }, 3000)
    }, 10);
  }

}
