function Deck() {
	this.cards = [];
}

Deck.prototype.remove = function(arr, idx) {
	var temp = arr[idx]; 
	for(var i = idx; i < arr.length-1; i++) {
		arr[i] = arr[i+1];
	}
	arr.length -= 1;
	return temp;
}

Deck.prototype.shuffle = function() {
	var newArr = [];
	for(var i = 0; i < 52; i++) {
		var idx = Math.floor(Math.random()*this.cards.length);
		newArr.push(this.remove(this.cards, idx));
	}
	this.cards = newArr;
}

Deck.prototype.reset = function() {
	var deck = [];
		for(var suits = 0; suits < 4; suits++) {
			for(var val = 1; val <= 13; val++) {
				var card = {};
				card.value = val;
				if(suits === 0) {
					card.suit = "hearts";
					card.suitCode = "\u2665"
				} else if(suits === 1) {
					card.suit = "diamonds";
					card.suitCode = "\u2666"
				} else if(suits === 3) {
					card.suit = "clubs";
					card.suitCode = "\u2660"
				} else {
					card.suit = "spades";
					card.suitCode = "\u2663"
				}
				if(val === 1) {
					card.name = "A";
				} else if(val === 11) {
					card.name = "J";
				} else if(val === 12) {
					card.name = "Q";
				} else if(val === 13) {
					card.name = "K";
				} else {
					card.name = ""+val;
				}
				deck.push(card);
			}
		}
		this.cards = deck;
}

Deck.prototype.deal = function(count=1) {
		return this.cards.shift();
}

Deck.prototype.print = function() {
	this.cards.forEach(function(el) {
		console.log(el.name+el.suitCode);
	})
}

function Player(nm) {
	this.name = nm;
	this.hand = [];
}

Player.prototype.takeCard = function(deck) {
	this.hand.push(deck.deal());
}

Player.prototype.discard = function(idx) {
	let temp = this.hand[idx];
	for(let i = idx; i < this.hand.length; i++) {
		this.hand[i] = this.hand[i+1];
	}
	this.hand.length -= 1;
	return temp;
}

let deck = new Deck();
deck.reset();
deck.shuffle();
let p1 = new Player("bob");
let p2 = new Player("stuart");
p1.takeCard(deck);
p2.takeCard(deck);
console.log(p1.name + ":" + p1.hand[0].name+p1.hand[0].suitCode);
console.log(p2.name + ":" + p2.hand[0].name+p2.hand[0].suitCode);
if(p1.hand[0].value > p2.hand[0].value) {
	console.log(`${p1.name} wins!`);
} else if(p1.hand[0].value < p2.hand[0].value) {
	console.log(`${p2.name} wins!`);
} else {
	console.log("It's a tie!");
}
console.log("");