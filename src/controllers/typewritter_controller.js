import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["display"]
  static values = {contents: Array, index: Number, contentIndex: Number}
  static timerInterval

  connect() {
    console.log("Type writter controller is connected")
    this.type()
  }

  type() {
    this.timerInterval = setInterval(() => {
      if (this.contentIndexValue < this.contentsValue[this.indexValue].length) {
        this.displayTarget.innerHTML += this.contentsValue[this.indexValue][this.contentIndexValue]
        // console.log(this.contentsValue[this.indexValue][this.contentIndexValue])
        this.contentIndexValue++
      } else {
        clearInterval(this.timerInterval)
        setTimeout(() => {
          this.displayTarget.innerHTML = ''
          this.indexValue = this.indexValue == this.contentsValue.length - 1 ? 0 : this.indexValue + 1
          this.contentIndexValue = 0
          this.type()
        }, 3000);
      }
    }, 50);
  }

}
