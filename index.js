document.getElementById('clear_all').addEventListener(('click'), function clearAll() {
    const boards = document.querySelector('.boards').children
    const cpBoardBtns = document.querySelectorAll('.cp-board-button')
    var count = 0
    for (let i = 0; i < boards.length; i++) {
        if (boards[i].style.display == 'none') {
            count++
        }
    }
    var display = 'flex'
    if (count == boards.length) { display = 'flex'; add = true } else { display = 'none' }
    for (let i = 0; i < boards.length; i++) {
        boards[i].style.display = display
        if (display == 'flex') { cpBoardBtns[i].classList.remove('unUsed') } else { cpBoardBtns[i].classList.add('unUsed') }
    }

})


document.getElementById('reset_all').addEventListener('click', function resetAll() {
    var boards = document.querySelector('.boards').children
    for (let i = 0; i < boards.length; i++) {
        boards[i].children[1].innerText = 0
    }
})

var controlBtns = document.querySelectorAll('.control-button')
controlBtns.forEach((Btn) => {
    Btn.addEventListener('click', function changeScore(event) {
        event = event || window.event;
        var element = event.target || event.srcElement;
        score = element.parentNode.children[1]
        if (element.id[0] == 'a') { score.innerText = parseInt(score.innerText) + 1 }
        else if (element.id[0] == 'm') { score.innerText = parseInt(score.innerText) - 1 }
    })
})


var cpBoardBtns = document.querySelectorAll('.cp-board-button')
cpBoardBtns.forEach((Btn) => {
    Btn.addEventListener('click', function changeBoards(event) {
        event = event || window.event;
        var element = event.target || event.srcElement;
        for (let i = 0; i < cpBoardBtns.length; i++) {
            if (cpBoardBtns[i] == element) {
                var boards = document.querySelector('.boards')
                cpBoardBtns[i].classList.toggle('unUsed')
                if (boards.children[i].style.display == '' || boards.children[i].style.display == 'flex') {
                    boards.children[i].style.display = 'none'
                } else if (boards.children[i].style.display == 'none') {
                    boards.children[i].style.display = 'flex'


                }



            }


        }
    })
})
