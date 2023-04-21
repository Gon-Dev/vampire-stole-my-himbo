const events = [
	{
		type: "furnishings",
		title: "Fascinating Furnishings...",
		results: [
			{
				description: "An attractive portrait of the vampire, all in leather.",
				outcome: {
					clue: 1,
					injury: 1,
					daylight: 0,
				},
			},
			{
				description: "A room full of chains and oddly shaped furniture",
				outcome: {
					clue: 1,
					injury: 1,
					daylight: 0,
				},
			},
			{
				description: "A cupboard of thralls. You try and fit them back in the way you found them.",
				outcome: {
					clue: 1,
					injury: 1,
					daylight: 0,
				},
			},
			{
				description: "You slip on something awful. Good grief.",
				outcome: {
					clue: 1,
					injury: 1,
					daylight: 0,
				},
			},
			{
				description: "Your foot is caught in a bear trap. Why is this even here?",
				outcome: {
					clue: 0,
					injury: 1,
					daylight: -1,
				},
			},
			{
				description: "A lounge. You can rest here. These pillows are delightful.",
				outcome: {
					clue: 0,
					injury: -1,
					daylight: 0,
				},
			},
		],
	},
	{
		type: "encounters",
		title: "Strange Encounters...",
		results: [
			{
				description: "You meet the suspicious cleaner, Madame Garbagio.",
				outcome: {
					clue: 1,
					injury: 0,
					daylight: -1,
				},
			},
			{
				description: "Is that organ music? One cannot help but listen.",
				outcome: {
					clue: 1,
					injury: 0,
					daylight: -1,
				},
			},
			{
				description: "An unusually large bat. It's more of a dog with wings, in truth.",
				outcome: {
					clue: 0,
					injury: 1,
					daylight: 0,
				},
			},
			{
				description: "A ghost. It wails loudly. You must shake it off your trail.",
				outcome: {
					clue: 0,
					injury: -1,
					daylight: 0,
				},
			},
			{
				description: "You know that smell. Room odourisers and despair.",
				outcome: {
					clue: 1,
					injury: 0,
					daylight: 0,
				},
			},
			{
				description: "You found the vampire! This one's skin sparkles, meh.",
				outcome: {
					clue: 0,
					injury: 1,
					daylight: 0,
				},
			},
		],
	}, 
	{
		type: "wandering",
		title: "Wandering the Halls...",
		results: [
			{
				description: "Winding corridors, round and round in circles.",
				outcome: {
					clue: 1,
					injury: 0,
					daylight: -1,
				},
			},
			{
				description: "A dead end, filled with bats. Angry bats. Livid, really.",
				outcome: {
					clue: 0,
					injury: 0,
					daylight: -2,
				},
			},
			{
				description: "You get stuck in a closet. It's ironic, and tragic.",
				outcome: {
					clue: 0,
					injury: 0,
					daylight: -2,
				},
			},
      {
				description: "You find a blue shining portal. It led to the bathroom. Nice.",
				outcome: {
					clue: 0,
					injury: -1,
					daylight: -1,
				},
			},
      {
				description: "A corridor full of mirrors. Look at you, so damn cutie!",
				outcome: {
					clue: 0,
					injury: 0,
					daylight: -1,
				},
			},
      {
				description: "You found a cinema room playing Buffy endlessly. Sweet.",
				outcome: {
					clue: 0,
					injury: 0,
					daylight: -2,
				},
			},
		],
	}
];

export default events;