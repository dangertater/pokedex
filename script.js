let body = document.getElementById("body")
let main = document.getElementById("main")
let serachBar = document.getElementById("searchBar")
let searchButton = document.getElementById("searchButton")
let pokemonNameString = document.getElementById("")
let allPokemonArray = []
//handling all 150 was less than fun, so doing 20 and then another 20 pokemon
//----after 40 figure restart with async/await and do a full 150 then
let firstTwenty = []
let secondTwenty = []
//necessary in order to manipulate the HTML while looping
let numberWords = [
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
	"Eleven",
	"Twelve",
	"Thirteen",
	"Fourteen",
	"Fifteen",
	"Sixteen",
	"Seventeen",
	"Eighteen",
	"Nineteen",
	"Twenty",
]

let getAllPokemon = (url) => {
	if (url === null) {
		return Promise.resolve()
	}
	return (
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				pushAllPokemon(data)
				return data
			})
			//the above lines you helped me write on friday night. Each of your .then's returned arguments while mine are circumnavigating it
			//----by making global variables. Still uses promises but unsure if it'd be best practice
			.then(pushFirstTwenty)
			.then(htmlAccordianGenerator)
	)
}

let pushAllPokemon = (data) => {
	allPokemonArray.push(data)
}

//function is simple, but i'm essentially using promise in order to chain functions together without having a reject/catch implemented
//----should I consistantly be implementing rejects/catches for le practice?
let pushFirstTwenty = () => {
	return new Promise((resolve) => {
		for (let i = 0; i < 20; i++) {
			firstTwenty.push(allPokemonArray[0].results[i].name)
		}
		console.log(firstTwenty)
		resolve()
	})
}

//where the html gets updated for each pokemon, establishing generated unique accordians is still turbulant
//----currently multiple accordians are made but they do not function independently of one another
let htmlAccordianGenerator = () => {
	// return new Promise((resolve) => {
	for (let i = 0; i < 21; i++) {
		let accordianItem = `
			<div class="accordion" id="pokemon${numberWords[i]}">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button
							id="button${firstTwenty[i]}"
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapse${numberWords[i]}"
							aria-expanded="true"
							aria-controls="collapse${numberWords[i]}"
						>
							${firstTwenty[i]}
						</button>
					</h2>
					<div
//changing the below line to the looping value instead of collapseOne is when the 
//----accordians started working independently
						id="collapse${numberWords[i]}"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#${numberWords[i]}"
					>
						<div class="accordion-body">
                        ${firstTwenty[i]} is a bad motherfucker
						</div>
					</div>
				</div>
			</div>
		`
		main.innerHTML = main.innerHTML + accordianItem
	}
	// resolve()
	// })
}
//id="button${firstTwenty[i]}"

//searchButton
searchButton.addEventListener("click", (e) => {
	searchFilter()
})

//search bar will filter out any pokemon whose name does not match the input text
// let searchFilter = () => {
// 	for (let i = 0; i < serachBar.value.length; i++) {
// 		if (serachBar.value[i] === 'pseudoCode for button.innerText[i]')
// 	}
// }
getAllPokemon(`https://pokeapi.co/api/v2/pokemon/`)

// serachBar.attr("placeholder", "new placeholder")
