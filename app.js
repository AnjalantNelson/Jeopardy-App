const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
document.addEventListener('contextmenu', event => event.preventDefault());


const jeopardyCategories = [
	{
		genre: 'Popular Music',
		questions: [
			{
				question: "the song 'Anaconda' by Nicki Minaj samples what song?",
				answer: ["Baby Got Back", "Can't touch this"],
				correct: "Baby Got Back",
				level: "easy"
			},
			{
				question: "Kendrick lamar was swimming in a pool full of what?",
				answer: ["money", "liqour"],
				correct: "liqour",
				level: "medium"
			},
			{
				question: "what song by Nas was made as a response to Jay-Z during their feud, and became a verb in rap?",
				answer: ["Control", "Ether"],
				correct: "Ether",
				level: "hard"
			},
			{
				question: "What rap group has a album that cannot be commercially exploited until 2103?",
				answer: ["Wu-Tang Clan", "N.W.A"],
				correct: "Wu-Tang Clan",
				level: "expert"
			},
			{
				question: "The 1995 Source awards caused what controversial battle to erupt?",
				answer: ["west vs. east", "biggie vs. tupac"],
				correct: "west vs. east",
				level: "pro"
			}
		]
	},
	{
		genre: 'Television Shows',
		questions: [
			{
				question: "What is sheldon coopers catchphrase?",
				answer: ["Bazinga", "how you do-in"],
				correct: "Bazinga",
				level: "easy"
			},
			{
				question: "What Candian Show has Town of 5000 people?",
				answer: ["LetterKenny", "Degrassi"],
				correct: "LetterKenny",
				level: "medium"
			},
			{
				question: "?",
				answer: ["Contfrol", "Ether"],
				correct: "Ether",
				level: "hard"
			},
			{
				question: "What rap group has a album that cannot be commercially exploited until 2103?",
				answer: ["Wu-Tang Clan", "N.W.A"],
				correct: "Wu-Tang Clan",
				level: "expert"
			},
			{
				question: "The 1995 Source awards caused what controversial battle to erupt?",
				answer: ["west vs. east", "biggie vs. tupac"],
				correct: "west vs. east",
				level: "pro"
			}
		]
	},
	{
		genre: 'Video Games',
		questions: [
			{
				question: "the song 'Anaconda' by Nicki Minaj samples what song?",
				answer: ["Baby Got Back", "Can't touch this"],
				correct: "Baby Got Back",
				level: "easy"
			},
			{
				question: "Kendrick lamar was swimming in a pool full of what?",
				answer: ["money", "liqour"],
				correct: "liqour",
				level: "medium"
			},
			{
				question: "what song by Nas was made as a response to Jay-Z during their feud, and became a verb in rap?",
				answer: ["Control", "Ether"],
				correct: "Ether",
				level: "hard"
			},
			{
				question: "What rap group has a album that cannot be commercially exploited until 2103?",
				answer: ["Wu-Tang Clan", "N.W.A"],
				correct: "Wu-Tang Clan",
				level: "expert"
			},
			{
				question: "The 1995 Source awards caused what controversial battle to erupt?",
				answer: ["west vs. east", "biggie vs. tupac"],
				correct: "west vs. east",
				level: "pro"
			}
		]
	},
	{
		genre: 'Fellow Classmates',
		questions: [
			{
				question: "the song 'Anaconda' by Nicki Minaj samples what song?",
				answer: ["Baby Got Back", "Can't touch this"],
				correct: "Baby Got Back",
				level: "easy"
			},
			{
				question: "Kendrick lamar was swimming in a pool full of what?",
				answer: ["money", "liqour"],
				correct: "liqour",
				level: "medium"
			},
			{
				question: "what song by Nas was made as a response to Jay-Z during their feud, and became a verb in rap?",
				answer: ["Control", "Ether"],
				correct: "Ether",
				level: "hard"
			},
			{
				question: "What rap group has a album that cannot be commercially exploited until 2103?",
				answer: ["Wu-Tang Clan", "N.W.A"],
				correct: "Wu-Tang Clan",
				level: "expert"
			},
			{
				question: "The 1995 Source awards caused what controversial battle to erupt?",
				answer: ["west vs. east", "biggie vs. tupac"],
				correct: "west vs. east",
				level: "pro"
			}
		]
	},
	{
		genre: 'Social Media',
		questions: [
			{
				question: "the song 'Anaconda' by Nicki Minaj samples what song?",
				answer: ["Baby Got Back", "Can't touch this"],
				correct: "Baby Got Back",
				level: "easy"
			},
			{
				question: "Kendrick lamar was swimming in a pool full of what?",
				answer: ["money", "liqour"],
				correct: "liqour",
				level: "medium"
			},
			{
				question: "what song by Nas was made as a response to Jay-Z during their feud, and became a verb in rap?",
				answer: ["Control", "Ether"],
				correct: "Ether",
				level: "hard"
			},
			{
				question: "What rap group has a album that cannot be commercially exploited until 2103?",
				answer: ["Wu-Tang Clan", "N.W.A"],
				correct: "Wu-Tang Clan",
				level: "expert"
			},
			{
				question: "The 1995 Source awards caused what controversial battle to erupt?",
				answer: ["west vs. east", "biggie vs. tupac"],
				correct: "west vs. east",
				level: "pro"
			}
		]
	}
]

