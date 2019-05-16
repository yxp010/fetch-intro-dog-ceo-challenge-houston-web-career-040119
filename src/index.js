document.addEventListener("DOMContentLoaded", function(){
    getPics()
    getBreeds()

    let dropDown = document.getElementById("breed-dropdown")
    dropDown.addEventListener('change', function(){
        let selected = this.value
        getBreedsBy(selected)
    })
})


function getPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => {
        renderPictures(json.message)
    })
}

function renderPictures(pictures) {
    let imgArea = document.querySelector('#dog-image-container')
    pictures.forEach(picture => {
    let tag = document.createElement('img')
    tag.src = picture
    imgArea.append(tag)
})
}

function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
        displayBreeds(Object.keys(json.message))
    })
}

function getBreedsBy(letter) {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => {
        let breedsUl = document.getElementById("dog-breeds")
        let selectedBreeds = []
        for (let breed of Object.keys(json.message)) {
            if (breed.charAt(0) == letter) {
                selectedBreeds.push(breed)
            }
        } 
        while( breedsUl.firstChild ){
            breedsUl.removeChild( breedsUl.firstChild );
          }
        displayBreeds(selectedBreeds)
    })
}

function displayBreeds(breeds) {
    let breedsUl = document.getElementById("dog-breeds")
    breeds.forEach(breed => {
        let liTag = document.createElement('li')
        liTag.innerText = breed
        liTag.addEventListener('click', function(){
            liTag.style.color = 'red'
        })
        breedsUl.append(liTag)
    })
}



