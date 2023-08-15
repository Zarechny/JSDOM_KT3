let divSliderWidth = document.querySelector('#slider').offsetWidth
let divPointer = document.querySelector('#pointer')
let pPercent = document.getElementById('percent')

let isClick = false

function movePointer (e){
    let xPos = e.pageX
    if (xPos > 55 & xPos < divSliderWidth + 50){
        divPointer.style.left = xPos - 65 + 'px'
    }
    pPercent.textContent = `${Math.round((xPos-50) / 4.1)}`
}

divPointer.addEventListener('mousedown', () => {
    isClick = true
    console.log("Click!")
})
divPointer.addEventListener('mouseup', () => {
    isClick = false
})
divPointer.addEventListener('mouseout', () => {
    isClick = false
})

divPointer.addEventListener('mousemove', (e) => {
    if(isClick){
        movePointer(e)
    }
})

//список событий:
// click - клик мыши на элементе
// dblclick - сделан двойной щелчок
// mousedown - кнопка мыши нажата
// mouseup - кнопка мыши отжата
// contextmenu - нажатие правой кнопки мыши
// mouseout - курсор мыши ушёл с объекта
