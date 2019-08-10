//array to store four cards
const cards = ["queen","queen","king","king"];
cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped queen");

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You have found a match!');
  } else if (cardsInPlay[0] != cardsInPlay[1]) {
    alert('Sorry, try again');
  }
}




function flipCard(cardId) {

}
