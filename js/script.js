var height = String(window.innerHeight)
var width = String(window.innerWidth)

function setBackground(tag, tag2){

    var bgUrl = 'https://source.unsplash.com/' + 1920 + 'x' + 1080 + '/?' + tag + '/' + tag2;
    document.querySelector('.background').style.backgroundImage = `url(${bgUrl})`
    console.log(bgUrl)
}

setBackground('new-york', 'city')