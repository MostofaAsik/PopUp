let popup = document.getElementById('popup')
let imagecurve = document.getElementById('imgcurve')

const openPopup = () => {
    popup.classList.add("open-popup")
    imagecurve.classList.add('imageCurve')
}

const closePopup = () => {
    popup.classList.remove("open-popup")
}