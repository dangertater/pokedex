// let body = document.getElementById("body")
// let main = dcoument.getElementById("main")
let pokemonArray = []

// let getCharmander = () => {
// 	fetch("https://pokeapi.co/api/v2/pokemon/charmander")
// 		.then((res) => res.json())
// 		.then((data) => console.log(data))
// }

let getFirstGenPokemon = () => {
	// for (let i = 1; i < 151; i++) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/`)
		.then((res) => res.json())
		.then((data) => pushNamesInArray(data))
}
// }

let getNext20 = () => {
	// for (let i = 1; i < 151; i++) {
	fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)
		.then((res) => res.json())
		.then((data) => pushNamesInArray(data))
}

let pushNamesInArray = (data) => {
	console.log(data)
}
// getCharmander()
getFirstGenPokemon().then(getNext20)

// let deleteme = () => {
// 	return new Promise((resolve, reject) => {
// 		for (let i = 1; i < 151; i++) {
// 			fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) =>
// 				console.log(res)
// 			)
// 		}
// 	})
// }

// getFirstGenPokemon()
// console.log("pokemonArray", pokemonArray)
