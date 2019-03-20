function check(event) {
    event.classList.toggle('checked');
}

function dialog(event) {
    var dialog = document.querySelector('.dialog');
    console.log(event.clientX);
    dialog.classList.toggle('opened');
    dialog.style.left = `${event.clientX - 200}px`;
    dialog.style.top = `${event.clientY}px`;
    var overflow = document.createElement('div');
    overflow.classList.add('overflow');
    overflow.addEventListener('click', () => {
        var cabecaDeAmendoin = document.querySelector('.overflow');
        document.body.removeChild(cabecaDeAmendoin);
        dialog.classList.toggle('opened');
    })
    document.body.appendChild(overflow);
}