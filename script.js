console.log('hi')

const imgBackBtnEl = document.getElementById('image-back');
let arrayOfHiddenImages = [];
const puppetSound = new Audio('./audio/the-puppet.ogg')
const freddySound = new Audio('./audio/funtime-freddy.ogg')
const moonSound = new Audio('./audio/moony.ogg')


function imagesBack() {
    arrayOfHiddenImages.map((imageID) => {
        document.getElementById(imageID).style.display = 'block'
    })

    imgBackBtnEl.style.display = 'none'
    arrayOfHiddenImages = []
}
function hideObject(imageID) {
    arrayOfHiddenImages.push(imageID)
    const clickedImg = document.getElementById(imageID);
    clickedImg.style.display = 'none'
    console.log(imgBackBtnEl.style)

    if (imgBackBtnEl.style.display === 'none' || !imgBackBtnEl.style.display) {
        imgBackBtnEl.style.display = 'block'
    }
}

function voiceline(id) {
    const idMatch = {
        'puppet': puppetSound,
        'freddy': freddySound,
        'moon': moonSound,
    }

    const soundMatch = idMatch[id]
    soundMatch && soundMatch.play()
}



