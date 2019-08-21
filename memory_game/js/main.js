const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again");
        }
    }
};

function flipcard(cardId) {
    checkForMatch();
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
};


flipcard(0);
flipcard(2);


//stopped at functions unit 9