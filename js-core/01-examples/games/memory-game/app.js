// dom event lister
document.addEventListener('DOMContentLoaded',() =>  {

// // ---[Card Option]----//

// // ---[array of cards with names]---
const cardArray = [
    {
        name: "40",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/40.png"
    },
    {
        name: "40",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/40.png"
    },
    {
        name: "41",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/41.png"
    },
    {
        name: "41",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/41.png"
    },
    {
        name: "42",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/42.png"
    },
    {
        name: "42",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/42.png"
    },
    {
        name: "43",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/43.png"
    },
    {
        name: "43",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/43.png"
    },
    {
        name: "44",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/44.png"
    },
    {
        name: "44",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/44.png"
    },
    {
        name: "45",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/45.png"
    },
    {
        name: "45",
        img: "https://ofekbytes.github.io/assets/icons/png/100x100-pixels/45.png"
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
        card.setAttribute ('src','https://ofekbytes.github.io/assets/icons/png/100x100-pixels/rs4.png');

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



});