// const axios = require('axios');
const makeLi = () => {
    console.log('hey!')
    const li = document.createElement('li');
    const ul = document.querySelector('#all-characters')
    li.innerHTML = '<img class="photo-display"><p></p>'
    ul.appendChild(li)
    console.log(ul)
}

const npcGrab = () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(characters => {
            const array = characters.data.results
            console.log(array)
        
            //for each index, an li with appropriate contents then append them to the ul
            // array.forEach(makeLi)

            for (let i = 0; i < array.length; i++){
                console.log(array[i])
                array[i]
                makeLi()
            }



            const character = array.name
            const characterImg = array.image
            //grab the new tags and give them content
            array.forEach(() => {
                const img = document.QuerySelector('.photo-display')
                const para = document.getElementsByTagName('p')
                img.src = characterImg
                para.textContent = character
                console.log(img)
            })
            //give the new tags their content
            // const characterArr = characters.results
            // charactArr.forEach(makeLi)
            // console.log(characterArr)
            // img.src = characterArr.id
            // console.log(Object.keys(characters))
            // para.textContent = characterArr.name
            // console.log(characterArr.name)
        })
        .catch(err => console.log(err))
}
npcGrab()