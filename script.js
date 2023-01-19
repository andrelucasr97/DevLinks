//moon-sun//
function toggleMode () {
    const html = document.documentElement 

    if(html.classList.contains('ligth')) {
        html.classList.remove('ligth')
    } else {
        html.classList.add('ligth')
    }
    
    //img-profile-ligth//
    const img = document.querySelector("#profile img")
    
    if(html.classList.contains('ligth')) {
        img.setAttribute('src', './assets/img-ligth.png')
    } else {
        img.setAttribute('src', './assets/img-profile.png')
    }
}