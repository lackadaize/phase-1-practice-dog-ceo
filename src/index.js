//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})

function fetchDogs () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(imgUrl)
        .then(response => response.json())
        .then((dogImages) => {
            const dogImageContainer = document.getElementById('dog-image-container')
            dogImages.message.forEach(imageUrl => {
                const img = document.createElement('img')
                img.src = imageUrl
                dogImageContainer.appendChild(img)
            })
        })
        
    fetch(breedUrl) 
        .then(response => response.json())
        .then((breeds) => {
            const dogBreedsList = document.getElementById('dog-breeds')
            const dogBreeds = Object.keys(breeds.message)

            dogBreeds.forEach(dogBreed => {
                const breedLi = document.createElement('li')
                breedLi.textContent = dogBreed
                dogBreedsList.appendChild(breedLi)
                breedLi.addEventListener("click", function() {
                    breedLi.style.color = "blue"
                })
                const dogBreedsDropdown = document.getElementById('breed-dropdown')
                const dogBreedsLis = document.getElementById('dog-breeds').getElementsByTagName('li');
                dogBreedsDropdown.addEventListener('change', event => {
                    const firstLetter = event.target.value
                    Array.from(dogBreedsLis).forEach(breed => {
                        if (breed.textContent.startsWith(firstLetter)) {
                            breed.style.display = 'block'
                        } else {
                            breed.style.display = 'none'
                        }
                    })
                })
            })            
        })
}
