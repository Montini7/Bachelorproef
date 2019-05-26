window.cards = [
	// {
	// 	"id": 1,
	// 	"description": "We just reached 1000 paying customers.",
	// 	"character": "office-manager",
	// 	"conditions": "",
	// 	"choices": {
	// 		"a": {
	// 			"label": "Awesome",
	// 			"values": {
	// 				"valuation": 2,
	// 				"happiness": 5,
	// 				"time": 0
	// 			}
	// 		},
	// 		"b": {
	// 			"label": "Awesome",
	// 			"values": {
	// 				"valuation": 2,
	// 				"happiness": 5,
	// 				"time": 0
	// 			}
	// 		}
	// 	}
	// },
	{
		"id": 1,
		"description": "Een van je klanten heeft een openstaande factuur niet binnen de termijn betaald.",
		"character": "PR1",
		"choices": {
			"a": {
				"label": "A. Je contacteert de klant met een reminder over de betaling",
			},
			"b": {
				"label": "B. Je neemt juridische stappen tegen de klant"
			},
			"c": {
				"label": "C. Je doet niets"
			}

		},
		"correctAnswer":{
			"label": "Je contacteert de klant met een reminder over de betaling"
		}
	},
	{
		"id": 2,
		"description": "Een werknemer in je startup meld zich voor de eerste keer ziek dit jaar. Wat doe je?",
		"character": "victor-frontend, tanya-frontend",
		"choices": {
			"a": {
				"label": "De werknemer veel beterschap en een spoedig herstel wensen.",
			},
			"b": {
				"label": "Een privé detective inhuren en kijken of hij liegt over zijn gezondheid."
			},
			"c": {
				"label": "De werknemer ontslagen."
			}
		},
		"correctAnswer":{
			"label": "De werknemer veel beterschap en een spoedig herstel wensen."
		}
	},
	{
		"id": 3,
		"description": "Welk kies je? A. 1 miljoen euro voor 100% van de aandelen van je bedrijf. B. $200.000 voor 5% van de aandelen van je bedrijf?",
		"character": "victor-frontend, tanya-frontend",
		"choices": {
			"a": {
				"label": "A",
			},
			"b": {
				"label": "B",
			
			},
			"correctAnswer":{
				"label": "A"
			}
		}
	}
]