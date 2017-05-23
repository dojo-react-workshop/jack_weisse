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
				if(val === 1) {
					card.name = "Ace";
				} else if(val === 11) {
					card.name = "Jack";
				} else if(val === 12) {
					card.name = "Queen";
				} else if(val === 13) {
					card.name = "King";
				} else {
					card.name = ""+val;
				}
				if(suits === 0) {
					card.suit = "hearts";
				} else if(suits === 1) {
					card.suit = "diamonds";
				} else if(suits === 3) {
					card.suit = "clubs";
				} else {
					card.suit = "spades";
				}
				deck.push(card);
			}
		}
		this.cards = deck;
}

Deck.prototype.print = function() {
	this.cards.forEach(function(el) {
		console.log(el);
	})
}

var deck = new Deck();
deck.reset();
deck.shuffle();
