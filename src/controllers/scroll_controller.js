import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["progressBar"]
  connect() {
    console.log("Scroll controller is connected")
  }

  showProgress(e) {
    const container = e.currentTarget
    const scrollTop = container.scrollTop
    const totalHeight = container.scrollHeight
    const visibleHeight = container.clientHeight

    const progress = scrollTop / (totalHeight - visibleHeight) * 100

    this.progressBarTarget.style.width = progress + '%'
  }
}
