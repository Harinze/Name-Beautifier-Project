import randomcolor from "randomcolor"

// grab necessary html elements
const beautifierBtn = document.getElementById('beautifierBtn')
let name = document.getElementById('name')
let randomWordInput = document.getElementById('randomWord')

// create a flag for changing fontWeight
let isFontWeightBold = false

const fontsArr = [
        "Impact,Charcoal,sans-serif",
        "Brush Script MT, cursive",
        "Luminari, fantasy",
        "Comic Sans MS, cursive",
        "American Typewriter, serif"
    ]
    
function beautifyWords() {
     // get a random font from fontsArr
    let randomFont = fontsArr[Math.floor(Math.random() * fontsArr.length)]
    // set the fontFamily of name element
    name.style.fontFamily = randomFont
    // set the color of name and btn from randomcolor() with luminosity, format, and alpha set
    name.style.color = randomcolor({luminosity: 'dark', format: 'rgba', alpha: 0.7})
    beautifierBtn.style.background = name.style.color
    // set fontWeight depending on isFontWeightBold flag
    isFontWeightBold = isFontWeightBold ? false : true 
    name.style.fontWeight = !isFontWeightBold ? 'bold' : 'normal'
    // don't erase the name text if there is an empty input
    if(randomWordInput.value !== '') {
       name.innerText = randomWordInput.value    
    }   
}

beautifierBtn.addEventListener('click', beautifyWords)

randomWordInput.addEventListener('focus', () => {
    randomWordInput.value = ''
})

// When the button is clicked, the following things should change

// - font family (use array above)
// - font color (either use randomcolor or your own array of colors)
// - font weight
// - button color (match the font color)



