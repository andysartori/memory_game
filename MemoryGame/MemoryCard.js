var cardOne = 'queen';
var cardTwo = 'king';
var cardThree = 'queen';
var cardFour = 'king';

/*if (cardOne == cardThree) {
	alert('You Found A Match!');
}
else {
	alert('Sorry, Try again!');
}*/

var board = document.getElementById('game-board');
for(var i = 0; i<4; i++) {
	
}


/*var createCardsFunction = function(x)
for(var i = 0; i<4; i++) {
	console.log('Match');
} if else (card == 'king') {
	alert('c');
}*/

var cards = ['queen','queen','king', 'king'];
var cardsInPlay = [];
var createBoard = function() {
	for (var i = 0; i< cards.length; i++) {
  console.log(cards[i]);
  // this will set the card's 'data-card' to be the element of the array
  // data- attributes are meant to store data about an element that is not
  // tied to a style.
  // i.e. "king"
  /*console.log(card);*/
  	var card = document.createElement('div'); // create div
		card.classList.add('card'); // adds card class to div
		board.appendChild(card); // adds it to the gameboard div)
  	card.setAttribute('data-card', cards[i]);
  	card.addEventListener('click', isTwoCards);
	};
};
createBoard(); 



function isMatch(cardsInPlay) {
	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("Match");
	} else {
	  alert ('Not A Match');
	}  
};


function isTwoCards() {
  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(cardsInPlay);

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];
  }

}












