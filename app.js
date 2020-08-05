// set initial count
let count = 0

// select value and buttons from HTML
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")


// using a forEach loop to add events with click to the btn you click
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            count--
        } else if (styles.contains("increase")) {
            count++
        } else {
            count = 0
        }
        if (count > 0) { 
            value.style.color = "green"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "#222"
        }
        value.textContent = count
    })
})