var game = {
	players: [],
	addPlayer: function(name){
		this.players.push(playerConstructor(name));
	}

}

function playerConstructor(name){
	player = {};
	player.name = name;
	player.hand = [];
	player.addCard = function(card){
		player.hand.push(card);
	}
	player.getCard = function() {
		let pokeUrl = "http://pokeapi.co/api/v1/pokemon/"+Math.floor(Math.random()*152);
		$.ajax({
			url: pokeUrl,
			cache: false
		})
		.done(function(msg){
			alert(msg.name);
			let card = {
				name: msg["name"],
				image: "http://pokeapi.co"+msg["sprites"][0]["resource_uri"]
			}
			player.addCard(card);
		});
	}
  	return player;
}

game.addPlayer("Jack");
game.addPlayer("Jon");
game.players[0].getCard();
game.players[1].getCard();

for(let i = 1; i < game.players.length+1; i++) {
	console.log(game.players[i-1].hand);
	// let id = "#player"+i;
	// let cur = game.players[i-1];
	// $(id).html("<h1>"+cur.name+"</h1>+<img src='"+cur.hand[0]["PokemonSprites"]+"'>");
}