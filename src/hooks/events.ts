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
        description:
          "A cupboard of thralls. You try and fit them back in the way you found them.",
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
        description:
          "Your foot is caught in a bear trap. Why is this even here?",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: -1,
        },
      },
      {
        description:
          "A lounge. You can rest here. These pillows are delightful.",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
      {
        description:
          "A clown room. Don't worry, they won't eat you... probably.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A mad scientist's lab. Please don't touch anything. Or anyone.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description: "A wall of living portraits. Hmm, that's trite.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
      {
        description:
          "A room full of mannequins. They're not creepy at all. Really.",
        outcome: {
          clue: 1,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A hedge maze. Don't worry, you'll find your way out... eventually.",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description: "A room full of mirrors. You look great. No, really.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description:
          "A room full of spiders. Don't worry, they're just giant and poisonous.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: -1,
        },
      },
      {
        description: "A clown in an empty room. Oh, it's just a mirror.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A room full of haunted mirrors. You can see your worst nightmare.",
        outcome: {
          clue: 1,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A room full of voodoo dolls. They're harmless...unless you offend them.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description:
          "A room full of bats. Don't worry, Ozzy's already been here.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
      {
        description: "You found a room full of snakes. You hate snakes.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: -1,
        },
      },
      {
        description:
          "A room full of creaky dolls. They're friendly, but a little stiff.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description: "A room full of disembodied hands. High-fives all around!",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: -1,
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
          daylight: 0,
        },
      },
      {
        description: "Is that organ music? One cannot help but listen.",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description:
          "An unusually large bat. It's more of a dog with wings, in truth.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A ghost. It wails loudly. You must shake it off your trail.",
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
        description: "The blood fountain. Refreshing, but unsanitary.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description: "A mirror! Your reflection shows your innermost fear.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A portrait that follows your every move. It critiques your fashion sense.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
      {
        description: "A vampire accountant. They offer you a killer deal.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description: "The haunted ballroom. The ghosts insist on a waltz.",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description:
          "The library. There only are motivational and self-improvement books.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A vampire dentist. They promise to make your bite brighter.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: -1,
        },
      },
      {
        description:
          "You encounter a mad scientist. He tried to mansplain you. Fool.",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
      {
        description:
          "You found the vampire kitten. Awwww, it has little wings.",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description: "The vampire's disco. It's playing Thiller in loop.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: -1,
        },
      },
      {
        description:
          "The hallway of infinite doors. They lead to the same closet. Not again.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
      {
        description:
          "A talking portrait. It tells you dad jokes in a Transylvanian accent.",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description:
          "The swimming pool. The water's always warm, but not with chlorine.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "The fortune teller. She predicts you'll be lunch tomorrow.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "You found a tabletop. They're playing Curse of Strahd! Sweet!",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
    ],
  },
  {
    type: "wandering",
    title: "Wandering the Halls...",
    results: [
      // AGREGAR 14 MAS //
      {
        description: "Winding corridors, round and round in circles.",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description: "A dead end, filled with bats. Angry bats. Livid, really.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description: "You get stuck in a closet. It's ironic, and tragic.",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
      {
        description:
          "You find a blue shining portal. It led to the bathroom. Nice.",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
      {
        description: "A corridor full of mirrors. Look at you, so damn cutie!",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
      {
        description: "You found a cinema room playing Buffy endlessly. Sweet.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
      {
        description: "Walking the halls you get stuck in a zombie traffic jam. Better listen some radio. No signal.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description: "Through the corridors a werewolf asks you for a coin. Capitalism itself.",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
      {
        description:
          "It's a beautiful day outside. The birds are singing, the flowers are blooming and a body is being dismembered.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
      {
        description:
          "A sign on a door in the hallways says 'I can't go to hell. I'm all out of vacation days.'",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
			{
        description:
          "The skeleton union is making a strike. That fills you with determination.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
			{
        description:
          "Trough the halls you get to an deadend with a mirror. Despite everything, it's still you.",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
			{
        description:
          "A handsome 50 year old guy is running from some zombies with a child. Is that a new boyfriend?",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
			{
        description:
          "A group of warriors run after one entering a room. You hear them complain about some 'Leeroy'",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
			{
        description:
          "You lose a day arguing with an enchanted black armor blocking the way. It says 'None shall pass!'",
        outcome: {
          clue: 0,
          injury: 0,
          daylight: -1,
        },
      },
			{
        description:
          "You see a golden idol at the end of the hall. Behind, you hear the sound of something really big and spherical falling to the ground.",
        outcome: {
          clue: 0,
          injury: 1,
          daylight: 0,
        },
      },
			{
        description:
          "Hugh Jackman.",
        outcome: {
          clue: 0,
          injury: -1,
          daylight: 0,
        },
      },
			{
        description:
          "A group of goblins is performing a ritual for the vampire. They think you're his daughter and they tell you where he sleeps",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
			{
        description:
          "You found an altar to the vampire. Better leave him a cigarette.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
			{
        description:
          "You found a room with a Play Station and a copy of Castlevania SotN. Must...Resist...Stupidity Impulse.",
        outcome: {
          clue: 1,
          injury: 0,
          daylight: 0,
        },
      },
    ],
  },
];

export default events;
