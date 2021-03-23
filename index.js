// const axios = require('axios');
const makeLi = () => {
    const li = document.createElement('li');
    const ul = documnet.querySelector('#all-characters')
    li.innerHTML = '<img class="photo-display"><p></p>'
    ul.appendChild(li)
}


axios.get('https://rickandmortyapi.com/api/character')    
    .then(characters => {
        
        const array = characters.data
        console.log(array)
        // const img = document.getElementsByTagName('img')
        // const para = document.gerElementsByTagName('p')
        // const characterArr = characters.results
        // characterArr.forEach(makeLi)
        console.log(characterArr)
        // img.src = characterArr.id
        console.log(Object.keys(characters))
        // para.textContent = characterArr.name
        console.log(characterArr.name)
    })
    .catch(err => console.log('whoops!'))

