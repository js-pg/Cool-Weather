function setBackground(tag, tag2){
    var height = window.innerHeight
    var width = window.innerHeight
    var bgUrl = 'https://source.unsplash.com/' + height + 'x' + width + '/?' + tag + '/' + tag2;
    document.querySelector('.background').style.backgroundImage = `url(${bgUrl})`
    console.log(bgUrl)
}

setBackground('dallas', 'city')