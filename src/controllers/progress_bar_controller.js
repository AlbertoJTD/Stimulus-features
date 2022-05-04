import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets=["innerBar","progress"]
  static values = {currentProgress:Number}
  static timerInterval

  connect() {
    console.log("Progress Bar controller is connected")
  }

  start(){
    this.reset()
    this.timerInterval = setInterval(()=> {
      console.log('progressing')
      this.currentProgressValue >= 100 ? clearInterval(this.timerInterval) : this.currentProgressValue++;
    }, 200);
  }

  reset(){
    this.currentProgressValue = 0;
    clearInterval(this.timerInterval)
  }

  currentProgressValueChanged(){
    this.innerBarTarget.style.width = this.currentProgressValue + "%";
    this.progressTarget.textContent = `${this.currentProgressValue}%`
  }


}