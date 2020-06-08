// dom event lister
document.addEventListener('DOMContentLoaded',() =>  {

// // ---[Card Option]----//
const baseUrl = "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/";
// // ---[array of cards with names]---
const cardArray = [
    {
        name: "40",
        img: baseUrl + "40.png"
    },
    {
        name: "40",
        img: baseUrl + "40.png"
    },
    {
        name: "41",
        img: baseUrl + "41.png"
    },
    {
        name: "41",
        img: baseUrl + "41.png"
    },
    {
        name: "42",
        img: baseUrl + "42.png"
    },
    {
        name: "42",
        img: baseUrl + "42.png"
    },
    {
        name: "43",
        img: baseUrl + "43.png"
    },
    {
        name: "43",
        img: baseUrl + "43.png"
    },
    {
        name: "44",
        img: baseUrl + "44.png"
    },
    {
        name: "44",
        img: baseUrl + "44.png"
    },
    {
        name: "45",
        img: baseUrl + "45.png"
    },
    {
        name: "45",
        img: baseUrl + "45.png"
    }
];



// // ---[create a game board]----

const grid = document.querySelector('.grid')

////
//// createBoard()
////
function createBoard() {

    for(let i=0; i < cardArray.length; i++) {
        // 1. // oop card array
        // 2. for each card i will create an image element
        var card = document.createElement('img');

        // each card set attribute 
        card.setAttribute ('src',baseUrl + 'rse-1.png');

        // each card have data-id (0-1), 12 cards
        card.setAttribute('data-id',i)

        // adding event listener - click event, calling flipcard() function
//card.addEventListener('click', flipcard)

       //// attention ////
       //// all this card will let image element with different 'id' we created, 
       //// will be placed inside html div class 'grid' using 'appendchild()'
        grid.appendChild(card);

    }   
}

// check for match

//
// call createBoard() funtion
createBoard();

// "TODO: rsb.png  "  - create square border (white+black+white stirpe)

});