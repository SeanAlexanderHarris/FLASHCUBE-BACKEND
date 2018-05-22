const updatedSeedString =
  "CREATE(Seano: User{ name:'Seano', profile:'a url', uid:'P58Xzi5lfTYKhqeqKOrKGwOFKz43'}) CREATE(RomeDog: User{name:'RomeDog', profile:'a url'}) CREATE(DanSoup: User{ name:'DanSoup', profile:'a url', uid:'FP9AzXLPWfS9NjH6N7oy6osi9cn2'}) CREATE(Nate:User{ name:'Nathan Thomas', photoURL:'https://graph.facebook.com/10160537874150232/picture', uid:'wzlSZhc24TeyiD6j9voIBKy63Py1'}) CREATE(MadeInChelsea:Topic{title:'Made in Chelsea', language:'English', topicImageUrl:'http://static.wixstatic.com/media/755880_ffd4af24a6ee421a833ef65068f66c98.gif'}) CREATE(BakeOff:Topic{title:'The Great British Bake Off', language:'English', topicImageUrl:'https://i2-prod.mirror.co.uk/incoming/article7890095.ece/ALTERNATES/s615/The-Great-British-Bake-Off.jpg'}) CREATE(Dexter:Topic{title:'Dexter', language:'English', topicImageUrl:'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_main_wide_image/public/images/11438.jpg?itok=mmgLdo0r'}) CREATE(Frogs:Topic{title:'Frogs', language:'English',topicImageUrl: 'https://pbs.twimg.com/profile_images/613118595933958144/Vap0trT7_400x400.jpg'}) CREATE(NewcastleUtd: Topic{title:'Newcastle United', language:'English', topicImageUrl:'http://images-1.smartsave.com/images/attractions/1507/14742982175894.png'}) CREATE(StrangerThings:Topic{ title:'Stranger Things', language:'English', topicImageUrl:'https://at-cdn-s02.audiotool.com/2017/10/17/documents/stranger_things_kib_s_entry/7/cover256x256-ac0774653acf42d9b07ff2f86d547a07.jpg' }) CREATE(BuffyTheVampireSlayerCharacters:Topic{title:'Buffy The Vampire Slayer Characters', language:'English', topicImageUrl:'https://images.recordsale.de/256/256/cdpix/v/various-buffy_the_vampire_slayer.jpg' }) CREATE(BuffyTheVampireSlayerCharacters)-[:CREATED_BY{type:'made'}]->(Seano), (MadeInChelsea)-[:CREATED_BY{type:'made'}]->(RomeDog), (NewcastleUtd)-[:CREATED_BY{type:'made'}]->(Nate),(BakeOff)-[:CREATED_BY{type:'made'}]->(RomeDog), (Dexter)-[:CREATED_BY{type:'made'}]->(RomeDog), (Frogs)-[:CREATED_BY{type:'made'}]->(DanSoup), (StrangerThings)-[:CREATED_BY{type:'made'}]->(RomeDog), (DanSoup)-[:IS_STUDYING{type:'isStudying', fave:true}]->(BuffyTheVampireSlayerCharacters), (DanSoup)-[:IS_STUDYING{type:'isStudying'}]->(StrangerThings), (Nate)-[:IS_STUDYING{type:'isStudying', fave:true}]->(MadeInChelsea), (Seano)-[:IS_STUDYING{type:'isStudying', fave:true}]->(BuffyTheVampireSlayerCharacters) CREATE (Binky:Term{term:'Who left the show to have a baby?', definition:'Binky', belongs_to:'Made in Chelsea'}) CREATE (Spencer:Term{term:'Who was madly in love with Caggie Dunlop and is a notorious womaniser?', definition:'Spencer', belongs_to:'Made in Chelsea'}) CREATE (Ollie:Term{term:'Who decided they were bisexual, then gay?', definition:'Ollie', belongs_to:'Made in Chelsea'}) CREATE (LostBoys:Term{term:'Which three characters make the Lost Boys?', definition:'Jamie, Proudlock and Francis Boulle', belongs_to:'Made in Chelsea'}) CREATE (MarkFrancis:Term{term:'Who collects the most antiques?', definition:'Mark-Francis', belongs_to:'Made in Chelsea'}) CREATE(Louise:Term{term:'Who is dating a superman lookalike?', definition:'Louise', belongs_to:'Made in Chelsea'}) CREATE (Liv:Term{term:'Who met their model boyfriend at a photography shoot?', definition:'Liv', belongs_to:'Made in Chelsea'}) CREATE(Millie:Term{term:'Who married and divorced Professor Green in real life?', definition:'Millie', belongs_to:'Made in Chelsea'}) CREATE(Victoria:Term{term:'Who had a blood transfusion in a four poster bed?', definition:'Victoria', belongs_to:'Made in Chelsea'}) CREATE (Binky)-[:BELONGS_TO]->(MadeInChelsea), (Spencer)-[:BELONGS_TO]->(MadeInChelsea), (Ollie)-[:BELONGS_TO]->(MadeInChelsea), (LostBoys)-[:BELONGS_TO]->(MadeInChelsea), (MarkFrancis)-[:BELONGS_TO]->(MadeInChelsea), (Louise)-[:BELONGS_TO]->(MadeInChelsea), (Liv)-[:BELONGS_TO]->(MadeInChelsea), (Millie)-[:BELONGS_TO]->(MadeInChelsea), (Victoria)-[:BELONGS_TO]->(MadeInChelsea) CREATE (Judges:Term{term:'Name the three judges who have appeared on the show.', definition:'Mary Berry, Prue Leith, Paul Hollywood', belongs_to:'The Great British Bake Off'}) CREATE (Presenters:Term{term:'Name the four presenters who have appeared on the show.', definition:'Mel Giedroyc, Sandi Toksvig, Sue Perkins, Noel Fielding', belongs_to:'The Great British Bake Off'}) CREATE(TechChallenges:Term{term:'How many technical challenges have been based on pies? (not including tarts)', definition:'3', belongs_to:'The Great British Bake Off'}) CREATE (PaulJagger:Term{term:'Which contestant made a showstopping King of the Jungle lion bread?', definition:'Paul Jagger', belongs_to:'The Great British Bake Off'}) CREATE(EddKimber: Term{term:'Who won the first GBBO?', definition:'Edd Kimber', belongs_to:'The Great British Bake Off'}) CREATE (WomanWinners:Term{term:'How many times has a woman won GBBO? Bonus: Can you name them all?', definition:'6. Bonus: Joanne Wheatley, Frances Quinn, Nancy Birtwhistle, Nadiya Hussain, Candice Brown and Sophie Faldo', belongs_to:'The Great British Bake Off'}) CREATE (IainWatters: Term{term:'Which contestant threw their Baked Alaska in the bin before presenting it to the judges because someone had taken it out of the freezer?', definition:'Iain Watters', belongs_to: 'The Great British Bake Off'}) CREATE (DeborahManger:Term{term: 'Who stole Howards custard for their trifle in series 4?', definition:'Deborah Manger', belongs_to:'The Great British Bake Off'}) CREATE (RyanChong:Term{term:'Who baked a key lime pie that was the best Paul Hollywood had ever eaten and won him star baker despite being last in the technical challenge that week?', definition:'Ryan Chong', belongs_to:'The Great British Bake Off'}) CREATE (Judges)-[:BELONGS_TO]->(BakeOff), (Presenters)-[:BELONGS_TO]->(BakeOff), (TechChallenges)-[:BELONGS_TO]->(BakeOff),(PaulJagger)-[:BELONGS_TO]->(BakeOff), (EddKimber)-[:BELONGS_TO]->(BakeOff), (WomanWinners)-[:BELONGS_TO]->(BakeOff), (IainWatters)-[:BELONGS_TO]->(BakeOff), (DeborahManger)-[:BELONGS_TO]->(BakeOff), (RyanChong)-[:BELONGS_TO]->(BakeOff) CREATE(DexterProfession: Term{term: 'What is Dexters profession?', definition: 'Blood spatter specialist at the Miami Metro Police Department',belongs_to: 'Dexter'}) CREATE(DarklyDreaming: Term{term: 'What book was the original series based on?',definition: 'Darkly Dreaming Dexter by Jeff Lindsay', belongs_to: 'Dexter'}) CREATE (JohnLithgow: Term{term: 'Which actor played the Trinity Killer?', definition: 'John Lithgow', belongs_to: 'Dexter'}) CREATE (DexterTotalKills: Term{term: 'How many people does Dexter kill in every series in the show?', definition: '135', belongs_to: 'Dexter'}) CREATE (JamesDoakes: Term{term: 'Which character gets incinerated in a cabin after discovering Dexter is a murderer?', definition: 'Jame Doakes', belongs_to: 'Dexter'}) CREATE(DexterLoveInterests: Term{term: 'How many love interests does Dexter have in every series?', definition: '6', belongs_to: 'Dexter'}) CREATE (Brother: Term{term: 'What relation was the Ice Truck Killer to Dexter?', definition: 'Brother', belongs_to: 'Dexter'}) CREATE (Harrison: Term{term: 'What is the name of Dexters son?', definition: 'Harrison', belongs_to: 'Dexter'}) CREATE (SeasonSix: Term{term: 'In which season does Deb find out that Dexter is a murderer', definition: 'Season 6', belongs_to: 'Dexter'}) CREATE (DexterProfession)-[:BELONGS_TO]->(Dexter), (DarklyDreaming)-[:BELONGS_TO]->(Dexter), (JohnLithgow)-[:BELONGS_TO]->(Dexter), (DexterTotalKills)-[:BELONGS_TO]->(Dexter),(JamesDoakes)-[:BELONGS_TO]->(Dexter), (DexterLoveInterests)-[:BELONGS_TO]->(Dexter), (Brother)-[:BELONGS_TO]->(Dexter), (Harrison)-[:BELONGS_TO]->(Dexter), (SeasonSix)-[:BELONGS_TO]->(Dexter) CREATE (FrogSpecies: Term{term: 'How many frog species are discovered every year?', definition: '100', belongs_to: 'Frogs'}) CREATE (Antarctica: Term{term: 'Which continent is the only one where frogs have not been found?', definition: 'Antarctica', belongs_to: 'Frogs'}) CREATE (FrogJumpLength: Term{term:'How many times their body lenth can the furthest jumping frog jump?', definition: '20', belongs_to: 'Frogs'}) CREATE(Difference:Term{term:'What is the difference between a toad and a frog?', definition:'Toads are frogs. The word toad is usually used for frogs that have warty and dry skin, as well as shorter hind legs.', belongs_to:'Frogs'}) CREATE (LargestFrog: Term{term:'What is the largest frog in the world?', definition:'The goliath frog of West Africa. It can grow to 38cm and weigh up to 3kg', belongs_to: 'Frogs'}) CREATE (FrogDrinkMethod: Term{term:'How do frogs drink water?', definition:'They absorb it through their skin.', belongs_to:'Frogs'}) CREATE (FrogCallDetect: Term{term:'How far can a frog call be detected?', definition:'Up to a mile.', belongs_to:'Frogs'}) CREATE (FrogEggMoist:Term{term:'How does a Poison Dart frog keep their eggs moist on the forest floor?', definition: 'It urinates on them.', belongs_to:'Frogs'}) CREATE (FrogScareFood:Term{term:'What does the Mountain Chicken frog give to their tadpoles to eat if food becomes scarce?', definition:'unfertilised frog eggs', belongs_to: 'Frogs'}) CREATE (SmallestFrog: Term{term:'What is the smallest frog in the world?', definition:'Paedophryne amauensis from Papua New Guinea', belongs_to:'Frogs'}) CREATE (FrogSpecies)-[:BELONGS_TO]->(Frogs), (Antarctica)-[:BELONGS_TO]->(Frogs), (FrogJumpLength)-[:BELONGS_TO]->(Frogs), (Difference)-[:BELONGS_TO]->(Frogs), (LargestFrog)-[:BELONGS_TO]->(Frogs),(FrogDrinkMethod)-[:BELONGS_TO]->(Frogs), (FrogCallDetect)-[:BELONGS_TO]->(Frogs), (FrogEggMoist)-[:BELONGS_TO]->(Frogs), (SmallestFrog)-[:BELONGS_TO]->(Frogs), (FrogScareFood)-[:BELONGS_TO]->(Frogs) CREATE (BroadwayPreShow:Term{term:'Which two child cast members acted on Broadway before the show began?', definition:'Gaten Matarazzo and Caleb McLaughlin', belongs_to: 'Stranger Things'}) CREATE (Eggos:Term{term: 'What is the name of Elevens favourite frozen snack?', definition:'Eggos', belongs_to:'Stranger Things'}) CREATE (WinoaRyder:Term{term:'Which actress plays Joyce Byers?',definition: 'Winona Ryder', belongs_to:'Stranger Things'}) CREATE (Barb:Term{term:'What is the name of the best friend of Nancy, who gets taken by the monster from a swimming pool at Steves house?',definition: 'Barb', belongs_to:'Stranger Things'}) CREATE (Lucas:Term{term:'Which member of the gang does not accept Eleven at first?', definition:'Lucas', belongs_to:'Stranger Things'}) CREATE (BaseballBat:Term{term:'What does Steve use to attack the monster in the Byers house in season 2?', definition:'A baseball bat with nails sticking out.', belongs_to:'Stranger Things'}) CREATE (HawkinsIndiana:Term{term:'What is the name of the town where Stranger Things is set?', definition: 'Hawkins, Indiana', belongs_to: 'Stranger Things'}) CREATE (MindFlayer:Term{term:'What Dungeons and Dragons reference do the gang give to the monster?', definition: 'Mind Flayer', belongs_to:'Stranger Things'}) CREATE (Sara:Term{term:'What was the name of Hoppers daughter?', definition: 'Sara',belongs_to: 'Stranger Things'}) CREATE (BroadwayPreShow)-[:BELONGS_TO]->(StrangerThings), (Eggos)-[:BELONGS_TO]->(StrangerThings), (WinoaRyder)-[:BELONGS_TO]->(StrangerThings), (Barb)-[:BELONGS_TO]->(StrangerThings), (Lucas)-[:BELONGS_TO]->(StrangerThings), (BaseballBat)-[:BELONGS_TO]->(StrangerThings), (HawkinsIndiana)-[:BELONGS_TO]->(StrangerThings), (MindFlayer)-[:BELONGS_TO]->(StrangerThings),(Sara)-[:BELONGS_TO]->(StrangerThings) CREATE(Buffy:Term{term:'The slayer who lives in Sunnydale', definition:'Buffy', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Xander:Term{term:'The joker who keeps accidentally dating monsters', definition:'Xander', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE(Willow:Term{term:'The clever nerdy one', definition:'Willow', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Giles: Term{term:'The watcher and librarian of Sunnydale High', definition:'Giles', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Oz:Term{term:'Plays in a band called: Dingos Ate My Baby', definition:'Oz', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Cordelia:Term{term:'The mean girl and queen bee', definition:'Cordelia', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Angel:Term{term:'A vampire cursed by gypsies with a soul', definition:'Angel', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Joy:Term{term:'The mother of the slayer', definition:'Joy', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Dawn:Term{term:'The slayers sister - very annoying', definition:'Dawn', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE(Tara:Term{term: 'Wicca woman who falls in love with a nerdy girl at SU', definition:'Tara', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Spike:Term{term:'Horrible vampire - British accent', definition:'Spike',belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE(Anya:Term{term:'Ex demon who is obsessed with money', definition:'Anya', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Mayor:Term{term: 'Politician / evil demon', definition:'The Mayor', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Master:Term{term:'Very ugly boss vampire who lives in the sewer', definition:'The Master', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE(First:Term{term:'The weird meta baddy of the first evil thought', definition:'The First', belongs_to: 'Buffy The Vampire Slayer Characters'}) CREATE (Adam: Term{term:'Cyborg made by the initiative', definition:'Adam', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE(Glory:Term{term:'Self obsessed god who brain sucks people and leaves them crazy', definition:'Glory', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Drusilla:Term{term: 'Kooky female vampire who has a weird triangle thing with Spike and Angel',definition:'Drusilla', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE(EvilWillow:Term{term: 'Dark side of the nice nerdy girl when her GF dies', definition:'Evil Willow', belongs_to:'Buffy The Vampire Slayer Characters'}) CREATE (Buffy)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Xander)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Willow)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Giles)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Oz)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Cordelia)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Angel)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Joy)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Dawn)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Tara)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Spike)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Anya)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Mayor)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Master)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (First)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Adam)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Glory)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (Drusilla)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters), (EvilWillow)-[:BELONGS_TO]->(BuffyTheVampireSlayerCharacters) CREATE (DanSoup)-[:IS_STUDYING]->(Dawn), (DanSoup)-[:IS_STUDYING]->(EvilWillow), (DanSoup)-[:IS_STUDYING]->(Anya), (DanSoup)-[:IS_STUDYING]->(MindFlayer), (DanSoup)-[:IS_STUDYING]->(HawkinsIndiana), (DanSoup)-[:IS_STUDYING]->(BaseballBat)";

module.exports = updatedSeedString;
