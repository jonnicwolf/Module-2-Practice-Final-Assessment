// const axios = require('axios');
const makeLi = () => {
    const li = document.createElement('li');
    const ul = document.querySelector('#all-characters')
    li.innerHTML = '<img class="photo-display"><p></p>'
    ul.appendChild(li)    
}

const npcGrab = () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(characters => {
            const array = characters.data.results

            //for each index, an li with appropriate contents then append them to the ul
            // array.forEach(makeLi)
            // array.forEach((indx) => {
            //     const img = document.querySelector('.photo-display')
            //     const para = document.getElementsByTagName('p')
            
            //     img.src = array[i].image[i]
            //     console.log(img)
            //     para.textContent = array.name
            // })

            for (let i = 0; i <= array.length; i++) {
                // console.log(array[i].name)
                
            
                makeLi()
            
                const img = document.querySelector('.photo-display')
                const para = document.getElementsByTagName('p')
                const characterImg = array[i].image.toStringify
                // const character = array[i].name
                // console.log(characters)
                console.log(characterImg)
                // console.log(character, characterImg)
                // img.src = characterImg
                // para.textContent = character
                // console.log(para, img)
                // img.src = array[i].image
                // para.textContent = array[i].name
                // console.log(para)
                // img.src = characterImg
                // console.log(img)
                // para.textContent = character
                // console.log(img)

            }
        })
        
    
    .catch(err => console.log(err))
}
npcGrab()