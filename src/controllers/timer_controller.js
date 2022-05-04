import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["dateTimeInput", "display"]
  static timerInterval

  connect() {
    console.log("Timer controller is connected")
    this.setInitialValues()
  }

  setInitialValues(){
    // https://stackoverflow.com/a/61082536/12735786
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    this.dateTimeInputTarget.value = now.toISOString().slice(0,16);
    this.dateTimeInputTarget.min = now.toISOString().slice(0,16);
  }

  start(){
    clearInterval(this.timerInterval)
    this.timerInterval = setInterval(() => {
      const expiry = new Date(this.dateTimeInputTarget.value).getTime()
      const now = new Date().getTime()
      const difference = expiry - now

      if (difference < 0 ) {
        clearInterval(this.timerInterval)
        this.displayTarget.textContent = 'EXPIRED'
      } else {
        // Time calculations for days, hours, minutes and seconds. 1s = 1000ms
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      this.displayTarget.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s` // Display the remaining time
      }
  
      
      
    }, 1000); //One seg.
  }

  stop() {
    clearInterval(this.timerInterval)
    this.displayTarget.textContent = ''
  }

}
