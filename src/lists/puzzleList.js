const puzzleList = [
  /* Animals Puzzles, Category ID #1 */
  {
    'id': '1',
    'name': 'Axolotl',
    'hint': 'Also known as the Mexican Walking Fish, this amphibious salamander is ' +
      'critically endangered',
    'CategoryId' : '1'
  },
  {
    'id': '2',
    'name': 'Chinese Giant Salamander',
    'hint': 'Capable of growing nearly 6 feet in length,  it is currently ' +
      'the largest amphibian on the planet.',
    'CategoryId' : '1'
  },
  {
    'id': '3',
    'name': 'Glass Frog',
    'hint': 'Certain species have translucent abdominal skin that allows ' +
      'you to see their insides.',
    'CategoryId' : '1'
  },
  {
    'id': '4',
    'name': 'Indian Gharial',
    'hint': 'This Alligator-like animal is notable for its long, narrow ' +
      'snout and a bizarre grin comprised of nearly 100 teeth.',
    'CategoryId' : '1'
  },
  {
    'id': '5',
    'name': 'California Condor',
    'hint': 'Ranging in length from 43 to 55 inches and weighing 15 to 31 ' +
      'pounds, it is the largest land bird in North America.',
    'CategoryId' : '1'
  },
  {
    'id': '6',
    'name': 'Flightless Cormorant',
    'hint': 'Found only in the Galapagos Islands, this animal dives down' +
      ' to the bottom of the ocean in search of fish, eels, octopus and other small prey.',
    'CategoryId' : '1'
  },
  {
    'id': '7',
    'name': 'Kakapo',
    'hint': 'Found only in New Zealand, this animal is large, flightless, ' +
      'nocturnal, ground-dwelling, and mates by lekking.',
    'CategoryId' : '1'
  },
  {
    'id': '8',
    'name': 'Oilbird',
    'hint': 'This bird is nocturnal and finds its food by using echolocation, ' +
      'however it is not a bat and is land dwelling.',
    'CategoryId' : '1'
  },
  {
    'id': '9',
    'name': 'Shoebill',
    'hint': 'Found in east Africa, this animal is named for the shoe-like ' +
      'shape on its head and they tend to stand silent and motionless for long ' +
      'periods of time with a height of 43 to 55 inches.',
    'CategoryId' : '1'
  },
  {
    'id': '10',
    'name': 'Superb Bird of Paradise',
    'hint': 'This animal is known for the dazzling mating dance that makes ' +
      'this iridescent New Guinea beauty so special.',
    'CategoryId' : '1'
  },
  {
    'id': '11',
    'name': 'Victoria Crowned Pigeon',
    'hint': 'This animal is the largest of its kind, known for its powder ' +
      'blue body with a purple chest and its intricate royal crown.',
    'CategoryId' : '1'
  },
  {
    'id': '12',
    'name': 'Venezuelan Poodle Moth',
    'hint': 'Discovered in 2009 in Venezuela, this unusual poodle-looking ' +
      'animal has yet to be confirmed as a new species.',
    'CategoryId' : '1'
  },
  {
    'id': '13',
    'name': 'Bactrian Camel',
    'hint': 'Native to Central Asia, this animal is different from its ' +
      'more familiar cousins by the fact that it has two humps.',
    'CategoryId' : '1'
  },
  {
    'id': '14',
    'name': 'Chinese Water Deer',
    'hint': 'Given the nickname "Vampire Deer", this animal has two ' +
      'elongated canine teeth.',
    'CategoryId' : '1'
  },
  {
    'id': '15',
    'name': 'Saiga Antelope',
    'hint': 'Critically endangered, this animal stands out for their ' +
      'Elephant’s trunk like nose.',
    'CategoryId' : '1'
  },
  {
    'id': '16',
    'name': 'Sulawesi Babirusas',
    'hint': 'A true one of a kind, the males of this animal are the only ' +
      'mammal in the world with vertically growing canine teeth.',
    'CategoryId' : '1'
  },
  {
    'id': '17',
    'name': 'Long Beaked Echidna',
    'hint': 'One of only two mammals in the world known to lay eggs, ' +
      'this animal has a pointy snout that’s two-third the length of their head.',
    'CategoryId' : '1'
  },
  {
    'id': '18',
    'name': 'Duck Billed Platypus',
    'hint': 'One of only two mammals in the world known to lay eggs, ' +
      'this animal has a large, flat snout that resembles a duck.',
    'CategoryId' : '1'
  },
  {
    'id': '19',
    'name': 'Water Opossum',
    'hint': 'This animal is the only marsupial in the world in which ' +
      'both sexes have a pouch.',
    'CategoryId' : '1'
  },
  {
    'id': '20',
    'name': 'Naked Mole Rat',
    'hint': 'The longest living of its kind in the world, this animal ' +
      'has no ears at all and is practically blind.',
    'CategoryId' : '1'
  },
  {
    'id': '21',
    'name': 'Dumbo Octopus',
    'hint': 'This animals name originates from their resemblance to a title ' +
      'character of a 1941 Disney film. It has a prominent ear-like fin which ' +
      'extends from the mantle above each eye.',
    'CategoryId' : '1'
  },
  {
    'id': '22',
    'name': 'Frilled Shark',
    'hint': 'Considered a "living fossil", this animal has an eel-like body, ' +
      'six frilly pairs of gill slits, and 300 trident-shaped teeth.',
    'CategoryId' : '1'
  },
  {
    'id': '23',
    'name': 'Irrawaddy Dolphin',
    'hint': 'Unlike any other of its kind, this animal has a u-shaped blowhole ' +
      'that is placed on the left of the midline and opens towards the front.',
    'CategoryId' : '1'
  },
  {
    'id': '24',
    'name': 'Japanese Spider Crab',
    'hint': 'With legs that can span 12 feet in length, this animal crawls ' +
      'along the ocean floor like a creepy spider and is orange with white ' +
      'spots along the legs.',
    'CategoryId' : '1'
  },
  {
    'id': '25',
    'name': 'Mantis Shrimp',
    'hint': 'Typically around 4 – 8 inches, this tiny animal packs a punch! ' +
      'Their punch speed can be over 50 mph and is capable of smashing ' +
      'through crabs, clam shells, and aquariums.',
    'CategoryId' : '1'
  },
  /* Science Puzzles, Category ID #2 */
  {
    'id': '26',
    'name': 'Evaporation',
    'hint': 'The process in which energy (often from the sun) heats liquid water ' +
      'causing it to change to water vapor.',
    'CategoryId' : '2'
  },
  {
    'id': '27',
    'name': 'Ecosystem',
    'hint': 'All living and nonliving things in an environment and the many ' +
      'ways that they interact with each other.',
    'CategoryId' : '2'
  },
  {
    'id': '28',
    'name': 'Learned Trait',
    'hint': 'Behaviors that are learned through experience.',
    'CategoryId' : '2'
  },
  {
    'id': '29',
    'name': 'Inherited Trait',
    'hint': 'Traits that are passed down from parents to their offspring.',
    'CategoryId' : '2'
  },
  {
    'id': '30',
    'name': 'Camouflage',
    'hint': 'The use of any combination of materials, coloration, or ' +
      'lighting for concealment or hiding.',
    'CategoryId' : '2'
  },
  {
    'id': '31',
    'name': 'Pollination',
    'hint': 'The transfer of pollen to a stigma, ovule, flower, or plant to ' +
      'allow fertilization.',
    'CategoryId' : '2'
  },
  {
    'id': '32',
    'name': 'Birds',
    'hint': 'Organisms that hatch from eggs, have wings and feathers.',
    'CategoryId' : '2'
  },
  {
    'id': '33',
    'name': 'Amphibians',
    'hint': 'Organisms born in the water and have gills that become lungs.',
    'CategoryId' : '2'
  },
  {
    'id': '34',
    'name': 'Mammals',
    'hint': 'Organisms with warm blood, who drink milk, and sweat when it is ' +
      'warm.',
    'CategoryId' : '2'
  },
  {
    'id': '35',
    'name': 'Fish',
    'hint': 'Limbless cold-blooded vertebrates with gills and fins and lives ' +
      'wholly in water.',
    'CategoryId' : '2'
  },
  {
    'id': '36',
    'name': 'Reptiles',
    'hint': 'Animals of a class that includes snakes, lizards, crocodiles, ' +
      'turtles, and tortoises. They typically laying soft-shelled eggs on land.',
    'CategoryId' : '2'
  },
  {
    'id': '37',
    'name': 'Life Cycle',
    'hint': 'The series of changes in the life of an organism including ' +
      'reproduction.',
    'CategoryId' : '2'
  },
  {
    'id': '38',
    'name': 'Magnetic Force',
    'hint': 'A force produced when magnets interact.',
    'CategoryId' : '2'
  },
  {
    'id': '39',
    'name': 'Potential Energy',
    'hint': 'Stored energy within an object that has the ability to move.',
    'CategoryId' : '2'
  },
  {
    'id': '40',
    'name': 'Thermosphere',
    'hint': 'Located between about 50 and 440 miles above Earth’s surface, ' +
      'this is the hottest layer of the atmosphere but can feel cold.',
    'CategoryId' : '2'
  },
  {
    'id': '41',
    'name': 'Stratosphere',
    'hint': 'Located between approximately 7.5 and 31 miles above Earth’s ' +
      'surface, it is home to the ozone layer, which protects us from harmful ' +
      'ultraviolet radiation.',
    'CategoryId' : '2'
  },
  {
    'id': '42',
    'name': 'Mesosphere',
    'hint': 'Located between about 31 and 50 miles above Earth’s surface, ' +
      'the top of this atmosphere layer is the coldest place found within the ' +
      'Earth system.',
    'CategoryId' : '2'
  },
  {
    'id': '43',
    'name': 'Troposphere',
    'hint': 'Located from Earth’s surface to about 7.5 miles above Earth’s ' +
      'surface, this atmosphere layer`s height raises at the equator and drops ' +
      'at the north and south pole.',
    'CategoryId' : '2'
  },
  {
    'id': '44',
    'name': 'Exosphere',
    'hint': 'Located between about 440 and 6,200 miles above Earth’s surface, ' +
      'this is the highest layer of Earth’s atmosphere. Particles in this ' +
      'layer escape into space.',
    'CategoryId' : '2'
  },
  {
    'id': '45',
    'name': 'Periodic Table',
    'hint': 'Used to display and organize the elements based on atomic number.',
    'CategoryId' : '2'
  },
  {
    'id': '46',
    'name': 'Light Year',
    'hint': 'A unit of distance to measure the distance between stars and ' +
      'galaxies.',
    'CategoryId' : '2'
  },
  {
    'id': '47',
    'name': 'Metamorphic Rock',
    'hint': 'Rocks that arise from the transformation of existing rock to ' +
      'new types of rock.',
    'CategoryId' : '2'
  },
  {
    'id': '48',
    'name': 'Sedimentary Rock',
    'hint': 'Rock formed from sediments compacting and cementing.',
    'CategoryId' : '2'
  },
  {
    'id': '49',
    'name': 'Fossil',
    'hint': 'A preserved remnant or impression of an organism that lived in ' +
      'the past.',
    'CategoryId' : '2'
  },
  {
    'id': '50',
    'name': 'Igneous Rock',
    'hint': 'A type of rock that forms from the cooling of molten rock at or ' +
      'below the surface.',
    'CategoryId' : '2'
  },
  /* Holidays Puzzles, Category ID #3 */
  {
    'id': '51',
    'name': 'Ireland',
    'hint': 'The country from which Halloween originates.',
    'CategoryId' : '3'
  },
  {
    'id': '52',
    'name': 'All Hallows Eve',
    'hint': 'This is another name for Halloween.',
    'CategoryId' : '3'
  },
  {
    'id': '53',
    'name': 'The Great Pumpkin',
    'hint': 'Every Halloween, Charlie Brown helps his friend Linus wait for ' +
      'this character to appear.',
    'CategoryId' : '3'
  },
  {
    'id': '54',
    'name': 'Candy Corn',
    'hint': 'This candy was originally called chicken feed.',
    'CategoryId' : '3'
  },
  {
    'id': '55',
    'name': 'Milk and Cookies',
    'hint': 'Children often leave these out for Santa to drink and eat.',
    'CategoryId' : '3'
  },
  {
    'id': '56',
    'name': 'Kris Kringle',
    'hint': 'Another one of Santa`s names.',
    'CategoryId' : '3'
  },
  {
    'id': '57',
    'name': 'Snowflake',
    'hint': 'Each one of these are unique and can only be made when it is ' +
      'cold outside.',
    'CategoryId' : '3'
  },
  {
    'id': '58',
    'name': 'Gingerbread House',
    'hint': 'These houses are fun to make, and then to eat.',
    'CategoryId' : '3'
  },
  {
    'id': '59',
    'name': 'Ghostbusters',
    'hint': 'Who ya gonna call?',
    'CategoryId' : '3'
  },
  {
    'id': '60',
    'name': 'Family',
    'hint': 'The people we argue with at the Thanksgiving dinner table.',
    'CategoryId' : '3'
  },
  {
    'id': '61',
    'name': 'Gobble',
    'hint': 'The call of a male turkey or a way to eat your turkey.',
    'CategoryId' : '3'
  },
  {
    'id': '62',
    'name': 'Plymouth Rock',
    'hint': 'The landing place of the Pilgrims.',
    'CategoryId' : '3'
  },
  {
    'id': '63',
    'name': 'The Mayflower',
    'hint': 'This is the ship that brought the Pilgrims to the New World in 1620.',
    'CategoryId' : '3'
  },
  {
    'id': '64',
    'name': 'Holiday',
    'hint': 'A word used to describe a day that is special and celebrated ' +
      'by many people, for any/many reason(s).',
    'CategoryId' : '3'
  },
  {
    'id': '65',
    'name': 'Honey',
    'hint': 'Bees make this, Pooh bears love it, and it is also a nickname ' +
      'for someone who is loved.',
    'CategoryId' : '3'
  },
  {
    'id': '66',
    'name': 'Hugs and Kisses',
    'hint': 'Meaning of "XOXOXO".',
    'CategoryId' : '3'
  },
  {
    'id': '67',
    'name': 'Saint Valentine',
    'hint': 'Known as the patron Saint of Lovers.',
    'CategoryId' : '3'
  },
  /* Places Puzzles, Category ID #4 */
  {
    'id': '68',
    'name': 'The Great Pyramid of Giza',
    'hint': 'The only one of the Seven Wonders of the World that has remained ' +
      'largely intact, this was built in early 26th century BC and is the ' +
      'oldest of the Seven Wonders.',
    'CategoryId' : '4'
  },
  {
    'id': '69',
    'name': 'The Colossus of Rhodes',
    'hint': 'Constructed to celebrate the successful defence of Rhodes, a city ' +
      'in ancient Greece, this statue stood approximately 108 feet high, around ' +
      'the height of the Statue of Liberty and began construction in 292 BC and ' +
      'is one of the Seven Wonders of the World.',
    'CategoryId' : '4'
  },
  {
    'id': '70',
    'name': 'The Hanging Gardens of Babylon',
    'hint': 'The only of the Seven Wonders whose existence is in question, ' +
      'they are described as an ascending series of gardens with an ' +
      'elaborate watering and irrigation system which contained both large ' +
      'and a large variety of trees, shrubs, and vines.',
    'CategoryId' : '4'
  },
  {
    'id': '71',
    'name': 'The Lighthouse of Alexandria',
    'hint': 'For hundreds of years, this one of the Seven Wonders was one of ' +
      'the tallest man-made structures in the world. It used to guide boats ' +
      'to harbor and is estimated to have been at least 330 ft tall.',
    'CategoryId' : '4'
  },
  {
    'id': '72',
    'name': 'The Mausoleum at Halicarnassus',
    'hint': 'This wonder is a member of the Seven Wonders because of ' +
      'the beauty of its design and how it was decorated. This was a tomb ' +
      'built between 353 and 350 BC and was estimated to be around 148 ft tall.',
    'CategoryId' : '4'
  },
  {
    'id': '73',
    'name': 'The Statue of Zeus at Olympia',
    'hint': 'Built from ivory plates, gold panels, cedar wood, and precious ' +
      'stones, this representation of the Greek god of sky and thunder is ' +
      'one of the Seven Wonders of the World.',
    'CategoryId' : '4'
  },
  {
    'id': '74',
    'name': 'The Temple of Artemis',
    'hint': 'This was a Greek temple dedicated to the goddess Artemis. This ' +
      'is one of the Seven Wonders of the World.',
    'CategoryId' : '4'
  },
  {
    'id': '75',
    'name': 'The Great Wall of China',
    'hint': 'One of the New Seven Wonders of the World, this 13,170.70 mile ' +
      'fortification borders much of Northern China and was constructed over ' +
      'centuries for protection and allowed control of trade.',
    'CategoryId' : '4'
  },
  {
    'id': '76',
    'name': 'Petra',
    'hint': 'One of the New Seven Wonders of the World, this ancient city ' +
      'has been regarded as the capital of the Nabataean Kingdom. By ' +
      'controlling and regulating water from flash floods, it`s inhabitants ' +
      'created a desert oasis that can still be visited today and is known ' +
      'for it`s Hellenistic architecture.',
    'CategoryId' : '4'
  },
  {
    'id': '77',
    'name': 'The Colosseum',
    'hint': 'Not only is this is the largest ancient amphitheatre ever built, ' +
      'it is the largest standing amphitheatre in the world today. Construction ' +
      'completed in 80 AD, it is considered one of the New Seven Wonders ' +
      'of the World.',
    'CategoryId' : '4'
  },
  {
    'id': '78',
    'name': 'Machu Picchu',
    'hint': 'This 15th-century Inca citadel is often referred to as the ' +
      '"Lost City of the Incas". The civilization had no written language and ' +
      'no written records of the site while it was in use have been found. ' +
      'It is considered one of the New Seven Wonders of the World.',
    'CategoryId' : '4'
  },
  {
    'id': '79',
    'name': 'The Taj Mahal',
    'hint': 'This ivory-white marble mausoleum is located in India and is ' +
      'believed to have been completed in 1653. Considered the best example ' +
      'of Mughal architecture, this was designated as a UNESCO World Heritage ' +
      'Site in 1983 for being "the jewel of Muslim art in India and one of ' +
      'the universally admired masterpieces of the world`s heritage".',
    'CategoryId' : '4'
  },
  {
    'id': '80',
    'name': 'Giza Pyramids',
    'hint': 'This pyramid complex  is home to the Great Pyramid, the Pyramid ' +
      'of Khafre, and the Pyramid of Menkaure, and the Great Sphinx. It ' +
      'is considered one of the New Seven Wonders of the World.',
    'CategoryId' : '4'
  },
  {
    'id': '81',
    'name': 'Galapagos Islands',
    'hint': 'This archipelago of volcanic islands in the Eastern Pacific is ' +
      'famous for it`s endemic species such as the Flightless Cormorant, ' +
      'Marine Iguana, Lava Lizards and Giant Tortoises.',
    'CategoryId' : '4'
  },
  {
    'id': '82',
    'name': 'Stonehenge',
    'hint': 'This is one of the most famous landmarks in the UK. It is ' +
      'believed to have been constructed from around 3000 BC to 2000 BC and ' +
      'it`s outer ring consists of vertical standing 13 feet tall and 7 feet ' +
      'wide stones topped by connecting horizontal laying stones.',
    'CategoryId' : '4'
  },
  /* Sports and Games Puzzles, Category ID #5 */
  {
    'id': '83',
    'name': 'Lacrosse',
    'hint': 'This is considered the oldest team sport and oldest organized ' +
      'sport in Northern America.',
    'CategoryId' : '5'
  },
  {
    'id': '84',
    'name': 'Jesse Owens',
    'hint': 'In 1935, he broke three world records and tied another in 45 ' +
      'minutes. He broke the 220-yard dash, the 220-yard low hurdles, and the ' +
      'running broad jump records, and tied record for the 100-yard dash. At ' +
      'the 1936 Olympic Games a year later, he won four gold medals.',
    'CategoryId' : '5'
  },
  {
    'id': '85',
    'name': 'Gaylord Perry',
    'hint': 'This Hall of Fame pitcher famously stated, “They’ll put a man on ' +
      'the moon before I hit a home run.” in 1963. In 1969, mere hours after ' +
      'Neil Armstrong set foot on the Moon`s surface, he hit the first and ' +
      'only home run of his career.',
    'CategoryId' : '5'
  },
  {
    'id': '86',
    'name': 'Harry Chiti',
    'hint': 'In 1962, he became the first player in MLB to be traded for ' +
      'himself. After being traded for a player to be determined later, ' +
      'his debut for his new team left a lot to be desired and he became the ' +
      'mentioned player to be named later.',
    'CategoryId' : '5'
  },
  {
    'id': '87',
    'name': 'The Steagles',
    'hint': 'In 1943 during World War II, two NFL teams, the Steelers and the ' +
      'Eagles lost so many players to service that they merged for the season. ' +
      'This was their name.',
    'CategoryId' : '5'
  },
  {
    'id': '88',
    'name': 'Black and Yellow',
    'hint': 'The Pittsburgh Steelers, Pirates, and Penguins all share the ' +
      'same color uniforms. It is the only city where the major sports teams ' +
      'all share the same colors. These are the team colors.',
    'CategoryId' : '5'
  },
  {
    'id': '89',
    'name': 'Major League Baseball',
    'hint': 'In this league, a black underwear policy is enforced on ' +
      'umpires while on the job in case they split their pants.',
    'CategoryId' : '5'
  },
  {
    'id': '90',
    'name': 'Washington Bullets',
    'hint': 'Muggsy Bogues, the shortest person to play in the NBA (5′ 3″) and ' +
      'Manute Bol, the tallest person to play in the NBA (7′ 7″) once ' +
      'played for this NBA team.',
    'CategoryId' : '5'
  },
  {
    'id': '91',
    'name': 'Bill Russell',
    'hint': 'With an unbelievable 11 titles, this person has the most titles ' +
      'in NBA history as a player. He was also the first African American ' +
      'head coach to win an NBA championship!',
    'CategoryId' : '5'
  },
  {
    'id': '92',
    'name': 'National Basketball League',
    'hint': 'Founded in 1946 by Walter A. Brown, this league enforces a rule ' +
      'that states if a player dunks so hard that they shatter the backboard, ' +
      'the point is not counted and the player in question receives a technical foul',
    'CategoryId' : '5'
  },
  {
    'id': '93',
    'name': 'Denver Nuggets',
    'hint': 'The greatest NBA team to exist, they merged into the NBA in 1976 ' +
      'as one of the 6 chosen teams from the ABA after reaching the ABA ' +
      'finals in 1975.',
    'CategoryId' : '5'
  },
  {
    'id': '94',
    'name': 'Silver',
    'hint': 'Solid gold until 1912, the gold medals in the Olympics are now ' +
      'plated with this precious metal.',
    'CategoryId' : '5'
  },
  {
    'id': '95',
    'name': 'Ken Griffey Jr',
    'hint': 'Despite being allergic to chocolate, this former MLB great ' +
      'has a chocolate bar was named after him and in 2016 was elected to ' +
      'the Baseball Hall of Fame.',
    'CategoryId' : '5'
  },
  {
    'id': '96',
    'name': 'The Kentucky Derby',
    'hint': 'This is the oldest continuously held major sporting event in the ' +
      'United States. Taking place every year since the inaugural race on ' +
      'May 17, 1875.',
    'CategoryId' : '5'
  },
  {
    'id': '97',
    'name': 'Tug of War',
    'hint': 'Form 1900 to 1920, this was a team event in the Summer Olympics ' +
      'Games. Due to multiple clubs being able to represent the same country, ' +
      'in 1904, the US won the gold, silver and bronze medal and in 1908, ' +
      'Britain won all three medals as well.',
    'CategoryId' : '5'
  },
  /*
  {
    'id': '98',
    'name': 'Connect 4',
    'hint': 'In this classic 2-player board game, it is possible for the player who ' +
      'takes the first turn to win 100% of the time by following a certain ' +
      'sequence of moves and beginning in the center column. This is true ' +
      'even though it has been mathematically calculated that there are ' +
      '4,531,985,219,092 possible positions on a standard board.',
    'CategoryId' : '5'
  },
  */
  {
    'id': '99',
    'name': 'Candy Land',
    'hint': 'First publish it in 1949, this board game was invented in the ' +
      'polio wing of a hospital. It was a part of one of the first ' +
      'disputes over domain names as well, in the mid-90`s the domain of the ' +
      'same name was an adult entertainment site. Hasbro successfully won ' +
      'control of the domain.',
    'CategoryId' : '5'
  },
  {
    'id': '100',
    'name': 'The Checkered Game of Life',
    'hint': 'This game is the only game Milton Bradley made originally ' +
      'featured spaces for disgrace, poverty, and prison. It now has a ' +
      'permanent spot at the National Museum of American History.',
    'CategoryId' : '5'
  },
  {
    'id': '101',
    'name': 'Ouija board',
    'hint': 'These were widely regarded as harmless parlor tricks until around ' +
      'World War I when spiritualists began taking them seriously. It was once ' +
      'used by a jury during a murder trail and is credited for inspiring ' +
      'musician Alice Cooper`s stage name.',
    'CategoryId' : '5'
  },
  {
    'id': '102',
    'name': 'Trivial Pursuit',
    'hint': 'This game was created by two journalists, Chris Haney and Scott ' +
      'Abbott in 45 minutes during a game of Scrabble in 1979. The original ' +
      'edition of this game was called Genu.',
    'CategoryId' : '5'
  },
  {
    'id': '103',
    'name': 'The Landlords Game',
    'hint': 'This is the earliest known version of Monopoly and was first ' +
      'patented in 1904. It was designed by Elizabeth Magie.',
    'CategoryId' : '5'
  },
  {
    'id': '104',
    'name': 'Senet',
    'hint': 'This is one of the world`s first board games. It is an ancient ' +
      'Egyptian board game and is believed to be created as early as 3500 BC.',
    'CategoryId' : '5'
  },
  {
    'id': '105',
    'name': 'Basketball',
    'hint': 'This game is played on a court with two opposing teams of 5 ' +
      'players. Points are awarded for throwing the ball into a basket which ' +
      'is elevated 10 feet high.',
    'CategoryId' : '5'
  },
  {
    'id': '106',
    'name': 'Golf',
    'hint': 'This game played on a large open course with 9 or 18 holes.',
    'CategoryId' : '5'
  },
  {
    'id': '107',
    'name': 'Hockey',
    'hint': 'This game is played on an ice rink by two opposing teams of ' +
      'six skaters each. Goals are scored by knocking a puck into the opposing ' +
      'teams net.',
    'CategoryId' : '5'
  },
  {
    'id': '108',
    'name': 'Tennis',
    'hint': 'This game played with rackets by two or four players who hit a ' +
      'ball back and forth over a net that divides the court.',
    'CategoryId' : '5'
  },
  /* T.V. and Movie Puzzles, Category ID #6 */
  {
    'id': '108',
    'name': 'Leave it to Beaver',
    'hint': 'This T.V show became the first show to show part of a toilet. ' +
      'A full toilet was still considered too edgy.',
    'CategoryId' : '6'
  },
  {
    'id': '109',
    'name': 'Scott Gale',
    'hint': 'This T.V composer is responsible for the Saved By The Bell ' +
      'theme song as well as the The Golden Girls and Blossom theme songs.',
    'CategoryId' : '6'
  },
  {
    'id': '110',
    'name': 'Armageddon',
    'hint': 'NASA shows this film during their management training program. ' +
      'Hopeful managers are tasked with finding as many errors as in the film ' +
      'as possible.',
    'CategoryId' : '6'
  },
  {
    'id': '111',
    'name': 'Dallas Buyers Club',
    'hint': 'This movie had a makeup budget of $250 USD and went on to win ' +
      'the 2014 Academy Award for Achievement in Makeup and Hairstyling.',
    'CategoryId' : '6'
  },
  {
    'id': '112',
    'name': 'The Chronicles Of Narnia The Lion The Witch And The Wardrobe',
    'hint': 'In this film, some of Georgie Henley`s reactions are 100% genuine. ' +
      'To make this possible, she was carried to set blindfolded for her first ' +
      'visit to the snowy world in the wardrobe and she had not seen some ' +
      'costars like James McAvoy in costume before the scene was filmed.',
    'CategoryId' : '6'
  },
  {
    'id': '113',
    'name': 'Interstellar',
    'hint': 'For a cornfield scene in this film, Christopher Nolan sought to ' +
      'grow five hundred acres of corn. The corn was then sold, and actually ' +
      'made a profit.',
    'CategoryId' : '6'
  },
  {
    'id': '114',
    'name': 'Star Trek',
    'hint': 'In this movie, the sound of the automatic doors opening on the ' +
      'U.S.S. Enterprise, is a Russian train`s toilet flushing.',
    'CategoryId' : '6'
  },
  {
    'id': '115',
    'name': 'Jurassic Park',
    'hint': 'In this movie, the sounds the Velociraptors make when communicating ' +
      'is the same sound tortoises make when having sex.',
    'CategoryId' : '6'
  },
  {
    'id': '116',
    'name': 'The Devil Wears Prada',
    'hint': 'On the first day of filming this , Meryl Streep told Anne ' +
      'Hathaway, "I think you`re perfect for the role. I`m so happy we`re ' +
      'going to be working together." Then she paused and followed it up with, ' +
      '"That`s the last nice thing I`ll say to you." It was.',
    'CategoryId' : '6'
  },
  {
    'id': '117',
    'name': 'Get Out',
    'hint': 'The lead actor for this movie was given the role on the spot ' +
      'after about 5 takes. Director Jordan Peele stated each take was so ' +
      'perfect that the single tear came down at the exact same time for ' +
      'each take.',
    'CategoryId' : '6'
  },
  {
    'id': '118',
    'name': 'Candyman',
    'hint': 'The bees in this 1992 supernatural horror film were bred ' +
      'specifically for the film. This was done in order to make sure ' +
      'that the bees were only twelve hours old, so that they looked like ' +
      'mature bees, but their stinger wouldn`t be powerful enough to do ' +
      'any real damage.',
    'CategoryId' : '6'
  },
  {
    'id': '119',
    'name': 'The Hangover',
    'hint': 'In this 2010 Golden Globe winner, Ed Helms is actually missing a ' +
      'tooth as his adult incisor never grew in. His fake tooth was taken ' +
      'out for the parts of filming where Stu`s tooth is missing.',
    'CategoryId' : '6'
  },
  {
    'id': '120',
    'name': 'The Terminator',
    'hint': 'O.J. Simpson was considered for the lead role in this 1984 action ' +
      'film, but the producers feared he was too nice to be taken seriously ' +
      'as a cold-blooded killer.',
    'CategoryId' : '6'
  },
  {
    'id': '121',
    'name': 'The Wolf Of Wall Street',
    'hint': 'In this 2013 Martin Scorsese film, crushed vitamin B pills were ' +
      'used as a substitute for a recreational drug. Actor Jonah Hill ' +
      'claims that he eventually had to be hospitalized after snorting so ' +
      'much that he contracted bronchitis.',
    'CategoryId' : '6'
  },
  {
    'id': '122',
    'name': 'The Hunger Games',
    'hint': 'On the set of this 2012 film, Jennifer Lawrence told co-star ' +
      'Josh Hutcherson she could kick all the way over his head. She instead ' +
      'gave him a concussion.',
    'CategoryId' : '6'
  },
  {
    'id': '123',
    'name': 'Halloween',
    'hint': 'What would go on to become iconic, the face mask in this 1978 ' +
      'slasher film is a Captain Kirk/William Shatner mask spray-painted ' +
      'white with reshaped eye holes.',
    'CategoryId' : '6'
  },
  {
    'id': '124',
    'name': 'Charlie And The Chocolate Factory',
    'hint': 'For this 2005 film remake, Nestlé provided 1,850 bars of real ' +
      'chocolate.',
    'CategoryId' : '6'
  },
  {
    'id': '125',
    'name': 'The Departed',
    'hint': 'In this 2006 film, Jack Nicholson pulled a real gun on Leo ' +
      'DiCaprio because he felt the scene wasn`t intense enough before.',
    'CategoryId' : '6'
  },
  {
    'id': '126',
    'name': 'Only Lovers Left Alive',
    'hint': 'In this 2013 film, all of the cast members playing vampires ' +
      'wore wigs that were a mix of human, yak, and goat hair, in order to ' +
      'make them look wilder.',
    'CategoryId' : '6'
  },
  {
    'id': '127',
    'name': 'The Flintstones',
    'hint': 'Pebbles was originally going to be a boy in this classic cartoon, ' +
      'but a toy company suggested a change in order to sell Pebbles dolls. ' +
      'According to Joseph Barbera, the dolls made around $3 million in ' +
      'the first two months.',
    'CategoryId' : '6'
  },
  {
    'id': '128',
    'name': 'The Flintstones',
    'hint': 'Pebbles was originally going to be a boy in this classic cartoon, ' +
      'but a toy company suggested a change in order to sell Pebbles dolls. ' +
      'According to Joseph Barbera, the dolls made around $3 million in ' +
      'the first two months.',
    'CategoryId' : '6'
  },
  {
    'id': '129',
    'name': 'Buffy the Vampire Slayer',
    'hint': 'This was the first T.V. show to use Google as a verb.',
    'CategoryId' : '6'
  },
  {
    'id': '130',
    'name': 'Cheers',
    'hint': 'Ted Danson actually went to two weeks of bartending school to ' +
      'prepare for his role in this television show.',
    'CategoryId' : '6'
  },
  {
    'id': '131',
    'name': 'Mad Men',
    'hint': 'Along with "Damages", this was the first basic-cable show to ' +
      'be nominated for Best Drama.',
    'CategoryId' : '6'
  },
  {
    'id': '132',
    'name': 'The Brady Bunch',
    'hint': 'In this television show, the kids`s `bathroom didn`t have a ' +
      'toilet. Supposedly, network censors didn`t want one to be shown on TV.',
    'CategoryId' : '6'
  },
]

export default puzzleList