const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
document.addEventListener('keydown', playSound);

function playSound(event) {
    let code = event.key.toUpperCase().charCodeAt(0)
    let audioKey = document.querySelector(`audio[data-key="${code}"]`)
    let divKey = document.querySelector(`div[data-key="${code}"]`)

    if (!audioKey) return;

    divKey.classList.add('playing');
    audioKey.currentTime = 0;
    audioKey.play()
}
function removeTransition(event) {
    // if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing')
}