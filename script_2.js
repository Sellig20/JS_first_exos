var nb = prompt("De quel chiffre/nombre veux-tu calculer la factorielle ?")

function factorial(nb)
{
	var i = 1;
	var result = 1;
	while (i <= nb )
	{
		result = result * i;
		i++ ; //L'incrementation de i fait tout : chaque tour de boucle = calcul de chaque chiffre avant nb
	}
    return result;
}

console.log(`Le resultat est le suivant : ${factorial(nb)}`);
