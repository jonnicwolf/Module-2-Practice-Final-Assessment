const makeLi = () => {
    const li = document.createElement('li');
    const ul = documnet.querySelector('#all-characters')
    li.innerHTML = '<img class="photo-display"><p></p>'
    ul.appendChild(li)
}

const allCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => { return response.json(); })
        .then(characters => {
            const characterArr = characters.results
            characterArr.forEach(makeLi)
            console.log(characterArr}).then(array => {
            const img = document.getElementsByTagName('img')
            const para = document.gerElementsByTagName('p')
            img.src = array.id
            console.log(array.id)
            para.textContent = array.name
            console.log(array.name)
        }).catch(err => console.log('whoops!'))
}
allCharacters