let nbLevel = prompt ("Hola ! Bienvenue dans ma pyramide... Combien d'etages veux-tu ?");
let empty = " ";
let count = nbLevel;
let stage = "#"

for (let index = 1; index <= nbLevel; index++){
	count--;
	console.log(empty.repeat(count) + stage.repeat(index));
}
