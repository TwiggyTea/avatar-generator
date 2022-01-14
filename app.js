const squareOne = document.querySelector('#squareOne')
const squareTwo = document.querySelector('#squareTwo')
const squareThree = document.querySelector('#squareThree')
const squareFour = document.querySelector('#squareFour')
const squareFive = document.querySelector('#squareFive')
const squareSix = document.querySelector('#squareSix')
const squareSeven = document.querySelector('#squareSeven')
const squareEight = document.querySelector('#squareEight')
const squareNine = document.querySelector('#squareNine')
const squareTen = document.querySelector('#squareTen')

let squareOneNum = Math.floor(Math.random()*100)
let squareTwoNum = Math.floor(Math.random()*100)
let squareThreeNum = Math.floor(Math.random()*100)
let squareFourNum = Math.floor(Math.random()*100)
let squareFiveNum = Math.floor(Math.random()*100)
let squareSixNum = Math.floor(Math.random()*100)
let squareSevenNum = Math.floor(Math.random()*100)
let squareEightNum = Math.floor(Math.random()*100)
let squareNineNum = Math.floor(Math.random()*100)
let squareTenNum = Math.floor(Math.random()*100)

console.log(squareOneNum)
console.log(squareTwoNum)
console.log(squareThreeNum)
console.log(squareFourNum)
console.log(squareFiveNum)
console.log(squareSixNum)
console.log(squareSevenNum)
console.log(squareEightNum)
console.log(squareNineNum)
console.log(squareTenNum)

switch (true) {
    case (squareOneNum === 0):
        squareOne.style.backgroundColor = 'gold'
        break;
    case (squareOneNum > 50):
        squareOne.style.backgroundColor = 'red'
        break;
    case (squareOneNum <= 50 && squareOneNum > 0):
        squareOne.style.backgroundColor = 'white'
        break;
}

switch (true) {
    case (squareTwoNum === 0):
        squareTwo.style.backgroundColor = 'gold'
        break;
    case (squareTwoNum > 50):
        squareTwo.style.backgroundColor = 'red'
        break;
    case (squareTwoNum <= 50 && squareTwoNum > 0):
        squareTwo.style.backgroundColor = 'white'
        break;
}

switch (true) {
        case (squareThreeNum === 0):
        squareThree.style.backgroundColor = 'gold'
        break;
    case (squareThreeNum > 50):
        squareThree.style.backgroundColor = 'red'
        break;
    case (squareThreeNum <= 50 && squareThreeNum > 0):
        squareThree.style.backgroundColor = 'white'
        break;
}

switch (true) {
    case (squareFourNum === 0):
        squareFour.style.backgroundColor = 'gold'
        break;
    case (squareFourNum > 50):
        squareFour.style.backgroundColor = 'red'
        break;
    case (squareFourNum <= 50 && squareFourNum > 0):
        squareFour.style.backgroundColor = 'white'
        break;
}

switch (true) {
        case (squareFiveNum === 0):
        squareFive.style.backgroundColor = 'gold'
        break;
    case (squareFiveNum > 50):
        squareFive.style.backgroundColor = 'red'
        break;
    case (squareFiveNum <= 50 && squareFiveNum > 0):
        squareFive.style.backgroundColor = 'white'
        break;
}

switch (true) {
    case (squareSixNum === 0):
        squareSix.style.backgroundColor = 'gold'
        break;
    case (squareSixNum > 50):
        squareSix.style.backgroundColor = 'red'
        break;
    case (squareSixNum <= 50 && squareSixNum > 0):
        squareSix.style.backgroundColor = 'white'
        break;
}

switch (true) {
    case (squareSevenNum === 0):
        squareSeven.style.backgroundColor = 'gold'
        break;
    case (squareSevenNum > 50):
        squareSeven.style.backgroundColor = 'red'
        break;
    case (squareSevenNum <= 50 && squareSevenNum > 0):
        squareSeven.style.backgroundColor = 'white'
        break;
}

switch (true) {
    case (squareEightNum === 0):
        squareEight.style.backgroundColor = 'gold'
        break;
    case (squareEightNum > 50):
        squareEight.style.backgroundColor = 'red'
        break;
    case (squareEightNum <= 50 && squareEightNum > 0):
        squareEight.style.backgroundColor = 'white'
        break;
}

switch (true) {
    case (squareNineNum === 0):
        squareNine.style.backgroundColor = 'gold'
        break;
    case (squareNineNum > 50):
        squareNine.style.backgroundColor = 'red'
        break;
    case (squareNineNum <= 50 && squareNineNum > 0):
        squareNine.style.backgroundColor = 'white'
        break;
}

switch (true) {
    case (squareTenNum === 0):
        squareTen.style.backgroundColor = 'gold'
        break;
    case (squareTenNum > 50):
        squareTen.style.backgroundColor = 'red'
        break;
    case (squareTenNum <= 50 && squareTenNum > 0):
        squareTen.style.backgroundColor = 'white'
        break;
}