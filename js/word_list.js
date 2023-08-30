const wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    word: "computer",
    hint: "An electronic device used for processing data.",
  },
  {
    word: "pizza",
    hint: "A popular Italian dish often topped with cheese and various ingredients.",
  },
  {
    word: "soccer",
    hint: "A sport played between two teams with a round ball.",
  },
  {
    word: "oxygen",
    hint: "A chemical element essential for respiration and combustion.",
  },
  {
    word: "beach",
    hint: "A sandy or pebbly area by the sea or lake, often visited for recreation.",
  },
  {
    word: "book",
    hint: "A written or printed work consisting of pages bound together.",
  },
  {
    word: "mountain",
    hint: "A large geological landform rising above the surrounding land, typically with steep sides.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "camera",
    hint: "A device used to capture and store photographic images or videos.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "dog",
    hint: "A domesticated mammal often kept as a pet or used for various purposes.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits around a star and does not produce light of its own.",
  },
  {
    word: "chocolate",
    hint: "A sweet food made from roasted and ground cacao beans.",
  },
  {
    word: "car",
    hint: "A road vehicle with an engine used for transportation.",
  },
  {
    word: "painting",
    hint: "The art of using paint to create images or designs on a surface.",
  },
  {
    word: "moon",
    hint: "The natural satellite of the Earth that orbits around it.",
  },
  {
    word: "garden",
    hint: "An area of land used for cultivating flowers, plants, or vegetables.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the natural and physical world.",
  },
  {
    word: "bicycle",
    hint: "A two-wheeled vehicle propelled by pedals.",
  },
  {
    word: "fire",
    hint: "The rapid oxidation of a material, releasing heat, light, and flames.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that forms a multicolored arc in the sky.",
  },
  {
    word: "music",
    hint: "The art of combining sounds in a rhythmic and harmonious manner.",
  },
  {
    word: "flower",
    hint: "The reproductive structure found in flowering plants.",
  },
  {
    word: "history",
    hint: "The study of past events, particularly in human affairs.",
  },
  {
    word: "ocean",
    hint: "A vast body of saltwater that covers most of the Earth's surface.",
  },
  {
    word: "language",
    hint: "A system of communication used by humans, typically consisting of words and grammar.",
  },
  {
    word: "sun",
    hint: "The star at the center of the solar system, providing light and heat to Earth.",
  },
  {
    word: "dance",
    hint: "A series of rhythmic movements performed to music.",
  },
  {
    word: "paint",
    hint: "A colored substance that is spread over a surface to create a picture or design.",
  },
  {
    word: "friend",
    hint: "A person whom one knows and with whom one has a bond of mutual affection.",
  },
  {
    word: "bird",
    hint: "A warm-blooded vertebrate with feathers, beak, and wings.",
  },
  {
    word: "universe",
    hint: "All matter, energy, and space considered as a whole.",
  },
  {
    word: "movie",
    hint: "A form of entertainment that tells stories through moving images.",
  },
  {
    word: "planetarium",
    hint: "A facility with a domed ceiling projecting images of celestial objects.",
  },
  {
    word: "sunglasses",
    hint: "Protective eyewear worn to shield the eyes from sunlight.",
  },
  {
    word: "basketball",
    hint: "A sport played with a large ball and hoops, popular worldwide.",
  },
  {
    word: "television",
    hint: "An electronic device used for receiving and displaying broadcast signals.",
  },
  {
    word: "flowerpot",
    hint: "A container used for growing and displaying plants.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cacao beans, often enjoyed as a dessert.",
  },
  {
    word: "airplane",
    hint: "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.",
  },
  {
    word: "hamburger",
    hint: "A popular sandwich consisting of a cooked patty of ground meat placed between two buns.",
  },
  {
    word: "swimming",
    hint: "The activity or sport of propelling oneself through water using the limbs.",
  },
  {
    word: "raincoat",
    hint: "A waterproof coat worn to protect against rain.",
  },
  {
    word: "safari",
    hint: "An expedition to observe or hunt wild animals, especially in Africa.",
  },
  {
    word: "gymnastics",
    hint: "A sport involving exercises that require strength, flexibility, and agility.",
  },
  {
    word: "butterfly",
    hint: "An insect with large, often brightly colored wings.",
  },
  {
    word: "telephone",
    hint: "A device used for transmitting sound and voice signals over long distances.",
  },
  {
    word: "fireworks",
    hint: "Explosive devices used to produce colorful displays in the sky.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high and continuous rainfall.",
  },
  {
    word: "mountaineer",
    hint: "A person who climbs mountains as a sport or profession.",
  },
  {
    word: "motorcycle",
    hint: "A two-wheeled vehicle powered by an engine, typically used for transportation.",
  },
  {
    word: "jungle",
    hint: "A dense forest in a tropical region, often characterized by an abundance of vegetation.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a crater or vent through which lava, rock fragments, and gases are erupted.",
  },
  {
    word: "dinosaur",
    hint: "An extinct reptile that lived millions of years ago, known for its large size.",
  },
  {
    word: "cactus",
    hint: "A desert plant with spiky stems and often colorful flowers.",
  },
  {
    word: "robot",
    hint: "A machine capable of carrying out complex actions automatically.",
  },
  {
    word: "sculpture",
    hint: "An art form that involves creating three-dimensional figures or designs.",
  },
  {
    word: "karate",
    hint: "A martial art developed in Japan characterized by strikes, kicks, and defensive techniques.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height, often found in natural landscapes.",
  },
  {
    word: "treasure",
    hint: "Valuable items or wealth that is hidden or buried.",
  },
  {
    word: "lighthouse",
    hint: "A tower or building equipped with a bright light to guide and warn ships at sea.",
  },
  {
    word: "penguin",
    hint: "A flightless bird found in the southern hemisphere, known for its black and white plumage.",
  },
  {
    word: "tropical",
    hint: "Relating to or characteristic of the tropics, typically warm and humid regions.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience, often involving unknown or risky elements.",
  },
  {
    word: "parachute",
    hint: "A device used to slow down the descent of a person or object through the air.",
  },
  {
    word: "carousel",
    hint: "A rotating platform with seats or horses for amusement rides.",
  },
];
