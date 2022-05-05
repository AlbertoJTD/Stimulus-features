import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static values = {index:Number}
  static targets = ["dot","slide","container"]

  connect() {
    console.log("Slideshow controller is connected")
  }

  setIndex(e) {
    const index = e.currentTarget.dataset.id
    this.indexValue = index
  }

  next() {
    this.indexValue = this.indexValue == this.slideTargets.length ? 1 : this.indexValue+1
  }

  prev() {
    this.indexValue = this.indexValue == 1 ? this.slideTargets.length : this.indexValue-1
  }

  indexValueChanged() {
    for (let i = 0;i < this.slideTargets.length;i++){
      this.dotTargets[i].classList.remove('active')
    }
    this.containerTarget.scrollTo(this.slideTargets[this.indexValue - 1].offsetLeft,0)

    this.dotTargets[this.indexValue - 1].classList.add("active")
  }

}
