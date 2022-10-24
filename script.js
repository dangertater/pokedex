let body = document.getElementById("body")
let main = document.getElementById("main")
let allPokemonArray = []
let firstTwenty = []
let secondTwenty = []
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
	return fetch(url)
		.then((res) => res.json())
		.then((data) => {
			pushAllPokemon(data)
			return data
		})
		.then(pushFirstTwenty)
		.then(htmlAccordianGenerator)
}

let pushAllPokemon = (data) => {
	allPokemonArray.push(data)
}

let pushFirstTwenty = () => {
	return new Promise((resolve) => {
		for (let i = 0; i < 20; i++) {
			firstTwenty.push(allPokemonArray[0].results[i].name)
		}
		console.log(firstTwenty)
		resolve()
	})
}

let htmlAccordianGenerator = () => {
	// return new Promise((resolve) => {
	for (let i = 0; i < 21; i++) {
		let accordianItem = `
			<div class="accordion" id="accordionExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="headingOne">
						<button
							class="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							${firstTwenty[i]}
						</button>
					</h2>
					<div
						id="collapse${numberWords[i]}"
						class="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
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

getAllPokemon(`https://pokeapi.co/api/v2/pokemon/`)

// console.log("without json", firstTwenty[0].results)
// console.log("with json", JSON.stringify(firstTwenty[0].results[i].name))

// single accordian html below
// <div class="accordion-item">
// <h2 class="accordion-header" id="headingTwo">
//   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//     Accordion Item #2
//   </button>
// </h2>
// <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//   <div class="accordion-body">
//     <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//   </div>
// </div>
// </div>
