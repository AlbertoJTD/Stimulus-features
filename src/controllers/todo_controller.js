import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["input", "container"]

  connect() {
    console.log("Todo controller is connected")
  }

  add(e) {
    e.preventDefault()
    const text = this.inputTarget.value
    const li = document.createElement("li")
    li.innerHTML = `${text} <span data-action="click->todo#remove" class="close">&times;</span>`
    li.setAttribute('data-action','click->todo#done')
    this.containerTarget.insertAdjacentElement('afterbegin', li)

    this.inputTarget.value = ""

  }

  done(e) {
    e.currentTarget.classList.toggle('crossed')


  }

  remove(e) {
    const item = e.currentTarget.parentElement
    this.containerTarget.removeChild(item)
  }

}
