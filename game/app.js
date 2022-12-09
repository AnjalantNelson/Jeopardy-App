const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
document.addEventListener('contextmenu', event => event.preventDefault());


const jeopardyCategories = [
	{
		genre: 'Music',
		questions: [
			{
				question: "the song 'Anaconda' by Nicki Minaj samples what song?",
				answers: ["Baby Got Back", "Can't touch this"],
				correct: "Baby Got Back",
				level: "easy"
			},
			{
				question: "Kendrick lamar was swimming in a pool full of what?",
				answers: ["money", "liqour"],
				correct: "liqour",
				level: "medium"
			},
			{
				question: "what song by Nas was made as a response to Jay-Z during their feud, and became a verb in rap?",
				answers: ["Control", "Ether"],
				correct: "Ether",
				level: "hard"
			},
			{
				question: "What rap group has a album that cannot be commercially exploited until 2103?",
				answers: ["Wu-Tang Clan", "N.W.A"],
				correct: "Wu-Tang Clan",
				level: "expert"
			},
			{
				question: "The 1995 Source awards caused what controversial battle to erupt?",
				answers: ["west vs. east", "biggie vs. tupac"],
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
				answers: ["Bazinga", "how you do-in"],
				correct: "Bazinga",
				level: "easy"
			},
			{
				question: "What Candian Show has Town of 5000 people?",
				answers: ["LetterKenny", "Degrassi"],
				correct: "LetterKenny",
				level: "medium"
			},
			{
				question: "how did Barry in 'How I Met Your Mother' get his job?",
				answers: ["worked his way up", "working with the FBI"],
				correct: "working with the FBI",
				level: "hard"
			},
			{
				question: "who replaced charlie sheen on two and a half men?",
				answers: ["Ashton Kutcher", "Neil Patrick Harris"],
				correct: "Ashton Kutcher",
				level: "expert"
			},
			{
				question: "where is fez from?",
				answers: ["Phillipines", "It was never revealed"],
				correct: "It was never revealed",
				level: "pro"
			}
		]
	},
	{
		genre: 'Video Games',
		questions: [
			{
				question: "what's the name of the italian plumber?",
				answers: ["sonic", "mario"],
				correct: "mario",
				level: "easy"
			},
			{
				question: "if you're a greek god, you better watch out for?",
				answers: ["kratos", "arteus"],
				correct: "kratos",
				level: "medium"
			},
			{
				question: "when did the first GTA come out?",
				answers: ["Nov 1997", "Jan 2001"],
				correct: "Nov 1997",
				level: "hard"
			},
			{
				question: "cyberpunk was delayed for how long?",
				answers: ["1 year", "4 years"],
				correct: "Wu-Tang Clan",
				level: "expert"
			},
			{
				question: "what is the name of olimar's ship in pikmin?",
				answers: ["S.S dolphin", "S.S planetary"],
				correct: "S.S dolphin",
				level: "pro"
			}
		]
	},
	{
		genre: 'Anime',
		questions: [
			{
				question: "what is the main character's name in 'bleach'?",
				answers: ["saitama", "ichigo"],
				correct: "ichigo",
				level: "easy"
			},
			{
				question: "how many days did it take for goku's spirit bomb?",
				answers: ["3 days", "3 episodes"],
				correct: "3 episodes",
				level: "medium"
			},
			{
				question: "how long did saitama's train?",
				answers: ["10 years", "3 years"],
				correct: "3 years",
				level: "hard"
			},
			{
				question: "why did gon's dad abandon him?",
				answers: ["to continue being a hunter", "he had another family"],
				correct: "to continue being a hunter",
				level: "expert"
			},
			{
				question: "what is meliodas's power level in assault mode?",
				answers: ["142,000", "56,000"],
				correct: "142,000",
				level: "pro"
			}
		]
	},
	{
		genre: 'Social Media',
		questions: [
			{
				question: "Facebook was created by who?",
				answers: ["Jesse Eisenberg", "Mark Zuckerberg"],
				correct: "Mark Zuckerberg",
				level: "easy"
			},
			{
				question: "who was the first friend everyone got on mySpace?",
				answers: ["Tom", "Adam"],
				correct: "Tom",
				level: "medium"
			},
			{
				question: "Vine was bought by what Company?",
				answers: ["instagram", "Twitter"],
				correct: "Twitter",
				level: "hard"
			},
			{
				question: "what was tik-tok before it was tik-tok",
				answers: ["Musical.ly", "ByteDance"],
				correct: "Musical.ly",
				level: "expert"
			},
			{
				question: "SnapChat introduced 'spotlight' in what year?",
				answers: ["2019", "2020"],
				correct: "2020",
				level: "pro"
			}
		]
	}
]

let score = 0

function addCatergory(category) {
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre

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
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())


        card.addEventListener('click', flipcard)
	})	
}



jeopardyCategories.forEach(category => addCatergory(category))

function flipcard() {
    this.innerHTML = ""
    this.style.fontSize = "20px"
    this.style.lineHeight = "30px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')

    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    this.append(textDisplay, firstButton, secondButton)

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipcard)) //stops you from flipping other cards when one is flipped.
}

function getResult() {
    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipcard))

    const cardOfButton = this.parentElement //all the info from arrays are stored in parent node

    if (cardOfButton.getAttribute('data-correct') == this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML= cardOfButton.getAttribute('data-value')
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
    cardOfButton.removeEventListener('click', flipcard)
}