let score = 0

function addCategory(category) {
	// $(window).on('load', function () {
	// 	$('#loading').hide();
	//   })

	const column = document.createElement('div')
	column.classList.add('genre-column')

	const genreTitle = document.createElement('div')
	genreTitle.classList.add('genre-title')
	genreTitle.innerHTML = category.genre

	column.appendChild(genreTitle)
	game.append(column)

	category.questions.forEach(question => {
		const card = document.createElement('div')
		card.classList.add('card')
		column.append(card)

		if (question.level === 'easy') {
			card.innerHTML = 100
		}
		if (question.level === 'medium') {
			card.innerHTML = 200
		}
		if (question.level === 'hard') {
			card.innerHTML = 300
		}
		if (question.level === 'expert') {
			card.innerHTML = 400
		}
		if (question.level === 'pro') {
			card.innerHTML = 500
		}

		card.setAttribute('data-question', question.question)
		card.setAttribute('data-answer-1', question.answer[0])
		card.setAttribute('data-answer-2', question.answer[1])
		card.setAttribute('data-correct', question.correct)
		card.setAttribute('data-value', card.getInnerHTML())

		card.addEventListener('click', flipCard)
	})	
}



jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
	this.InnerHTML = ""
	this.style.fontSize = "15px"
	this.style.lineHeight = "30px"
	const textDisplay = document.createElement('div')
	textDisplay.classList.add('card-text')
	textDisplay.InnerHTML = this.getAttribute('data-question')
	const firstButton = document.createElement('button')
	const secondButton = document.createElement('button')
	firstButton.classList.add('first-button')
	secondButton.classList.add('second-button')
	firstButton.InnerHTML = this.getAttribute('data-answer-1')
	secondButton.InnerHTML = this.getAttribute('data-answer-2')
	firstButton.addEventListener('click', getResult)
	secondButton.addEventListener('click', getResult)
	this.append(textDisplay, firstButton, secondButton)

	const allCards = Array.from(document.querySelectorAll('.card'))
	allCards.forEach(card => card.removeEventListener('click', flipCard))
}

function getResult() {
	const allCards = Array.from(document.querySelectorAll('.card'))
	allCards.forEach(card => card.addEventListener('click', flipCard))
	const cardOfButton = this.parentElement

	if (cardOfButton.getAttribute('data-correct') == this.InnerHTML) {
		score = score + parseInt(cardOfButton.getAttribute('data-value'))
		scoreDisplay.innerHTML = score
		cardOfButton.classList.add('correct-answer')
		setTimeout(() => {
			while (cardOfButton.firstChild) {
				cardOfButton.removeChild(cardOfButton.lastChild)
			}
			cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
		}, 100)
	} else {
		cardOfButton.classList.add('wrong-answer')
		setTimeout(() => {
			while (cardOfButton.firstChild) {
				cardOfButton.removeChild(cardOfButton.lastChild)
			}
			cardOfButton.innerHTML = 0
	}, 100)
	}
	cardOfButton.removeEventListener('click', flipCard)
}