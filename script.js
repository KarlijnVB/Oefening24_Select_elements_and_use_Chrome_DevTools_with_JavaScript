// Give an alert
var btn = document.querySelector("#mybutton")
btn.addEventListener('click', function (e) {
    alert('Button clicked')
})

// Change background color
var btnBackground = document.querySelector("#btnBackground")
btnBackground.addEventListener('click', function (e) {
    btnBackground.classList.remove('blue-background')
    btnBackground.classList.add('red-background')
})

// Background Toggle
var btnBackgroundToggle = document.querySelector("#btnBackgroundToggle")
btnBackgroundToggle.addEventListener('click', function (e) {
    btnBackgroundToggle.classList.toggle('red-background')
})