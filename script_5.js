const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Prejuges', id: 873495, rented: 67 },
  { title: 'Les freres Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forets de Siberie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mange mon pere', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Hola ! Bienvenue dans le script 5 ahaha ! 1) Est-ce que tous les livres ont été au moins empruntés une fois ?")
let isRented = books.filter(book => (book.rented >= 1))

for (let index in isRented){
  console.log (isRented[index].title + " | oui, " + isRented[index].rented + " fois")
}

console.log("2) Quel est livre le plus emprunté ?")
let tri = []

for (let index in books){
  let list = (books[index].rented + " " + books[index].title)
  tri.push(list)
}

tri.sort()

console.log(" ")
console.log(tri.reverse()[0])

console.log("3) Quel est le livre le moins emprunté ?")
console.log(tri.reverse()[0])

console.log("4) Trouve le livre avec l'ID: 873495")
let find = books.filter(book => (book.id == 873495))

for (let index in find){
  console.log(find[index].title + " " + find[index].id + " " + find[index].rented)
}

console.log("5) Supprime le livre avec l'ID: 133712")
let del = books.filter(suppr => (suppr.id === 133712))

books.splice(del, 1)

console.log(books)

console.log("6) Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé")
let tritri = []

for (let index in books){
  let tdl = (books[index].title + " " + books[index].id + " " + books[index].rented)
  tritri.push(tdl)
}

let classement = tritri.sort()

console.log(classement)
