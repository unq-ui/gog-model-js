import Requirement from '../model/Requirement.js';

class GameData {
    constructor(
        id = "",
        name = "",
        released = "",
        mainImage = "",
        website = "",
        tags = [],
        esrb = "",
        multimedia = [],
        description = "",
        requirements = null,
        developer = ""
    ) {
        this.id = id;
        this.name = name;
        this.released = released;
        this.mainImage = mainImage;
        this.website = website;
        this.tags = tags;
        this.esrb = esrb;
        this.multimedia = multimedia;
        this.description = description;
        this.requirements = requirements;
        this.developer = developer;
    }
}

export const gamesData = [
    new GameData(
        "g_3498",
        "Grand Theft Auto V",
        "2013-09-17",
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "http://www.rockstargames.com/V/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "RPG",
            "Co-op",
            "Open World",
            "cooperative",
            "First-Person",
            "Third Person",
            "Funny",
            "Sandbox",
            "Comedy",
            "Third-Person Shooter",
            "Moddable",
            "Crime",
            "vr mod",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
            "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
            "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
            "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
            "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
            "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
        ],
        "Rockstar Games went bigger, since their previous installment of the series. You get the complicated and realistic world-building from Liberty City of GTA4 in the setting of lively and diverse Los Santos, from an old fan favorite GTA San Andreas. 561 different vehicles (including every transport you can operate) and the amount is rising with every update. Simultaneous storytelling from three unique perspectives: Follow Michael, ex-criminal living his life of leisure away from the past, Franklin, a kid that seeks the better future, and Trevor, the exact past Michael is trying to run away from. GTA Online will provide a lot of additional challenge even for the experienced players, coming fresh from the story mode. Now you will have other players around that can help you just as likely as ruin your mission. Every GTA mechanic up to date can be experienced by players through the unique customizable character, and community content paired with the leveling system tends to keep everyone busy and engaged.EspañolRockstar Games se hizo más grande desde su entrega anterior de la serie. Obtienes la construcción del mundo complicada y realista de Liberty City de GTA4 en el escenario de Los Santos, un viejo favorito de los fans, GTA San Andreas. 561 vehículos diferentes (incluidos todos los transportes que puede operar) y la cantidad aumenta con cada actualización.Narración simultánea desde tres perspectivas únicas:Sigue a Michael, ex-criminal que vive su vida de ocio lejos del pasado, Franklin, un niño que busca un futuro mejor, y Trevor, el pasado exacto del que Michael está tratando de huir.GTA Online proporcionará muchos desafíos adicionales incluso para los jugadores experimentados, recién llegados del modo historia. Ahora tendrás otros jugadores cerca que pueden ayudarte con la misma probabilidad que arruinar tu misión. Los jugadores pueden experimentar todas las mecánicas de GTA actualizadas a través del personaje personalizable único, y el contenido de la comunidad combinado con el sistema de nivelación tiende a mantener a todos ocupados y comprometidos.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "2.8 GHz Quad Core CPU"
            ],
            3,
            [
                "1GB NVIDIA GTX 460 / ATI Radeon HD 6850 or better"
            ],
            "Version 9.0c",
            5
        ),
        "Rockstar Games"
    ),
    new GameData(
        "g_3328",
        "The Witcher 3: Wild Hunt",
        "2015-05-18",
        "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "https://thewitcher.com/en/witcher3",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Fantasy",
            "Sandbox",
            "Action RPG",
            "Dark",
            "Nudity",
            "controller support",
            "Choices Matter",
            "Mature",
            "Dark Fantasy",
            "Medieval",
            "Magic",
            "Multiple Endings",
            "Action",
            "Adventure",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
            "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
            "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
            "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
            "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
            "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
        ],
        "The third game in a series, it holds nothing back from the player. Open world adventures of the renowned monster slayer Geralt of Rivia are now even on a larger scale. Following the source material more accurately, this time Geralt is trying to find the child of the prophecy, Ciri while making a quick coin from various contracts on the side. Great attention to the world building above all creates an immersive story, where your decisions will shape the world around you.CD Project Red are infamous for the amount of work they put into their games, and it shows, because aside from classic third-person action RPG base game they provided 2 massive DLCs with unique questlines and 16 smaller DLCs, containing extra quests and items.Players praise the game for its atmosphere and a wide open world that finds the balance between fantasy elements and realistic and believable mechanics, and the game deserved numerous awards for every aspect of the game, from music to direction.",
        new Requirement(
            [
                "Windows® 7 (32/64-bit)"
            ],
            [
                "Pentium 4 processor (3.0GHz, or better)"
            ],
            1,
            "Version 9.0c",
            15
        ),
        "CD PROJEKT RED"
    ),
    new GameData(
        "g_4200",
        "Portal 2",
        "2011-04-18",
        "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "http://www.thinkwithportals.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Co-op",
            "Story Rich",
            "cooperative",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Online Co-Op",
            "Funny",
            "Female Protagonist",
            "Comedy",
            "Local Co-Op",
            "stats",
            "Gog Workshop",
            "Space",
            "Includes level editor",
            "Captions available",
            "Commentary available",
            "Science",
            "Shooter",
            "Puzzle"
        ],
        "Everyone 10+",
        [
            "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
            "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
            "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
            "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",
            "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",
            "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
        ],
        "Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form. Its plot directly follows the first game's, taking place in the Half-Life universe. You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, but taken over by an evil AI that turned upon its creators, GladOS. After defeating GladOS at the end of the first game but failing to escape the facility, Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her...Portal 2's core mechanics are very similar to the first game's ; the player must make their way through several test chambers which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation portals on white surfaces. This seemingly simple mechanic and its subtleties coupled with the many different puzzle elements that can appear in puzzles allows the game to be easy to start playing, yet still feature profound gameplay. The sequel adds several new puzzle elements, such as gel that can render surfaces bouncy or allow you to accelerate when running on them.The game is often praised for its gameplay, its memorable dialogue and writing and its aesthetic. Both games in the series are responsible for inspiring most puzzle games succeeding them, particularly first-person puzzle games. The series, its characters and even its items such as the portal gun and the companion cube have become a cultural icon within gaming communities.Portal 2 also features a co-op mode where two players take on the roles of robots being led through tests by GladOS, as well as an in-depth level editor.",
        new Requirement(
            [
                "Windows 10 64-bit"
            ],
            [
                "Intel i5-6600k (4 core 3.5 GHz)",
                "AMD Ryzen 5 2400 G (4 core 3.6 GHz)"
            ],
            8,
            [
                "NVIDIA GTX 1060 (6 GB)",
                "AMD RX 570 (4 GB)"
            ],
            "Version 11",
            70
        ),
        "Electronic Arts"
    ),
    new GameData(
        "g_5286",
        "Tomb Raider (2013)",
        "2013-03-05",
        "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "http://www.tombraider.com",
        [
            "Singleplayer",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "RPG",
            "Third Person",
            "Classic",
            "Exploration",
            "Female Protagonist",
            "Stealth",
            "Third-Person Shooter",
            "Action-Adventure",
            "Retro",
            "Cinematic",
            "Quick-Time Events",
            "Dinosaurs",
            "Lara Croft",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg",
            "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg",
            "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg",
            "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg",
            "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg",
            "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
        ],
        "A cinematic revival of the series in its action third person form, Tomb Rider follows Lara in her least experience period of life – her youth. Heavily influenced by Naughty Dog’s “Uncharted”, the game is a mix of everything, from stealth and survival to combat and QTE action scenes.Young Lara Croft arrives on the Yamatai, lost island near Japan, as the leader of the expedition in search of the Yamatai Kingdom, with a diverse team of specialists. But shipwreck postponed the successful arrival and seemingly forgotten island is heavily populated with hostile inhabitants, cultists of Solarii Brotherhood.The game will be graphic at times, especially after failed QTE’s during some of the survival scenes, but overall players will enjoy classic action adventure, reminiscent of the beginning of the series. This game is not a direct sequel or continuation of existing sub-series within the franchise, but a reboot, setting up Tomb Raider to represent modern gaming experience.The game has RPG elements and has a world, which you can explore during the story campaign and after the completion. As well as multiplayer mode, where 2 teams (4 scavengers and 4 survivors) are clashing in 3 game modes while using weapons and environments from the single-player campaign.",
        new Requirement(
            [
                "Windows 7/8.1/10 (64-bit Version)"
            ],
            [
                "Intel i5-2400/AMD FX-8320"
            ],
            8,
            [
                "NVIDIA GTX 780 3GB",
                "AMD R9 290 4GB"
            ],
            12
        ),
        "Square Enix"
    ),
    new GameData(
        "g_4291",
        "Counter-Strike: Global Offensive",
        "2012-08-21",
        "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "http://blog.counter-strike.net/",
        [
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "gog-trading-cards",
            "Co-op",
            "cooperative",
            "First-Person",
            "FPS",
            "Online Co-Op",
            "Tactical",
            "stats",
            "Gog Workshop",
            "PvP",
            "Moddable",
            "War",
            "In-App Purchases",
            "Team-Based",
            "Realistic",
            "Fast-Paced",
            "Military",
            "Competitive",
            "Valve Anti-Cheat enabled",
            "e-sports",
            "Trading",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg",
            "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg",
            "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg",
            "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg",
            "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg",
            "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
        ],
        "Counter-Strike is a multiplayer phenomenon in its simplicity. No complicated narratives to explain the source of the conflict, no futuristic and alien threats, but counter-terrorists against terrorists. Arena shooter at its core, CS:GO provides you with various methods of disposing enemies and reliant on cooperation within the team. During the round of the classical clash mode, you will gradually receive currency to purchase different equipment. Each player can carry a primary weapon, secondary pistol, knife and a set of grenades, which all can change the battle if wielded by the skilled player. Objectives are clear and vary from map to map, from game mode to game mode. Stop the terrorists from planting explosives, stop the counter-terrorist from retrieving the hostages, kill everyone who isn’t you and just perform the best with.CS:GO is one of the major cybersport discipline, which makes playing it more exciting to some players. Aside from purchasing the game, CS:GO is infamous for its loot case system, that requires players to purchase keys, in order to open said cases. Customization items consist of weapon skins, weapon stickers, and sprays that do not affect gameplay and have purely visual value to the player.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "2.8 GHz Quad Core CPU"
            ],
            3,
            [
                "1GB NVIDIA GTX 460 / ATI Radeon HD 6850 or better"
            ],
            "Version 9.0c",
            5
        ),
        "Valve"
    ),
    new GameData(
        "g_13536",
        "Portal",
        "2007-10-09",
        "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "http://www.whatistheorangebox.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Atmospheric",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "FPS",
            "Funny",
            "Classic",
            "Female Protagonist",
            "Comedy",
            "Includes level editor",
            "Captions available",
            "Short",
            "Physics",
            "Dark Humor",
            "Commentary available",
            "Includes Source SDK",
            "Science",
            "Adventure",
            "Puzzle"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg",
            "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg",
            "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg",
            "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg",
            "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg",
            "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
        ],
        "Every single time you click your mouse while holding a gun, you expect bullets to fly and enemies to fall. But here you will try out the FPS game filled with environmental puzzles and engaging story. Silent template for your adventures, Chell, wakes up in a testing facility. She’s a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS.Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling. What you will be told might be different from what you will see.White environments will guide the player’s portal placement, forcing them to pay attention to the surroundings.  Portal creates tension, allowing either solving puzzles at your own leisure or moving quickly, due to the time limit or threats.",
        new Requirement(
            [
                "Win 7 SP1",
                "Win 8.1"
            ],
            [
                "Intel Core i7-3770, 3.4 GHz",
                "AMD FX-8350, 4.0 GHz"
            ],
            8,
            [
                "NVIDIA GeForce GTX 760",
                "AMD Radeon HD 7950"
            ],
            "Version 11",
            55
        ),
        "Valve"
    ),
    new GameData(
        "g_12020",
        "Left 4 Dead 2",
        "2009-11-17",
        "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "http://www.l4d.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Gog Cloud",
            "gog-trading-cards",
            "Co-op",
            "cooperative",
            "First-Person",
            "Horror",
            "FPS",
            "Online Co-Op",
            "Gore",
            "Survival",
            "Local Co-Op",
            "Tactical",
            "stats",
            "Gog Workshop",
            "Zombies",
            "Moddable",
            "Post-apocalyptic",
            "Survival Horror",
            "Captions available",
            "Replay Value",
            "Team-Based",
            "Valve Anti-Cheat enabled",
            "Commentary available",
            "Includes Source SDK",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg",
            "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg",
            "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg",
            "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg",
            "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg",
            "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
        ],
        "Cooperative survival continues with a different set of characters. New survivors are making their way through 5 campaigns with an added ability to play through the story of the first game as well, using not only expanded arsenal of 20 ranged and 10 melee weapons but improved AI Director. Your surroundings and weather will change; enemy and item placement will differ from map to map, from difficulty to difficulty. New unique special zombies, placed in the unlucky for the player spot, can end your run.High compatibility with community mods will allow you not only to add user-created maps but player models, enemy models, and even in-game music, which will help any player to create the unique experience on top of solid game mechanics.Competitive multiplayer mods from arena survival to a head-on competition with another team of survivors are addictive and, in addition to the campaign, will provide you with hundreds of hours of game content.",
        new Requirement(
            [
                "Windows 10 64 bit"
            ],
            [
                "Intel Core i7-3770K"
            ],
            8,
            [
                "NVIDIA GTX 980Ti",
                "NVIDIA GTX 970"
            ],
            "Version 11",
            25
        ),
        "Electronic Arts"
    ),
    new GameData(
        "g_5679",
        "The Elder Scrolls V: Skyrim",
        "2011-11-11",
        "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "http://elderscrolls.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Third Person",
            "Partial Controller Support",
            "Fantasy",
            "Sandbox",
            "Action RPG",
            "Gog Workshop",
            "role-playing",
            "Moddable",
            "Character Customization",
            "Dark Fantasy",
            "Medieval",
            "Magic",
            "Lore-Rich",
            "Dragons",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg",
            "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg",
            "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg",
            "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg",
            "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg",
            "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
        ],
        "The fifth game in the series, Skyrim takes us on a journey through the coldest region of Cyrodiil. Once again player can traverse the open world RPG armed with various medieval weapons and magic, to become a hero of Nordic legends –Dovahkiin, the Dragonborn. After mandatory character creation players will have to escape not only imprisonment but a fire-breathing dragon. Something Skyrim hasn’t seen in centuries.After Oblivion, the magic system was reworked, in order to show players more aggressive and direct combat. As a Dragonborn, your character will be able to use the powerful magic of dragon shouts, powered, upgraded and researched with the souls of the dragons that will be randomly encountered by players, while traveling. Hundreds of sidequests will invite players to discover every part of the newly introduced land. Aside from already filled with guilds, Daedra and steampunk Dwemer ruins, Skyrim has additional DLC content that not only brings Solstheim island and vampire conclave but gives players the ability to build their own homes, instead of buying pre-made ones.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "1.4GHz processor or faster"
            ],
            1,
            [
                "DirectX 8-compatible graphics card with at least 32MB of video memory"
            ],
            "9.0c",
            250
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_4062",
        "BioShock Infinite",
        "2013-03-26",
        "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        "https://2k.com/en-US/game/bioshock-infinite",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Fantasy",
            "Gore",
            "Controller",
            "Dystopian",
            "Steampunk",
            "Linear",
            "Alternate History",
            "Time Travel",
            "Political",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg",
            "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg",
            "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg",
            "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg",
            "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg",
            "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
        ],
        "The third game in the series, Bioshock takes the story of the underwater confinement within the lost city of Rapture and takes it in the sky-city of Columbia. Players will follow Booker DeWitt, a private eye with a military past; as he will attempt to wipe his debts with the only skill he’s good at – finding people. Aside from obvious story and style differences, this time Bioshock protagonist has a personality, character, and voice, no longer the protagonist is a silent man, trying to survive.Open and bright level design of Columbia shows industrial colonial America in a seemingly endless carnival. But Bioshock is not famous for its visuals, but for its story.  Mystery and creative vision of Irrational Games invite players to uncover the secrets of Columbia’s leader - Zachary Comstock and save Elizabeth, the girl, that’s been locked up in the flying city since her birth.Unique weapons and mechanics of Vigor will make encounters different, helping players to adjust to the new found mobility and hook shot, making fights fast-paced and imaginative.",
        new Requirement(
            [
                "Windows 7"
            ],
            [
                "Quad-core Intel or AMD CPU"
            ],
            4,
            [
                "Nvidia GeForce GTX 260 or higher",
                "ATI Radeon 4890 or higher"
            ],
            "9.0c"
        ),
        "2K Games"
    ),
    new GameData(
        "g_28",
        "Red Dead Redemption 2",
        "2018-10-26",
        "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        "https://www.rockstargames.com/reddeadredemption2/",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "Great Soundtrack",
            "Co-op",
            "Story Rich",
            "Open World",
            "First-Person",
            "Third Person",
            "Partial Controller Support",
            "FPS",
            "Online Co-Op",
            "Gore",
            "Exploration",
            "Sandbox",
            "Violent",
            "Third-Person Shooter",
            "PvP",
            "In-App Purchases",
            "Mature",
            "Historical",
            "Cinematic",
            "Realistic",
            "Crime",
            "Online PvP",
            "3rd-Person Perspective",
            "Blood",
            "America",
            "Masterpiece",
            "Beautiful",
            "Hunting",
            "Western",
            "3rd-person",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg",
            "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg",
            "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg",
            "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg",
            "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg",
            "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
        ],
        "America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.",
        new Requirement(
            [
                "Windows 10"
            ],
            [
                "Intel Core i5"
            ],
            8,
            ["GeForce GTX 560"],
            "Version 11",
            9
        ),
        "Rockstar Games"
    ),
    new GameData(
        "g_802",
        "Borderlands 2",
        "2012-09-18",
        "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        "http://www.borderlands2.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "RPG",
            "Co-op",
            "Open World",
            "cooperative",
            "Sci-fi",
            "FPS",
            "Online Co-Op",
            "Funny",
            "Comedy",
            "Action RPG",
            "Futuristic",
            "Memes",
            "Dark Humor",
            "Stylized",
            "Loot",
            "Action",
            "Shooter",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg",
            "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg",
            "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg",
            "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg",
            "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg",
            "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg"
        ],
        "Sequel to the 4-player cooperative FPS RPG Borderlands, where the new team of Vault Hunters arrives on the infamous planet Pandora in order to get the riches, hidden inside the Vault, and help to free the planet from the Handsome Jack, President of Hyperion. Clear out the endless waves and groups and marauders with various weapon types and character abilities.Unlike the first game, Borderlands 2 provided DLC not only expanding the world of Pandora with stand-alone story campaigns but adding 2 more characters. Now the main cast consists of Gunzerker Salvador(dual-wields guns at command), Siren Maya (holds and paralyzes the enemy), Commando Axton (summons turrets) and Zer0 the Assasin (invisible sniper ninja). But with the DLC players can try out summoning giant flying robots with Gaige the Mechromancer and Krieg the Psycho. Most of the game charm and popularity of Borderlands 2 comes from the supporting cast and the personalities of the NPC, making this fast-paced shooter with optional cover stand out.",
        new Requirement(
            [
                "64bit Windows 7 and above"
            ],
            4,
            [
                "GeForce GTX 470",
                "Radeon HD 5850"
            ],
            [
                "3Ghz Intel i5 quad core or equivalent"
            ],
            30
        ),
        "2K Games"
    ),
    new GameData(
        "g_3439",
        "Life is Strange",
        "2015-01-29",
        "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "https://www.lifeisstrange.com/en-us/games/life-is-strange",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "Third Person",
            "Female Protagonist",
            "Dark",
            "Point & Click",
            "Short",
            "Mystery",
            "Choices Matter",
            "Memes",
            "Walking Simulator",
            "Story",
            "Multiple Endings",
            "Episodic",
            "Soundtrack",
            "Time Travel",
            "Time Manipulation",
            "student",
            "strange",
            "photography",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg",
            "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg",
            "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg",
            "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg",
            "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg",
            "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
        ],
        "Interactive storytelling and plot-heavy games gained popularity, and “Life is Strange” arrived as teen mystery adventure. The plot will go through the life of Maxine, a teenager in possession of curious power, allowing her to stop and rewind time, in order to manipulate her surroundings. Max, after the reunion with her friend Chloe, is on the path to uncovering the secrets of Arcadia Bay. Players will have to deal with puzzle solving through the fetch quests, in order to change the world around them. The game puts players in situations, where they’re forced to make a moral choice, going through the decision which may have short-term or long-term consequences. Every choice made by the player will trigger the butterfly effect, surrounding the first playthrough of the game with a lot of emotional struggle, thoughtfully crafted by the developers at Dontnod Entertainment. Life is Strange is third person adventure game, where players might seem just as an observer of the stories, unfolding in front of them.",
        new Requirement(
            [
                "Windows XP/Vista/7"
            ],
            [
                "Intel Pentium 4",
                "AMD Athlon XP Processor"
            ],
            384,
            [
                "128MB (or greater) Video Card (Geforce 6 Series Recommended)"
            ],
            5
        ),
        "Square Enix"
    ),
    new GameData(
        "g_13537",
        "Half-Life 2",
        "2004-11-16",
        "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        "http://www.half-life2.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "Horror",
            "FPS",
            "Classic",
            "Zombies",
            "Moddable",
            "Captions available",
            "Physics",
            "Aliens",
            "Dystopian",
            "Includes Source SDK",
            "Silent Protagonist",
            "vr mod",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg",
            "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg",
            "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg",
            "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg",
            "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg",
            "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg"
        ],
        "Gordon Freeman became the most popular nameless and voiceless protagonist in gaming history. He is painted as the most famous scientist and a hero within the world of Half-Life, and for a good reason. In the first game he saved the planet from alien invasion, this time, when the invasion is already begun, the world needs his help one more time. And you, as a player, will help this world to survive. This time Gordon arrives in City 17, ravaged and occupied by Combines, where he meets his old Black Mesa friends. What is different, aside from the overall design quality, is the use of Valve’s Source engine that not only expands on the fluidity of character model animations and movement but allows players to interact with a myriad of objects with the advanced and realistic (to an extent) physics. Classic Headcrab Zombies are revamped and have new variants that provide players with different threats. For a story-driven FPS, Half-Life 2 is unique in its plot delivery, and making in-game mechanics feel natural, be it platforming or driving.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "1.4GHz processor or faster"
            ],
            1,
            [
                "DirectX 8-compatible graphics card with at least 32MB of video memory"
            ],
            "9.0c",
            250
        ),
        "Valve"
    ),
    new GameData(
        "g_4286",
        "BioShock",
        "2007-08-21",
        "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        "https://2k.com/en-US/game/bioshock/",
        [
            "Singleplayer",
            "Atmospheric",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "Horror",
            "FPS",
            "Classic",
            "Action RPG",
            "Dark",
            "Dystopian",
            "Steampunk",
            "Alternate History",
            "Political",
            "Underwater",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg",
            "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg",
            "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg",
            "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg",
            "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg",
            "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg"
        ],
        "FPS with RPG elements, Bioshock invites players to experience horrors of underwater isolation in the city of Rapture, the failed project of the better future. After surviving the plane crash, the protagonist has only one way to go – to the giant lighthouse that opens a way to the underwater utopia. Players will have to unravel the complicated history of Rapture, relying only on themselves, their guns and Plasmids, a mystical substance, that allows it’s user to obtain near magical abilities.The atmosphere of isolation and threat is conveyed through the environmental sounds, subtle electrical buzzing and audio logs, telling the story of societal decay and despair. Players will shape the story, making moral choices along their way, saving Little Sisters or extracting ADAM, the mystical fuel for your abilities. While exploring the underwater city, players will complete missions for the last sane inhabitants of Rapture, while fending off the less fortunate ones.",
        new Requirement(
            [
                "OS 64-bit Windows 7 / 64-bit Windows 8 (8.1) or Windows 10"
            ],
            [
                "Intel CPU Core i7 3770 3,4 GHz",
                "AMD CPU AMD FX-8350 4 GHz"
            ],
            8,
            [
                "Nvidia GPU GeForce GTX 770",
                "AMD GPU Radeon R9 290"
            ],
            "Version 11",
            50
        ),
        "2K Games"
    ),
    new GameData(
        "g_32",
        "Destiny 2",
        "2017-09-06",
        "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        "https://www.bungie.net/7/en/Destiny/NewLight",
        [
            "Singleplayer",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "Co-op",
            "Open World",
            "cooperative",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Online Co-Op",
            "Exploration",
            "Free to Play",
            "Online multiplayer",
            "Action-Adventure",
            "Space",
            "PvP",
            "Futuristic",
            "Aliens",
            "combat",
            "Story",
            "3rd-Person Perspective",
            "online",
            "MMORPG",
            "Loot",
            "PvE",
            "city",
            "Lore-Rich",
            "console",
            "friends",
            "Masterpiece",
            "weapons",
            "skill",
            "destroy",
            "collect",
            "hunt",
            "gun",
            "rain",
            "enemy",
            "quick",
            "darkness",
            "defender",
            "Action",
            "Shooter",
            "Adventure",
            "Massively Multiplayer"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg",
            "https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg",
            "https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg",
            "https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg",
            "https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg",
            "https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg"
        ],
        "Destiny 2 is an online multiplayer first-person shooter. You take on the role of a Guardian that needs to protect the last city on Earth from alien invaders. The game follows its predecessor, Destiny. The goal of the game is to return the Light that was stolen from the Guardians by the aliens.Destiny 2 features two main activity types: player versus environment and player versus player. PvE is focused on exploration, story missions interaction with NPCs and side quests. PvP features 4v4 team matches in different modes. The game also allows taking part in group missions, such as three-player strikes and six-player raids.Destiny 2 has a strong RPG aspect that includes character customization and development. There are three classes in the game - Warlock, Hunter, and Titan; they provide different playstyles depending on their specialization and unique abilities. To develop the character you can gain experience points completing the story and side missions.",
        new Requirement(
            [
                "Windows 10"
            ],
            [
                "Intel Core i5"
            ],
            8,
            ["GeForce GTX 560"],
            "Version 11",
            9
        ),
        "Activision Blizzard"
    ),
    new GameData(
        "g_1030",
        "Limbo",
        "2010-07-21",
        "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        "http://playdead.com/limbo",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "2D",
            "Horror",
            "Difficult",
            "Controller",
            "Dark",
            "controller support",
            "Short",
            "Side Scroller",
            "Physics",
            "Cinematic",
            "Surreal",
            "Puzzle-Platformer",
            "Minimalist",
            "Adventure",
            "Indie",
            "Puzzle",
            "Platformer"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg",
            "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg",
            "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg",
            "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg",
            "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg",
            "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
        ],
        "This popular 2D puzzle-platformer creates the atmosphere of isolation, where the player alone can guide the nameless protagonist to his destination. Hostile environments and one-hit deaths may seem difficult, but the game implements a fair amount of checkpoints. The monochrome color palette showcases cartoony proportions of every living thing while making lack of details threatening. Limbo shows you exactly what you encounter, but never how it looks.Limbo uses the atmosphere and sound design of the horror genre while avoiding tropes of the modern horror games. The overarching theme and unique style compensated for the rather short game with an abrupt ending, making Limbo one of the most impactful games for the genre.The simple controls and easy-to-pick-up mechanics help to make a clear distinction, which part of the stage players can interact with, and which part can lead to the quick death. Even though the game is in black and white, this separation is intuitive and natural, so the player would know exactly where to go or what to do.",
        new Requirement(
            [
                "Windows 10 64-bit"
            ],
            [
                "Intel Core i7-3770K",
                "AMD FX 8350 Wraith"
            ],
            16,
            [
                "AMD Radeon RX 480",
                "NVIDIA GTX 970"
            ],
            55
        ),
        "Microsoft Studios"
    ),
    new GameData(
        "g_58175",
        "God of War (2018)",
        "2018-04-20",
        "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        "https://godofwar.playstation.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "RPG",
            "Story Rich",
            "Third Person",
            "Fantasy",
            "Gore",
            "Exploration",
            "Violent",
            "Action RPG",
            "Action-Adventure",
            "Hack and Slash",
            "exclusive",
            "Crafting",
            "combat",
            "3D",
            "true exclusive",
            "3rd-Person Perspective",
            "Blood",
            "PvE",
            "Emotional",
            "Mythology",
            "Souls-like",
            "Remote Play on TV",
            "Action",
            "Adventure",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg",
            "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg",
            "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg",
            "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg",
            "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg",
            "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg"
        ],
        "It is a new beginning for Kratos. Living as a man outside the shadow of the gods, he ventures into the brutal Norse wilds with his son Atreus, fighting to fulfill a deeply personal quest. His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… And teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew. Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. From the marble and columns of ornate Olympus to the gritty forests, mountains, and caves of Pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters, and gods. With an added emphasis on discovery and exploration, the world will draw players in to explore every inch of God of War’s breathtakingly threatening landscape—by far the largest in the franchise. With an over the shoulder free camera that brings the player closer to the action than ever before, fights in God of War mirror the pantheon of Norse creatures Kratos will face: grand, gritty, and grueling. A new main weapon and new abilities retain the defining spirit of God of War while presenting a vision of violent conflict that forges new ground in the genre",
        new Requirement(
            [
                "Windows 10 - April 2018 Update (v1803)"
            ],
            [
                "Intel® Core™ i7-4770K",
                "AMD Ryzen 5 1500X"
            ],
            12,
            [
                "Nvidia GeForce GTX 1060 6GB",
                "AMD Radeon RX 480 4GB"
            ],
            150
        ),
        "Sony Interactive Entertainment"
    ),
    new GameData(
        "g_3070",
        "Fallout 4",
        "2015-11-09",
        "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        "http://www.fallout4.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Third Person",
            "Sci-fi",
            "FPS",
            "Exploration",
            "Sandbox",
            "Survival",
            "Action RPG",
            "Third-Person Shooter",
            "Post-apocalyptic",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg",
            "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg",
            "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg",
            "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg",
            "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg",
            "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg"
        ],
        "The fourth game in the post-apocalyptic action RPG series from Bethesda studious brings players back to the retro-future. After customizing the facial features of the character, players will be admitted to the Vault 111 with their family, and tricked into entering the cryogenic capsule. After the rude awakening after the unknown amount of time has passed, the child is separated from the parents and the loving partner is killed in front of them – the main quest is settled. Now there’s only the giant open world to explore. Fallout 4 introduces the mechanics of settlement building, where players can build their own little town. Gathering material for crafting and building brings more “survival” elements into the old formula. Within their own settlements, players will be able to build all needed utilities, from storage spaces to power armor stations. Visual upgrade from the previous game brings life to what used to be brown wastelands, now filled with details and color.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "Intel Core i7-3770",
                "AMD® FX-8350"
            ],
            8,
            [
                "NVIDIA® GeForce GTX 970",
                "ATI Radeon R9 series"
            ],
            "Version 11",
            25
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_2454",
        "DOOM (2016)",
        "2016-05-13",
        "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        "https://bethesda.net/game/doom",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "Great Soundtrack",
            "Co-op",
            "cooperative",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "Horror",
            "FPS",
            "Gore",
            "Difficult",
            "Classic",
            "Zombies",
            "Memes",
            "Fast-Paced",
            "Remake",
            "Blood",
            "Demons",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg",
            "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg",
            "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg",
            "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg",
            "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg",
            "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg"
        ],
        "Return of the classic FPS, Doom (2016) acts as a reboot of the series and brings back the Doomslayer, protagonist of the original Doom games. In order to solve the energy crisis, humanity learned to harvest the energy from Hell, and when something went wrong and a demon invasion has started, it’s up to the player to control the Doomslayer and destroy the evil.Doom is a fast-paced game that restores the concept of instant health packs and leaves the player against armies of Hell with no cover, no health regeneration, or help from anyone. After damaging monsters enough, they will start glowing, which will allow players to perform glory kills to restore some health. While exploring the levels, players will come across secrets, collectible items, or upgrade points for the weapons and armor. The single-player campaign silent protagonist has a noticeable personality. He gets visibly annoyed and angry in his actions during expository cutscenes and forces his way through the game. Multiplayer maps gather players in Deathmatch/”king-of-the-hill” type game modes, with all the weapons from the single-player campaign.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "2.8 GHz Quad Core CPU"
            ],
            3,
            [
                "1GB NVIDIA GTX 460 / ATI Radeon HD 6850 or better"
            ],
            "Version 9.0c",
            5
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_3939",
        "PAYDAY 2",
        "2013-08-13",
        "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
        "http://www.crimenet.info",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "gog-trading-cards",
            "Great Soundtrack",
            "Co-op",
            "cooperative",
            "First-Person",
            "FPS",
            "Online Co-Op",
            "Funny",
            "Stealth",
            "Tactical",
            "In-App Purchases",
            "Team-Based",
            "Crime",
            "PvE",
            "Heist",
            "Gun Customization",
            "Action",
            "Shooter"
        ],
        "Adults Only",
        [
            "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg",
            "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg",
            "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg",
            "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg",
            "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg",
            "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg"
        ],
        "The gang is back, and they have bigger and better plans. Objective based cooperative FPS became more complicated. The classic group of Hoxton, Dallas, Chains and Wolf got reinforcement, and now Payday Gang consists of 21 heisters, some of which are based on movie characters or even Youtubers. Players will be able to customize their own private arsenal, their masks, and skills, to complete the missions in their own way, be it stealthy sneak-in or full frontal assault. After completing missions, players will receive EXP points, money and a chance to get a special item that can be a gun modification, mask or a safe containing weapon skins.Payday 2 is a multiplayer game, meaning, that even during offline missions players will be followed by AI characters, whose loadouts, masks and perks can be customized as well. This game has been supported by the developers for many years, and amount of DLC speaks plenty of their dedication to the player base.",
        new Requirement(
            [
                "64-bit Windows 7 / Windows 8 / Vista"
            ],
            [
                "Intel Core i5-750, 2.67 GHz or AMD Phenom II X4 965, 3.4 GHz or better"
            ],
            4,
            [
                "NVIDIA® GeForce™ GTX 560",
                "AMD® Radeon™ HD 6950"
            ],
            "Version 11",
            22
        ),
        "505 Games"
    ),
    new GameData(
        "g_11859",
        "Team Fortress 2",
        "2007-10-10",
        "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        "http://www.teamfortress.com/",
        [
            "Gog Achievements",
            "Multiplayer",
            "gog-trading-cards",
            "Co-op",
            "cooperative",
            "First-Person",
            "Partial Controller Support",
            "FPS",
            "Online Co-Op",
            "Funny",
            "Comedy",
            "Free to Play",
            "Tactical",
            "stats",
            "Gog Workshop",
            "Cross-Platform Multiplayer",
            "Includes level editor",
            "Moddable",
            "Captions available",
            "In-App Purchases",
            "Crafting",
            "Team-Based",
            "Competitive",
            "Valve Anti-Cheat enabled",
            "Robots",
            "Commentary available",
            "Cartoony",
            "Cartoon",
            "Class-Based",
            "Trading",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/596/5968ba06bac8bee0ec7e9d03c970c421.jpg",
            "https://media.rawg.io/media/screenshots/94f/94f4eb0b3d1fde7a37ec84f0f66f7f87.jpg",
            "https://media.rawg.io/media/screenshots/a0a/a0ad82cad18d0a2466d1d5f12bf8858c.jpg",
            "https://media.rawg.io/media/screenshots/a83/a83038d2ec296522ab1b9ab0521b1ec3.jpg",
            "https://media.rawg.io/media/screenshots/8d4/8d488a3e65256ec777c8097b0faacc78.jpg",
            "https://media.rawg.io/media/screenshots/707/707c7488bd6e35bc74d274a923bc1df2.jpg"
        ],
        "TF2 is an objective based arena shooter with unique characters, representing different classes, acting as a staple of casual and competitive gaming for Steam. Dozens of different maps and game modes are trying to keep this game alive, after all the years it was available. Each character has a vast arsenal that can be accessed through completing in-game achievements, randomly receiving them from loot-boxes within the game, crafting them or just buying and trading items on the Steam Market. For players, that's not into the direct clash with players from the enemy team, Team Fortress 2 introduced a PvE mode, which is wave defense from the mirrored robotic opponents that have qualities of some of the playable classes. Every update and introduction, made over years, provided a lot of entertainment In the form of comic books an short animated videos, creating and explaining a story behind endless clashes for resources, briefcases or pure domination.",
        new Requirement(
            [
                "Windows 7x64",
                "Windows 8x64",
                "Windows 10x64"
            ],
            [
                "Intel Core i7-4790 (3.60GHz)"
            ],
            8,
            [
                "NVIDIA GeForce GTX 760"
            ],
            "Version 11",
            28
        ),
        "Valve"
    ),
    new GameData(
        "g_278",
        "Horizon Zero Dawn",
        "2017-02-28",
        "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
        "https://www.guerrilla-games.com/play/horizon",
        [
            "Singleplayer",
            "Atmospheric",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Sci-fi",
            "Exploration",
            "Female Protagonist",
            "Stealth",
            "Action RPG",
            "role-playing",
            "exclusive",
            "Post-apocalyptic",
            "Futuristic",
            "Cinematic",
            "3rd-Person Perspective",
            "Robots",
            "Drama",
            "Lore-Rich",
            "3rd-person",
            "Experience",
            "open-world",
            "atmosphere",
            "Action",
            "Adventure",
            "RPG"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/9cc/9cc79c34d70e437f3931f8476c384f43.jpg",
            "https://media.rawg.io/media/screenshots/898/898c2b3a6985f964cd65d55d9d323dbd.jpg",
            "https://media.rawg.io/media/screenshots/c44/c44b7da5fcbf57d740a7bafe435d555e.jpg",
            "https://media.rawg.io/media/screenshots/c8c/c8cbefacf83746eadc23f19531676304.jpg",
            "https://media.rawg.io/media/screenshots/e53/e534a3e2c61f57b41ad1d1389d5b126f.jpg",
            "https://media.rawg.io/media/screenshots/120/12094e8cdcdc97a607d711e9c923ab64.jpg"
        ],
        "Horizon Zero Dawn is an experiment. A very impressive experiment that actually succeeded. Having a very curious mix of cyberpunk and prehistorical styles and esthetic, the game provides us with quite a unique experience. We need to arm ourselves with arrows and a bow, with a spear or any other prehistorical-ish weapon in order to defeat out enemies - dinosaur-mechanisms that are spread around the world. If that wasn't enough, Aloy our main protagonist can control an AI named GAIA. What we're having here is an exciting connection with 'very old times' and 'near future', even though the game is set up in the 31st century. Being an outcast with her father Rost, Aloy must restore her position in the tribe and save the world by stopping the Eclipse, a cult that wants to rule the world. Join her on that journey, exploring the world and people that live in such hard surroundings.",
        new Requirement(
            [
                "Windows XP",
                "Vista",
                "Window 7"
            ],
            [
                "AMD Athlon 64 X2 5200+ Dual Core 2.60Ghz",
                "Intel Core 2 Duo E6420 Dual Core 2.13Ghz"
            ],
            3,
            [
                "NVIDIA 8800GT 512MB graphics card or better",
                "ATI Radeon HD4830 512MB graphics card or better"
            ],
            "9.0c"
        ),
        "Sony Computer Entertainment"
    ),
    new GameData(
        "g_4459",
        "Grand Theft Auto IV",
        "2008-04-29",
        "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
        "http://www.rockstargames.com/iv",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "Co-op",
            "Open World",
            "cooperative",
            "Third Person",
            "Partial Controller Support",
            "Funny",
            "Gore",
            "Classic",
            "Sandbox",
            "Third-Person Shooter",
            "Moddable",
            "Crime",
            "Dark Humor",
            "Satire",
            "first person mod",
            "Bowling",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/07f/07f7cf80741ff306e4eca982c3e64ac8.jpg",
            "https://media.rawg.io/media/screenshots/fef/fefd51ec13aa33acbd796ef79bcef7cb.jpg",
            "https://media.rawg.io/media/screenshots/b78/b78ffd258d5793be704c380e572748bc.jpg",
            "https://media.rawg.io/media/screenshots/17c/17c85ab9dfc4fda8e1e5ba72932ef2bf.jpg",
            "https://media.rawg.io/media/screenshots/a12/a12ca99cc74c1e7eba7100b0891dd1e0.jpg",
            "https://media.rawg.io/media/screenshots/b25/b254f9729ae3f36a9ccffccaa01d5cf6.jpg"
        ],
        "Every crime story is a story of a search for success. The player will become Niko Bellic, immigrant arriving at the Liberty City to reunite with his cousin Roman and find the man that betrayed him and his army unit fifteen years prior to the events of the game. While protecting his cousin, Niko has to deal with loan sharks, Russian mobsters, and other gangs. After the third game, GTA brought more realism to the player, in order to make the city and its people look more believable. Street vendors on every corner will sell food that replenishes health, bars with playable dart boards, bowling alleys and even comedy clubs and movie theatres. Open world will allow players not only hang out with important NPC in order to receive bonuses and unlocks but taking girls on the dates as well, to help Niko settle. Multiplayer mode allows up to 32 players to explore the copy of the single-player city and initiate multiplayer activities, like races or Deathmatches.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "Dual Core 3.0 Ghz"
            ],
            4,
            1,
            [
                "256mb Video Memory, capable of Shader Model 2.0+"
            ],
            "9.0c or Greater"
        ),
        "Capcom"
    ),
    new GameData(
        "g_41494",
        "Cyberpunk 2077",
        "2020-12-10",
        "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
        "https://www.cyberpunk.net/",
        [
            "Singleplayer",
            "Atmospheric",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Exploration",
            "Sandbox",
            "Violent",
            "Action RPG",
            "Action-Adventure",
            "role-playing",
            "Nudity",
            "Mature",
            "Futuristic",
            "Cinematic",
            "Cyberpunk",
            "Crime",
            "Sexual Content",
            "3rd-Person Perspective",
            "Robots",
            "Blood",
            "America",
            "Masterpiece",
            "Soundtrack",
            "Hacking",
            "Role Playing Game",
            "immersive",
            "Photorealistic",
            "Action",
            "Adventure",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/814/814c25d6fd1fd34a4e6dade645a3bda7.jpg",
            "https://media.rawg.io/media/screenshots/622/6220d4a748fd1abd23ece425111e8149.jpg",
            "https://media.rawg.io/media/screenshots/2ab/2ab0b67e68b6ede6b19d80094b6f7f2a_qTSfS2g.jpg",
            "https://media.rawg.io/media/screenshots/cd2/cd22af9d6ac593440defac6082760e4a.jpg",
            "https://media.rawg.io/media/screenshots/9b5/9b51535beb9d9e416cb9aac874091334.jpg",
            "https://media.rawg.io/media/screenshots/d84/d84d3a16c1e2cb24dcf73e0108d78455.jpg"
        ],
        "Cyberpunk 2077 is a science fiction game loosely based on the role-playing game Cyberpunk 2020.###SettingThe game is set in the year 2077 in a fictional futuristic metropolis Night City in California. In the world of the game, there are developed cybernetic augmentations that enhance people's strength, agility, and memory. The city is governed by corporations. Many jobs are taken over by the robots, leaving a lot of people poor and homeless. Night City has a roaring underworld, with black markets, underground surgeons, drug dealers, and street gangs abound.###CharactersThe main protagonist is fully customizable, including his or her sex and appearance, and goes by the nickname V. He or she is an underground mercenary who does “dirty business” for the various contractors. An NPC companion named Jackie joins the protagonist early at the game, and various other companions may join the player on certain missions as the plot demands. However, the game has no parties and no companion system.###GameplayThe player controls V from the first person view, with the third-person view used for cutscenes only. The protagonist can travel across the city on feet or using various vehicles, in a manner some observers compared to GTA series. There are many options for the character customization, including three character classes, and a variety of augmentations V can install to enhance his or her abilities.",
        new Requirement(
            [
                "Windows 7"
            ],
            [
                "Any Quad Core or 3.0+ GHz Dual Core CPU"
            ],
            2,
            [
                "GeForce GTX 260 and above"
            ],
            "DirectX 10 or higher"
        ),
        "CD PROJEKT RED"
    ),
    new GameData(
        "g_3272",
        "Rocket League",
        "2015-07-07",
        "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
        "http://www.rocketleaguegame.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Co-op",
            "cooperative",
            "Online Co-Op",
            "Funny",
            "Split Screen",
            "Local Co-Op",
            "Local Multiplayer",
            "stats",
            "Gog Workshop",
            "Cross-Platform Multiplayer",
            "Team-Based",
            "Fast-Paced",
            "Competitive",
            "4 Player Local",
            "4 giocatori divano",
            "Football",
            "Soccer",
            "lan party",
            "Sports",
            "Racing",
            "Indie"
        ],
        "Everyone",
        [
            "https://media.rawg.io/media/screenshots/6a0/6a0745d9dcd0f7a368d372260baf91aa.jpg",
            "https://media.rawg.io/media/screenshots/5ea/5ea8ab6a35f189489b2ec8713d4f1619.jpg",
            "https://media.rawg.io/media/screenshots/508/5083fd170bf10606afd12afc7d17db04.jpg",
            "https://media.rawg.io/media/screenshots/02d/02d36e8e01a9f1063c6431ce09324e24.jpg",
            "https://media.rawg.io/media/screenshots/036/036ddade8156ac52ecf8de593123d12c.jpg",
            "https://media.rawg.io/media/screenshots/861/8615727f6e52f1632ae38d71e9e4c800.jpg"
        ],
        "Highly competitive soccer game with rocket-cars is the most comprehensive way to describe this game. Technically a sequel to Psyonix’ previous game - Supersonic Acrobatic Rocket-Powered Battle-Cars; Rocket League successfully became a standalone sensation, that can be enjoyed by anyone. Easy to learn, hard to master game mechanics are perfect for the tight controls. Players are invited to maneuver the different fields within several game modes, from arcade to ranked game either 1v1, or in 2v2 and 3v3 teams. Using boosters will not only speed up the car but will allow the car to propel itself into the air.Rocket League provides several levels of customization, where not only the color of your car can be adjusted, but the colors and form of the booster flame, different hats, and little flags. Or players can pick a completely different car. Collaboration with different franchises brought not only original transport but some famous cars, including Batmobile or Delorian from Back to the Future.",
        new Requirement(
            [
                "Windows 10 - April 2018 Update (v1803)"
            ],
            [
                "Intel® Core™ i7-4770K",
                "AMD Ryzen 5 1500X"
            ],
            12,
            [
                "Nvidia GeForce GTX 1060 6GB",
                "AMD Radeon RX 480 4GB"
            ],
            150
        ),
        "Psyonix"
    ),
    new GameData(
        "g_422",
        "Terraria",
        "2011-05-16",
        "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
        "http://www.terraria.org/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "RPG",
            "Co-op",
            "Open World",
            "2D",
            "Online Co-Op",
            "Exploration",
            "Sandbox",
            "Survival",
            "Online multiplayer",
            "Pixel Graphics",
            "role-playing",
            "controller support",
            "Family Friendly",
            "Replay Value",
            "Crafting",
            "Building",
            "overlay",
            "Action",
            "Indie",
            "Platformer"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/3af/3afd69426804e7162edbe03cd9f8d0f4.jpg",
            "https://media.rawg.io/media/screenshots/48c/48c7e3e1268467b91b24c7da7c6539df.jpg",
            "https://media.rawg.io/media/screenshots/84b/84b447d4df99d42ffe479c7feb438171.jpg",
            "https://media.rawg.io/media/screenshots/de0/de053efd6104719567d23fb0dad58b92.jpg",
            "https://media.rawg.io/media/screenshots/490/4907be07a7771c8a7f0eb30c3a1fadc0.jpg",
            "https://media.rawg.io/media/screenshots/485/485ce1d6c733357664be153777097af1.jpg"
        ],
        "Terraria is a 2D action adventure sandbox game, where players create a character and gather resources in order to gradually craft stronger weapons and armor. Players create randomly generated maps that contain different locations within it, and by gathering specific resources and triggering special events, players will fight one of the many in-game bosses. Created characters can be played on different maps.The game introduces hundreds of unique items that can be found across the entirety of the map, some of which may not even be encountered. Terraria have many different Biomes and areas with distinct visuals, containing resources and enemies unique to this biome. After gathering materials, players can craft furniture, and build settlements and houses, since after completing events or finding specific items NPCs will start to arrive, and will require player’s protection. Terraria can be played on three difficulties and has a large modding community.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "Dual Core 3.0 Ghz"
            ],
            4,
            1,
            [
                "256mb Video Memory, capable of Shader Model 2.0+"
            ],
            "9.0c or Greater"
        ),
        "505 Games"
    ),
    new GameData(
        "g_10213",
        "Dota 2",
        "2013-07-09",
        "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        "http://www.dota2.com/",
        [
            "Multiplayer",
            "gog-trading-cards",
            "RPG",
            "Co-op",
            "cooperative",
            "Online Co-Op",
            "Fantasy",
            "Difficult",
            "Free to Play",
            "Action RPG",
            "Gog Workshop",
            "PvP",
            "Character Customization",
            "In-App Purchases",
            "Replay Value",
            "Team-Based",
            "RTS",
            "Competitive",
            "Valve Anti-Cheat enabled",
            "Tower Defense",
            "MOBA",
            "e-sports",
            "SteamVR Collectibles",
            "Action",
            "Massively Multiplayer"
        ],
        "everyone",
        [
            "https://media.rawg.io/media/screenshots/cef/cefd0f45c88be2d6e2ff7eed94c16cf3.jpg",
            "https://media.rawg.io/media/screenshots/e2a/e2a1a6c8b07bcdb91d7c6050b16854c5.jpg",
            "https://media.rawg.io/media/screenshots/55e/55e2c2ff16229eef87cfd8728ca537ac.jpg",
            "https://media.rawg.io/media/screenshots/601/601ceb08d04da42f4de5d8b9016f31a6.jpg",
            "https://media.rawg.io/media/screenshots/f02/f02a389dafd748b801cb4ff971a868af.jpg",
            "https://media.rawg.io/media/screenshots/da6/da6e4cba4e5787674d0e6877d1fc426a.jpg"
        ],
        "What used to be an unofficial modded map for the Warcraft 3, ended up being the most budgeted cybersport discipline, gathering millions of people to watch annual international championships.MOBA genre started with the DOTA, Defense of the Ancients, which can be efficiently described as 5 vs 5 top-down action strategy game, during which players are tasked to destroy the enemy core while protecting their own.Players can pick out of the roster of 112 heroes and battle on the single map while taking advantage of field vision, resources and item build that can either make heroes stronger or disable the enemy. DOTA 2 is still active, and receives updates weekly, reshaping metas and refreshing game balance, if by any chance some heroes became unreasonably strong. Each hero has not only a unique set of abilities but is fully customizable, through getting items for heroes after matches of through the trade. Not only heroes but terrain, couriers, that deliver items for you and even match announcers, that can be voiced by heroes, professional casters of just memorable characters from other forms of media.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "Intel Core i7-3770",
                "AMD® FX-8350"
            ],
            8,
            [
                "NVIDIA® GeForce GTX 970",
                "ATI Radeon R9 series"
            ],
            "Version 11",
            25
        ),
        "Valve"
    ),
    new GameData(
        "g_766",
        "Warframe",
        "2013-03-25",
        "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        "http://www.warframe.com",
        [
            "Singleplayer",
            "Multiplayer",
            "gog-trading-cards",
            "RPG",
            "Co-op",
            "cooperative",
            "Third Person",
            "Sci-fi",
            "Partial Controller Support",
            "FPS",
            "Online Co-Op",
            "Free to Play",
            "Third-Person Shooter",
            "Space",
            "role-playing",
            "Hack and Slash",
            "In-App Purchases",
            "Futuristic",
            "Parkour",
            "Cyberpunk",
            "PvE",
            "Ninja",
            "looter shooter",
            "Action",
            "Shooter",
            "Massively Multiplayer"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/2e1/2e15c9f4cca692ebca67b7652e559f6d.jpg",
            "https://media.rawg.io/media/screenshots/70d/70de629465e39f8108aa533df9cff554.jpg",
            "https://media.rawg.io/media/screenshots/b3a/b3a368123558e7f4010e8b68518d6412.jpg",
            "https://media.rawg.io/media/screenshots/fd2/fd2225327c9dca60c9acea0edca8c5fc.jpg",
            "https://media.rawg.io/media/screenshots/34e/34e3c0d71551f07c3bb709fe12f18ca2.jpg",
            "https://media.rawg.io/media/screenshots/977/977735a2fad2bc47917424e20e9dff56.jpg"
        ],
        "Warframe is an online free-to-play cooperative third-person looter shooter. In the far future the Orokin had absolute control over the solar system but have since disappeared, now the militaristic Grineer, the money-worshipping Corpus, and the Infested fight for what they left behind. You are a Tenno - a master of gun and blade and user of the Warframes, it is up to you to bring back balance to the system from within, while also fighting a new threat from without: the Sentients.Over 40 unique Warframes to build, hundreds of guns and melee weapons to utilize, and various pet companions to help you along the way - all of which can be crafted for free and enhanced by an in-depth modding system.With constant updates by Digital Extremes, the game now has over six years of updates including new open-world landscapes (Plains of Eidolon-2017, Orb Vallis-2018) and cinematic story expansions (The Second Dream-2015, The War Within-2016, The The Sacrifice-2018) with more content being added every year.",
        new Requirement(
            [
                "64-bit: Win 7 SP1",
                "Win 8.1"
            ],
            [
                "Intel Core i7-3770, 3.4 GHz",
                "AMD FX-8350, 4.0 GHz"
            ],
            8,
            [
                "NVIDIA GeForce GTX 660",
                "AMD Radeon HD 7950"
            ],
            "Version 11",
            57
        ),
        "Digital Extremes"
    ),
    new GameData(
        "g_29028",
        "Metro 2033",
        "2010-03-16",
        "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg",
        "http://metro2033game.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Horror",
            "FPS",
            "Survival",
            "Stealth",
            "Dark",
            "Post-apocalyptic",
            "Survival Horror",
            "3D Vision",
            "Linear",
            "Based On A Novel",
            "Benchmark",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/e79/e7946cab379370fdef03c2e2c9dfcce3.jpg",
            "https://media.rawg.io/media/screenshots/ad4/ad433938bd2377b1beaa8a184bb67405.jpg",
            "https://media.rawg.io/media/screenshots/28e/28e63b7f13e9ec24ad64ef5ae75e258c.jpg",
            "https://media.rawg.io/media/screenshots/b99/b99a0bf0f09991d76ad13c65f7e64562.jpg",
            "https://media.rawg.io/media/screenshots/df1/df1aa556c727ad4f4753dbb9e43875c0.jpg",
            "https://media.rawg.io/media/screenshots/94b/94bcd09e75c34712fa85ea6b4945a57c.jpg"
        ],
        "Not all post-apocalyptic stories begin in the burned wastelands, this time nuclear and chemical locked up survivors in the Moscow Subway, and player will take the place of Artyom, one of the survivors from the VDNKh, adoptive son of the station commander, and taking upon himself the task to deliver information about the Dark Ones to the Polis, the capital of subway, after the special operative from Spartans named Hunter went missing, after he ventured to gather information on the Hive – living space of the Dark Ones.Dark tunnels of broken subway create a claustrophobic atmosphere, where good and bad people alike are forced to bond. Closely following original book, Metro 2033 introducing bullets as currency. Players can exchange one type of bullets for another one, but it’s still ammo and will be wasted with inaccurate aim. It’s a first person shooter that will allow players not only see how broken apart can society become but to explore such society and ruins of the city above the underground settlement. Various monsters and mutants are not the only threat to the players, but humans as well. FPS with some stealth sections, Metro 2033 will show you every historical enemy type: bandits, Communists, and Nazis.",
        new Requirement(
            [
                "Windows 10"
            ],
            [
                "Intel Core i5"
            ],
            8,
            [
                "GeForce GTX 560"
            ],
            "Version 11",
            9
        ),
        "Deep Silver"
    ),
    new GameData(
        "g_3192",
        "Metal Gear Solid V: The Phantom Pain",
        "2015-09-01",
        "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        "http://www.metalgearsolid.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "Open World",
            "Third Person",
            "Sci-fi",
            "Gog Leaderboards",
            "Sandbox",
            "Stealth",
            "Tactical",
            "Third-Person Shooter",
            "Dark",
            "Captions available",
            "Replay Value",
            "Cinematic",
            "Heist",
            "Horses",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/fa0/fa0cb095629729fb990079d0ec135dae.jpg",
            "https://media.rawg.io/media/screenshots/768/768087f6fbfae3b1fa7533c38bda35a0.jpg",
            "https://media.rawg.io/media/screenshots/40b/40bf3a64adc8e3b6ffadd1420b1bd250.jpg",
            "https://media.rawg.io/media/screenshots/344/3447022b021fb337970aaa16e9adfa1f.jpg",
            "https://media.rawg.io/media/screenshots/410/41074cb7d1a80e15b16e5166f121c0e0.jpg",
            "https://media.rawg.io/media/screenshots/535/5358bcad9e3c51816ffb923fcdd9938a.jpg"
        ],
        "Metal Gear Solid 5 continues the story of MGS: Peace Walker and MGS V: Ground Zeroes. Snake seeks revenge for the attack on the MSF group 9 years ago, that placed Big Boss into a coma. After the failed assassination attempt, Big Boss takes the code name Venom Snake, delving back into the world of superhumans and espionage.A large-scale story that includes 5 hours of cinematic cutscenes compliments open world exploration with hundreds of audio logs and side missions, forming the atmosphere of military drama with sci-fi elements. MGS5: Phantom Pain has an advanced AI system that will allow enemy soldiers constantly call for reinforcements if they see that something is wrong, forcing players to take down communications and fight or retreat and try again. Players will manage the base by gathering and managing staff, weaponry, and resources, in order to upgrade their personal arsenal and companions.",
        new Requirement(
            [
                "64-bit Windows 7"
            ],
            [
                "Ryzen 5 CPU or Equivalent"
            ],
            8,
            [
                "AMD Radeon™ R9 290",
                "NVIDIA GeForce® GTX 970"
            ],
            "Version 11",
            22
        ),
        "Konami"
    ),
    new GameData(
        "g_7689",
        "Rise of the Tomb Raider",
        "2015-11-10",
        "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
        "http://www.tombraider.com/us/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Gog Leaderboards",
            "Exploration",
            "Female Protagonist",
            "Survival",
            "Stealth",
            "Third-Person Shooter",
            "Action-Adventure",
            "Parkour",
            "Quick-Time Events",
            "Lara Croft",
            "Action"
        ],
        "everyone",
        [
            "https://media.rawg.io/media/screenshots/fbf/fbff1fe1f3cbe33dec8b2fc98bbad4a4.jpg",
            "https://media.rawg.io/media/screenshots/c18/c187789c40eea061a44c3fb497059c01.jpg",
            "https://media.rawg.io/media/screenshots/256/256472a369b9f52cfe0b8e85eb49ef19.jpg",
            "https://media.rawg.io/media/screenshots/38a/38a67aab95a0a5f9fe1a40821a63f0c6.jpg",
            "https://media.rawg.io/media/screenshots/a1f/a1f2d03a0d0f70f4aed355f6e138f2a4.jpg",
            "https://media.rawg.io/media/screenshots/03d/03df750d5d64eb8bf0121e92e1f701e0.jpg"
        ],
        "Rise of the Tomb Raider is the eleventh entry in the franchise, being a sequel to its predecessor, Tomb Raider, a reboot of the franchise. This story follows Lara Croft, one year after battling her supernatural experiences in Yamatai. This time she is trying to find the legendary city of Kitezh in Siberia, Russia. The legend behind the city begins in the 12th century and still comes nowadays, that this ancient city grants with a promise of immortality. While Lara tries to solve the mystery of Siberia, she encounters an organisation called Trinity. They want to retrieve this gift to themselves. Following the notes of her father, Lara tries to discover the secrets of the ancient city and stop Trinity in doing so.Exploring the Soviet motive, even more, the game has the DLC's - Baba Yaga, the Temple of the Witch, which follows Lara in the Soviet mine and confronting the legendary witch of Russian folk-tales, Cold Darkness Awakened, the story about a secret biological weapon and Blood Ties and Lara's Nightmare - a fight for ownership of the Croft estate. Besides craftmanship and exploring, the game focuses on a very progressive combat system giving a player a wide variety of strategic options. There is a way to evade your opponents in the bushes; stealth kills with bow and arrows or open combat with firearms like shotguns, pistols and other guns. WIth earning experience, you can give Lara new ways of encountering her enemies by three different specialisations - Hunter, Survivor or Brawler. Each skill tree offers various options of combat, for example using Lara's surroundings and fauna, traps or better aim. With these options, you can choose how to guide Lara Croft in her adventures.",
        new Requirement(
            [
                "Windows® 7 32/64-bit",
                "Vista 32/64",
                "XP"
            ],
            [
                "Intel core 2 duo 2.4GHz"
            ],
            2,
            [
                "Video Card Shader model 3.0. NVidia 7600",
                "ATI X1600 or better"
            ],
            13,
            "9.0c"
        ),
        "Square Enix"
    ),
    new GameData(
        "g_3287",
        "Batman: Arkham Knight",
        "2015-06-23",
        "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg",
        "https://www.batmanarkhamknight.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Story Rich",
            "Open World",
            "Third Person",
            "Horror",
            "Gog Leaderboards",
            "Sandbox",
            "Stealth",
            "Dark",
            "Mature",
            "Beat 'em up",
            "Detective",
            "Comic Book",
            "Superhero",
            "Batman",
            "Action"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/1ed/1ed7f33789fdb79dbe7ae346f7b24fdf.jpg",
            "https://media.rawg.io/media/screenshots/c19/c19a4d55f1fa9661b32d43e110a5dbff.jpg",
            "https://media.rawg.io/media/screenshots/b87/b873d09e51115514cb1445a954dbca9e.jpg",
            "https://media.rawg.io/media/screenshots/cbe/cbee51d83cafbe75224336859ddfc27e.jpg",
            "https://media.rawg.io/media/screenshots/d2a/d2ab2d0f10e778c1a867c999515c3f9a.jpg",
            "https://media.rawg.io/media/screenshots/172/172a4d61d4b6d3b77f19f5826de439f2.jpg"
        ],
        "Batman: Arkham Knight is the final instalment for the Arkham series by now. Joining forces with Bruce Wayne for the last time, we have to oppose Scarecrow and other iconic villains such as The Riddler, Harleen Quinzel a.k.a. Harley Quinn, Penguin and others.The story continued after events in Arkham City when Joker died due to infection in his blood. Now, Scarecrow tries to release a new fear toxin, meanwhile new mysterious Arkham Knight plots against Batman as well. Still having consequences after being poisoned by the Joker and seeing visions with him, Bruce has to prevail the death of Gotham City.The gameplay mechanics stays the same to the Arkham series. Melee combat system, use of the detective skills to find clues and gadgets still play a major role in Batman's fight against evil. Although now you can travel around not only by your grappling hook but a legendary Batmobile as well. Iconic voices of the characters, Kevin Conroy and Mark Hammil once again return to give their voices for the last game in Arkham series.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "2.8 GHz Quad Core CPU"
            ],
            3,
            [
                "1GB NVIDIA GTX 460 / ATI Radeon HD 6850 or better"
            ],
            "Version 9.0c",
            5
        ),
        "Warner Bros. Interactive"
    ),
    new GameData(
        "g_23027",
        "The Walking Dead: Season 1",
        "2012-04-23",
        "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
        "",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "Story Rich",
            "Third Person",
            "Horror",
            "Gore",
            "Survival",
            "Zombies",
            "Point & Click",
            "Post-apocalyptic",
            "Choices Matter",
            "Mature",
            "Visual Novel",
            "Drama",
            "Episodic",
            "Comic Book",
            "Quick-Time Events",
            "Choose Your Own Adventure",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/d38/d38c78ec9cc707bf42652452235dbe8c.jpg",
            "https://media.rawg.io/media/screenshots/bdb/bdb7dd4891bfbb0a80cd49b36ffd1a20.jpg",
            "https://media.rawg.io/media/screenshots/72b/72b67d15b5ae5538734bac2b195f2976.jpg",
            "https://media.rawg.io/media/screenshots/74d/74d6a18a7b5592777de8f6a7cdbc91f8.jpg",
            "https://media.rawg.io/media/screenshots/52a/52aca015b4748b1b0bbbacf33110e983.jpg",
            "https://media.rawg.io/media/screenshots/94b/94b6701276d06b5b562890601fd6abaa.jpg"
        ],
        "The Walking Dead is a five-part game series set in the same universe as Robert Kirkman’s award-winning comic book series. Play as Lee Everett, a convicted criminal, who has been given a second chance at life in a world devastated by the undead. With corpses returning to life and survivors stopping at nothing to maintain their own safety, protecting an orphaned girl named Clementine may offer him redemption in a world gone to hell.A continuing story of adventure horror spanning across 5 episodes:Episode 1 – A New Day (Available Now)Episode 2 – Starved for Help (Available Now)Episode 3 – Long Road Ahead (Available Now)Episode 4 – Around Every Corner (Available Now)Episode 5 – No Time Left (Available Now)All five episodes are now available immediately upon purchasing Season 1. Based on Robert Kirkman’s Eisner-Award winning comic book series, The Walking Dead allows gamers to experience the true horror of the zombie apocalypseA tailored game experience – Live with the profound and lasting consequences of the decisions that you make in each episode. Your actions and choices will affect how your story plays out across the entire series.Experience events, meet people and visit locations that foreshadow the story of Deputy Sheriff Rick GrimesMeet Glenn before he heads to Atlanta, explore Hershel’s farm before Rick and his group of survivors arrive and before the barn becomes a notorious location in Walking Dead loreYou’ll be forced to make decisions that are not only difficult, but that will require you to make an almost immediate choice. There’s no time to ponder when the undead are pounding the door down!Features meaningful decision-making, exploration, problem solving and a constant fight for survival in a world overrun by the undeadArtwork inspired by the original comic books",
        new Requirement(
            [
                "Windows XP/Vista/7"
            ],
            [
                "Intel or AMD Quad-Core"
            ],
            4,
            [
                "GeForce 260 (1 GB)",
                "Radeon HD 4850 (1 GB)"
            ],
            "9.29",
            25
        ),
        "Telltale Games"
    ),
    new GameData(
        "g_16944",
        "The Witcher 2: Assassins of Kings Enhanced Edition",
        "2012-04-16",
        "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg",
        "http://www.thewitcher.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Partial Controller Support",
            "Fantasy",
            "Gog Leaderboards",
            "Difficult",
            "Dark",
            "Nudity",
            "Choices Matter",
            "Mature",
            "Dark Fantasy",
            "Medieval",
            "Magic",
            "Multiple Endings",
            "Based On A Novel",
            "Nonlinear",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/0c2/0c2a61b9c675c79be87bb3932779062c.jpg",
            "https://media.rawg.io/media/screenshots/361/36171d84641951be2ca964b667d55d54.jpg",
            "https://media.rawg.io/media/screenshots/336/3366909fa35d542c7293df9d6b4d0aac.jpg",
            "https://media.rawg.io/media/screenshots/c67/c672445939555d23ab0acbeba2d4527f.jpg",
            "https://media.rawg.io/media/screenshots/441/4413f59b847bc08634920b79a2071399.jpg",
            "https://media.rawg.io/media/screenshots/cb5/cb5517c5b620811050cb791516f2c5da.jpg"
        ],
        "The player is Geralt of Rivia, infamous monster slayer. In the second game of the series, titular witcher is involved in the inner conflicts of Temeria, where he stopped the rebellion and was hired as a bodyguard of Temerian King Foltest. Eventually, Foltest was assassinated by a witcher-like assassin, and the only person fitting the description was Geralt. The game combat system was reworked, in order to add traps and ranged throwing weapon, giving players more control over the course of the battle. It’s still a third person action RPG, and the player can upgrade and improve general abilities, swordsmanship, alchemy, and magic. The enhanced edition includes additional hours of content, new cinematics, the original soundtrack, game manual and quest handbook, among other things. The new tutorial allows players to spend more time to master new game mechanics and see for themselves visual improvements to the core game.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "1.4GHz processor or faster"
            ],
            1,
            [
                "DirectX 8-compatible graphics card with at least 32MB of video memory"
            ],
            "9.0c",
            250
        ),
        "1C-SoftClub"
    ),
    new GameData(
        "g_19103",
        "Half-Life 2: Lost Coast",
        "2005-10-27",
        "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
        "http://www.half-life2.com",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "Great Soundtrack",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Classic",
            "Free to Play",
            "Short",
            "Futuristic",
            "Aliens",
            "Dystopian",
            "Commentary available",
            "Illuminati",
            "Silent Protagonist",
            "Benchmark",
            "Action"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/9bf/9bf18c7c6759805fc79aad53f3df6f7d.jpg",
            "https://media.rawg.io/media/screenshots/9c5/9c5ac8722a23212460d1536e03c5562d.jpg",
            "https://media.rawg.io/media/screenshots/59d/59d81fcb1b2bff1e56bfe5c489638a46.jpg",
            "https://media.rawg.io/media/screenshots/259/259239f48f9e32210774b5641527071f.jpg",
            "https://media.rawg.io/media/screenshots/12b/12b9a7c1311586328718da042e5c16f3.jpg"
        ],
        "Essentially a tech demo, “Half-Life 2: Lost Coast” sole purpose was to show off the new high-dynamic-range-rendering of the Source engine, it was a welcome addition to the franchise. It’s a free addition to the game that can be downloaded through Steam by the owners of Half-Life 2. Gordon Freeman founds himself near a group of decaying piers, fully armed and ready to explore the monastery above him, fighting through the Combine forces.High-dynamic-range-rendering introduced realistic lighting effects to the game, emulating even camera’s overexposure to the bright light, which was eventually moved to the main game. Lost Coast story is conveyed without cutscenes, every part of the level is tailored specifically to demonstrate the changes, made by developers. Even though it was originally created for the Half-Life 2, it was removed from the main game, alongside some minor story details. It’s not a full standalone game and wasn’t intended as one.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "2.8 GHz Quad Core CPU"
            ],
            3,
            [
                "1GB NVIDIA GTX 460 / ATI Radeon HD 6850 or better"
            ],
            "Version 9.0c",
            5
        ),
        "Valve"
    ),
    new GameData(
        "g_416",
        "Grand Theft Auto: San Andreas",
        "2004-10-26",
        "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        "http://www.rockstargames.com/sanandreas/pc",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "Great Soundtrack",
            "Story Rich",
            "Open World",
            "Third Person",
            "Partial Controller Support",
            "Funny",
            "Classic",
            "Sandbox",
            "Comedy",
            "Moddable",
            "Mature",
            "Crime",
            "Driving",
            "first person mod",
            "Remote Play on Tablet",
            "Remote Play on Phone",
            "controversial",
            "karaihb",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/679/679c267107151f01696d3c8ea71ac650.jpg",
            "https://media.rawg.io/media/screenshots/560/560610b498ef079e1f45ec83b039cbc7.jpg",
            "https://media.rawg.io/media/screenshots/c8c/c8cf7ea395e6aa2e46abee36d9d2d699.jpg",
            "https://media.rawg.io/media/screenshots/191/191445072d9e85b6ad7ffed5152fc17a.jpg",
            "https://media.rawg.io/media/screenshots/bfe/bfe3c652960e2b6869c608a58d69d327.jpg",
            "https://media.rawg.io/media/screenshots/436/436134f55bd10cfd7a6fd1ded7487355.jpg"
        ],
        "Grand Theft Auto - San Andreas is the seventh entry in the series in the GTA franchise, but only second big title after GTA - Vice City. Setting up in fictional state San Andreas, you follow the story of CJ, a member of one of the multiple gangs in the city. CJ's family is being attacked in drive shooting which resulted in the death of CJ's mother, so he returns to home from Liberty City. Meeting the rest of the family at his mom's funeral, he decides to rebuild the gang and gain control of the state.The game makes a brilliant connection with missions and open world actions that you are able to do around the cities. You can steal cars, buy guns, hunt for collectables and do some side quests, while different characters give you specific missions in order to push the plot forward. Streets are filled with people as well as plenty of vehicles to steal. Fictional brands of cars, tanks, bikes are available to be stolen from any place around the city. Armoury contains pistols, rifles, hand-machine guns or a rocket launcher as well as melee weapons giving player freedom in anything he's doing in GTA.",
        new Requirement(
            [
                "Windows XP/Vista/7"
            ],
            [
                "Intel or AMD Quad-Core"
            ],
            4,
            [
                "GeForce 260 (1 GB)",
                "Radeon HD 4850 (1 GB)"
            ],
            "9.29",
            25
        ),
        "Capcom"
    ),
    new GameData(
        "g_11973",
        "Middle-earth: Shadow of Mordor",
        "2014-09-30",
        "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        "http://www.shadowofmordor.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Fantasy",
            "Gore",
            "Sandbox",
            "Stealth",
            "Action RPG",
            "Hack and Slash",
            "Dark Fantasy",
            "Parkour",
            "Magic",
            "Assassin",
            "Lore-Rich",
            "Based On A Novel",
            "gog",
            "category",
            "microtranzations",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/123/1239cbfc3e25664170e8c1d5049a6d91.jpg",
            "https://media.rawg.io/media/screenshots/47c/47cf2d5a0c37a6262a431a490a57d58d.jpg",
            "https://media.rawg.io/media/screenshots/9e7/9e7f6fad3ee317a7edf7f3bc6001ba9d.jpg",
            "https://media.rawg.io/media/screenshots/97f/97fdbb526196705e25ee503bc248b63f.jpg",
            "https://media.rawg.io/media/screenshots/770/77011e668d64fe192691d56f364fb561.jpg",
            "https://media.rawg.io/media/screenshots/1f2/1f2851c47112ca8e1edf7c2c377632a9.jpg"
        ],
        "Lord of the rings franchise brought a new title to the collection, an open world action-adventure game, that follows Talion, Gondor captain, that survived the sacrifice that was meant to bring the Elf Lord Celebrimbor as a wraith. Losing his wife and his son, Talion is merged with Celebrimor, escaping death.  Players will have to gain EXP in order to upgrade abilities through completing various missions and defeating Uruk warlords. Some missions might require special conditions for the greater reward.Shadow of Mordor implemented the Nemesis System. It tracks the progress of every special Uruk warrior. Each special Uruk has a set of strengths and weaknesses, and players can assassinate higher ranked officers in order to promote easy to defeat Uruk to defeat them at a higher rank, weakening the Sauron’s army. This planning allows players to adapt, and use mechanics of stealth kills, ranged combat, wraith skills and head-on melee more effective.",
        new Requirement(
            [
                "Windows 7 or Newer"
            ],
            [
                "2.5+ GHz Quad core"
            ],
            4,
            [
                "NVIDIA GTX 660 or better",
                "ATI 7950 or better"
            ],
            "Version 9.0c",
            7
        ),
        "Feral Interactive"
    ),
    new GameData(
        "g_17822",
        "The Witcher: Enhanced Edition Director's Cut",
        "2008-09-16",
        "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
        "http://www.thewitcher.com",
        [
            "Singleplayer",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Fantasy",
            "Classic",
            "Action RPG",
            "Nudity",
            "Choices Matter",
            "Mature",
            "Dark Fantasy",
            "Medieval",
            "Magic",
            "Multiple Endings",
            "Based On A Novel",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/6dc/6dc151862452fba8dfb510ba7131cefd.jpg",
            "https://media.rawg.io/media/screenshots/5c7/5c7f753ec6b9ca51eb477b016e1f6126.jpg",
            "https://media.rawg.io/media/screenshots/698/6983ac0ee603750b50212a0822a2cab7.jpg",
            "https://media.rawg.io/media/screenshots/7c5/7c545f5c7ae02355e8b76ee3d28bd12a.jpg",
            "https://media.rawg.io/media/screenshots/5bf/5bf40b1e7d50240c867a0ca1540b7b07.jpg",
            "https://media.rawg.io/media/screenshots/39c/39c47322a4dad4f3ac87cc97557c9a2d.jpg"
        ],
        "The Witcher is the very first instalment of the series that follows the story of Geralt from Rivia. Being found unconscious on the battlefield he must retrieve his memory and help the emperor's daughter, Adda to stop her from turning in to a feral monster. Facing the biggest enemy, Salamander, Geralt must also help all the fractions around the world to find peace between each other.The fighting system is very flexible. Choosing from three different styles, you can adapt Geralt for any kind of a combat situation. Fast style of fighting gives you an opportunity to strike your opponents with your speed. The strong style focuses itself on destroying your enemies with powerful attacks, while sweeping style is very good when facing a number of foes. You can also craft some potions to gain important benefits such as seeing in the dark or having a larger amount HP. Plot style is unique as well. The game never gives a precise definition of evil, which leads the player to convenient situations where the choice is quite bad anyway. Enhanced edition improves every aspect of the game as graphics and the productivity of it, while Director's Cut does the same without censorship for North America's version.",
        new Requirement(
            [
                "Windows® 7 32/64-bit",
                "Vista 32/64",
                "XP"
            ],
            [
                "Intel core 2 duo 2.4GHz"
            ],
            2,
            [
                "Video Card Shader model 3.0. NVidia 7600",
                "ATI X1600 or better"
            ],
            13,
            "9.0c"
        ),
        "1C-SoftClub"
    ),
    new GameData(
        "g_290856",
        "Apex Legends",
        "2019-02-04",
        "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
        "https://www.ea.com/games/apex-legends",
        [
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Co-op",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Online Co-Op",
            "Exploration",
            "Survival",
            "Free to Play",
            "Tactical",
            "Action-Adventure",
            "Dark",
            "PvP",
            "Character Customization",
            "Team-Based",
            "Cinematic",
            "combat",
            "Cyberpunk",
            "Battle Royale",
            "Hero Shooter",
            "lootboxes",
            "Action",
            "Shooter",
            "Adventure",
            "Massively Multiplayer"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/a59/a593423f503eae7f29cd642827cda18d.jpg",
            "https://media.rawg.io/media/screenshots/e7a/e7a1e5ec1b9861c340cdbef43bb47678.jpg",
            "https://media.rawg.io/media/screenshots/76e/76e5b435f9ba8ed79da0e5dd25762075.jpg",
            "https://media.rawg.io/media/screenshots/b4b/b4b3c320a4a3965d5da85406dcd05b77.jpg",
            "https://media.rawg.io/media/screenshots/52a/52a0266fde34d2a24f4ad6aee3da5051.jpg",
            "https://media.rawg.io/media/screenshots/05a/05a9a772ede23255689d1218b3b9a728.jpg"
        ],
        "Conquer with character in Apex Legends, a free-to-play* Battle Royale shooter where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier. Master an ever-growing roster of diverse legends, deep tactical squad play, and bold new innovations that level-up the Battle Royale experience—all within a rugged world where anything goes. Welcome to the next evolution of Battle Royale.Characters you can play as: Caustic, Bangalore, Bloodhound, Crypto, Gibraltar, Lifeline, Loba, Mirage, Octane, Pathfinder, Rampart, Revenant.",
        new Requirement(
            [
                "Windows 7, 64-bit"
            ],
            [
                "Intel CPU Core i7"
            ],
            8,
            [
                "Nvidia GPU GeForce GTX 660"
            ],
            "Version 11",
            10
        ),
        "Electronic Arts"
    ),
    new GameData(
        "g_19710",
        "Half-Life 2: Episode One",
        "2006-06-01",
        "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg",
        "http://ep1.half-life2.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "FPS",
            "Classic",
            "stats",
            "Zombies",
            "Moddable",
            "Captions available",
            "Short",
            "Cinematic",
            "Aliens",
            "Dystopian",
            "Commentary available",
            "Episodic",
            "Includes Source SDK",
            "Silent Protagonist",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/cf5/cf50b7b3673456c8a8c3a4667e9b46c2.jpg",
            "https://media.rawg.io/media/screenshots/8e4/8e44bdded28ebe1a2e7ac876110cfdc6.jpg",
            "https://media.rawg.io/media/screenshots/5ed/5edb413d48035b3ab97a5ea5123f7b88.jpg",
            "https://media.rawg.io/media/screenshots/421/4214168942f1ddb5475b2c270b0419d1.jpg",
            "https://media.rawg.io/media/screenshots/653/6536627d155c339a2fd9a824fad78c84.jpg"
        ],
        "Direct continuation of the Half-Life 2, Episode One serves as a direct sequel to the story. After the mystically assisted escape from the citadel, Gordon and Alyx are reunited outside, but the Citadel core became unstable and will imminently self-destruct. And the only way to save citizens of City 17 is to re-enter the decaying building and slow down the destruction for long enough, to evacuate the civilians and families. Continuation of the story uses the same Source engine, and players will have to traverse linear stages, disposing of enemies and solving physics puzzles. This time Gordon will be accompanied and assisted by Alyx. Her AI will attempt to adjust to the player choices. While purchasing Episode One, players will receive a copy of Half-Life: Deathmatch with it. Game mechanics and puzzles will center around Gravity Gun, which will be the first weapon in players possession from the beginning.",
        new Requirement(
            [
                "Windows 10 (64-bit)"
            ],
            [
                "Intel Core i7-4790",
                "AMD Ryzen 3 3200G"
            ],
            12,
            [
                "Nvidia GeForce GTX 1060 6GB",
                "GTX 1660 Super",
                "AMD Radeon RX 590"
            ],
            "Version 12",
            70
        ),
        "Valve"
    ),
    new GameData(
        "g_4427",
        "BioShock 2",
        "2010-02-09",
        "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
        "http://www.bioshockgame.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Horror",
            "FPS",
            "Action RPG",
            "Dark",
            "Dystopian",
            "Steampunk",
            "Linear",
            "Underwater",
            "Philisophical",
            "Action",
            "Shooter"
        ],
        "everyone",
        [
            "https://media.rawg.io/media/screenshots/a13/a130b342c9830f9c56d65c204638fe17.jpg",
            "https://media.rawg.io/media/screenshots/f38/f38a519f1545ef5cda66676c155cc5b8.jpg",
            "https://media.rawg.io/media/screenshots/996/996d1459d3f2ec1f03daba488d96c521.jpg",
            "https://media.rawg.io/media/screenshots/8da/8daab3b2c3d9e355f636e7d408a08315.jpg",
            "https://media.rawg.io/media/screenshots/f5c/f5c713b706c6b153b6a22ca1b08a1f5a.jpg",
            "https://media.rawg.io/media/screenshots/b7c/b7c32275a6be8134744322f1204ce176.jpg"
        ],
        "The second game returns us to the city of Rapture, on the New Year’s Eve, but this time player takes control of Subject Delta, Big Daddy, that’s been separated from his little sister and has been forced to shoot himself 2 years before the events of the first game took place. And after his awakening 10 years later, players will help to save the last sane citizens of Rapture. As seen in the previous game, the player will have access to new weapons, unique to Big Daddies, power drill and a rivet gun, alongside an array of plasmids, Tonics, and guns. Now players will be able not only save Little Sisters from other Big Daddies, and then either harvest ADAM directly, or protect them while they collect ADAM for their new guardian. Bioshock introduces a new enemy type, Big Sisters, which are extremely agile and fast versions of Big Daddies. Newly added multiplayer brings several never seen formats to the series. Aside from expected Deathmatches, the game added story-driven mode Fall of Rapture.",
        new Requirement(
            [
                "64-bit Windows 7 / Windows 8 / Vista"
            ],
            [
                "Intel Core i5-750, 2.67 GHz or AMD Phenom II X4 965, 3.4 GHz or better"
            ],
            4,
            [
                "NVIDIA® GeForce™ GTX 560",
                "AMD® Radeon™ HD 6950"
            ],
            "Version 11",
            22
        ),
        "2K Games"
    ),
    new GameData(
        "g_19709",
        "Half-Life 2: Episode Two",
        "2007-10-09",
        "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        "http://www.whatistheorangebox.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "Horror",
            "FPS",
            "Classic",
            "stats",
            "Zombies",
            "Post-apocalyptic",
            "Captions available",
            "Aliens",
            "Dystopian",
            "Commentary available",
            "Episodic",
            "Includes Source SDK",
            "Silent Protagonist",
            "Action",
            "Shooter",
            "Puzzle"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/04b/04b62b9115ccd64ebac1e8d813c69d08.jpg",
            "https://media.rawg.io/media/screenshots/278/278f1654ade9d116ca1bb42bb37d94ba.jpg",
            "https://media.rawg.io/media/screenshots/0f2/0f2b40d5aa1eb776fdedcdb4d11aca8e.jpg",
            "https://media.rawg.io/media/screenshots/895/895f1c364465b338e2d1b41b0b4eff67.jpg",
            "https://media.rawg.io/media/screenshots/016/01638fb0f73a6acde1714a107e078807.jpg"
        ],
        "Right after the escape from the collapsed Citadel, Gordon Freeman and his companion Alyx Vance learn that Combine used the destruction to open a portal, in order to bring powerful reinforcement. No major changes have been applied to the gameplay since the previous episode, instead, players will be invited to experiment with the gravity gun and more physics objects to use as impromptu ammunition. Episode Two brings back every staple of the series, including physic puzzles, driving sections, because it was developed simultaneously with the Episode One, but unlike first one Episode two has more puzzles, including the biggest puzzle in the series up to date.",
        new Requirement(
            [
                "Windows 10 64-bit"
            ],
            [
                "Intel i5-6600k (4 core 3.5 GHz)",
                "AMD Ryzen 5 2400 G (4 core 3.6 GHz)"
            ],
            8,
            [
                "NVIDIA GTX 1060 (6 GB)",
                "AMD RX 570 (4 GB)"
            ],
            "Version 11",
            70
        ),
        "Valve"
    ),
    new GameData(
        "g_9767",
        "Hollow Knight",
        "2017-02-23",
        "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        "http://hollowknight.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "Open World",
            "2D",
            "Difficult",
            "Exploration",
            "Controller",
            "controller support",
            "Cute",
            "Side Scroller",
            "Dark Fantasy",
            "Multiple Endings",
            "Metroidvania",
            "Hand-drawn",
            "Gothic",
            "Action",
            "Indie",
            "Platformer"
        ],
        "Everyone 10+",
        [
            "https://media.rawg.io/media/screenshots/6b3/6b309936c1fe07e9b7fa5e62a372790d.jpg",
            "https://media.rawg.io/media/screenshots/1a7/1a7a69db58c19d323f1dfbcc340d3f1e.jpg",
            "https://media.rawg.io/media/screenshots/723/7237d0c546b0d17a6a226f38823081d4.jpg",
            "https://media.rawg.io/media/screenshots/331/331095489397e7387681d921e8e472d4.jpg",
            "https://media.rawg.io/media/screenshots/5db/5db89e896496352c8f0a0a0bd545bd6d.jpg",
            "https://media.rawg.io/media/screenshots/843/843e06c9c5b26c309b47bd7075320dae.jpg"
        ],
        "Hollow Knight is a Metroidvania-type game developed by an indie studio named Team Cherry.Most of the game's story is told through the in-world items, tablets, and thoughts of other characters. Many plot aspects are told to the player indirectly or through the secret areas that provide a bit of lore in addition to an upgrade. At the beginning of the game, the player visits a town of Dirtmouth. A town built above the ruins of Hallownest. The players descend down into the ruins to find some answers to his questions.The game revolves mainly around the exploration of the in-game world, which requires the players to have some platforming skills. The players have to find secrets that are scattered around the level and battle their enemies. There is a certain degree of backtracking in the game as some areas are locked until the player defeats a certain boss or picks up a specific item. Each area changes as the plot advances so it may be surprising to come back in a certain area. The Protagonist uses a nail which serves as a replacement for a sword. Players can attack in four directions. The nail is upgradable.",
        new Requirement(
            [
                "64bit Windows 7 and above"
            ],
            4,
            [
                "GeForce GTX 470",
                "Radeon HD 5850"
            ],
            [
                "3Ghz Intel i5 quad core or equivalent"
            ],
            30
        ),
        "Team Cherry"
    ),
    new GameData(
        "g_41",
        "Little Nightmares",
        "2017-04-27",
        "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
        "http://www.little-nightmares.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "Third Person",
            "Horror",
            "Female Protagonist",
            "Stealth",
            "Dark",
            "Survival Horror",
            "controller support",
            "Short",
            "achievements",
            "Puzzle-Platformer",
            "2.5D",
            "Action",
            "Platformer"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/00a/00a53be1dcfba6c63ac6807637c4a45a.jpg",
            "https://media.rawg.io/media/screenshots/78a/78aa666996cf9d2708f529c18784262f.jpg",
            "https://media.rawg.io/media/screenshots/96d/96d356977066c0c2159ed7ef3f470cab.jpg",
            "https://media.rawg.io/media/screenshots/3dc/3dc7c607ff7873eaa84a8d69eac26335.jpg",
            "https://media.rawg.io/media/screenshots/a83/a83cce4aae86d8ed0b7c8d933231b9bf.jpg",
            "https://media.rawg.io/media/screenshots/0c6/0c6642fb4a74893a4c950528791fe7dd.jpg"
        ],
        "Heavily inspired by Limbo and Inside, Little Nightmares are telling a story of another lost child. Six is a starving little girl in a yellow raincoat, which is trapped in a mysterious vessel named the Maw. Players are taking control of Six’s movement, in order to help her escape the ship and dangerous inhabitants, that’s been kidnaping and preparing children to be served as a feast for the Guests. The control scheme is not including any combat moves, leaving players defenseless against any threat. Six can run, crawl, climb, push or pull, and in rare cases carry an object she can throw to stagger an enemy or solve a puzzle. The game gives players the ability to carry a lighted match at any time, inviting players to explore and search for the collectible statues. Little Nightmares have 3 DLC levels, expanding the game beyond the perspective of Six, where the Runaway Kid, a young boy, who is trying to catch up to Six and having his own adventure, going through the Maw in the extra chapters, named “The Depths”, “The Hideaway” and “The Residence.”",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "1.4GHz processor or faster"
            ],
            1,
            [
                "DirectX 8-compatible graphics card with at least 32MB of video memory"
            ],
            "9.0c",
            250
        ),
        "Bandai Namco Entertainment"
    ),
    new GameData(
        "g_10035",
        "Hitman",
        "2016-03-11",
        "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        "http://www.Hitman.com/",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "Story Rich",
            "Open World",
            "Third Person",
            "Sandbox",
            "Stealth",
            "Tactical",
            "Third-Person Shooter",
            "Nudity",
            "Crime",
            "Assassin",
            "Episodic",
            "Illuminati",
            "Heist",
            "Action",
            "Shooter",
            "Simulation"
        ],
        "Adults Only",
        [
            "https://media.rawg.io/media/screenshots/ef6/ef6c0a92d08a99d2e405cac53c597d10.jpg",
            "https://media.rawg.io/media/screenshots/fb3/fb3c23014fcb24a28fb94af0a009906c.jpg",
            "https://media.rawg.io/media/screenshots/202/202293192d1b6245c8a1e252d9df604c.jpg",
            "https://media.rawg.io/media/screenshots/278/278bd63ee564982e816ec7fe802df420.jpg",
            "https://media.rawg.io/media/screenshots/002/0021b0e5db6959989d90979abba68c8d.jpg",
            "https://media.rawg.io/media/screenshots/c8a/c8a537532ab8ce8750293a1fc41ee7f8.jpg"
        ],
        "Hitman is a six episodes game with different contracts. The action takes place as a prequel to Hitman: Agent 47 (only prologue) and episodes take place six years after Hitman: Absolution. All contracts are being ordered by a 'shadow client' and seem to be unrelated. But as you fulfil those contracts, you start to realise that all of the targets somehow are a part of a secret organisation called the Providence.While playing Agent 47, you have a large amount of free will in completing those contracts. The main target is all that matters, and you can do anything to kill this person in your style and fashion. You can disguise as a different person and infiltrate secured area to perform the kill manually or use a long-range sniper rifle to do the trick. Your surroundings help you a lot as well by listening to nearby chat or news reports. Players are given as much freedom as possible to find your professional style in the art of killing. A large amount of DLC and expanded missions can either give you gimmick-based contracts and travel to Japan, Serbia and other countries.",
        new Requirement(
            [
                "Windows 7, 64-bit"
            ],
            [
                "Intel CPU Core i7"
            ],
            8,
            [
                "Nvidia GPU GeForce GTX 660"
            ],
            "Version 11",
            10
        ),
        "Square Enix"
    ),
    new GameData(
        "g_4252",
        "Mirror's Edge",
        "2008-11-11",
        "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg",
        "http://www.mirrorsedge.com/",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "Classic",
            "Female Protagonist",
            "Short",
            "Futuristic",
            "Colorful",
            "Parkour",
            "Dystopian",
            "Stylized",
            "Time Attack",
            "european",
            "Action"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/38b/38bb5b035c811402248bbc19297d5183.jpg",
            "https://media.rawg.io/media/screenshots/4b6/4b6daf2d868abed65984f6ba308eb5f6.jpg",
            "https://media.rawg.io/media/screenshots/b07/b07d46f11697eb8ee5002d37d9ddc696.jpg",
            "https://media.rawg.io/media/screenshots/ddd/ddde2f1b028ded72097066b504db6f8b.jpg",
            "https://media.rawg.io/media/screenshots/a8b/a8b9fe7b7e04ff20405e40fb31cfe56e.jpg",
            "https://media.rawg.io/media/screenshots/741/741957fcdece6895a653bf51786838e9.jpg"
        ],
        "Refreshing look of Mirror’s Edge made this first-person action platformer recognizable even by people who have never played it before. The City of the “utopian” society is highly monitored by the totalitarian military groups. Players will take control of the female protagonist, named Faith, a specially trained Runner, master of parkour that delivers physical documents in the city, where every form of communication is watched. Her sister is framed for murder, and Faith must follow the clues to the identity of the murderer, with only lead being a note saying Icarus.Distinct visuals of the game form the bright white city, which Faith has to navigate through, jumping across rooftops, running on walls and climbing scaffolding. Color-coded elements of the environment guiding players as to where they can progress. Special attention to the camera that will bob up in down in accordance with the movement, trying to recreate the actual vision, and not a fixed video feed. Even though Mirror’s Edge has a combat system, it’s not the main focus, which makes it scarce.",
        new Requirement(
            [
                "64-bit Windows 7"
            ],
            [
                "Ryzen 5 CPU or Equivalent"
            ],
            8,
            [
                "AMD Radeon™ R9 290",
                "NVIDIA GeForce® GTX 970"
            ],
            "Version 11",
            22
        ),
        "Electronic Arts"
    ),
    new GameData(
        "g_2551",
        "Dark Souls III",
        "2016-04-11",
        "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        "",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "gog-trading-cards",
            "Great Soundtrack",
            "RPG",
            "Co-op",
            "Story Rich",
            "Open World",
            "cooperative",
            "Third Person",
            "Horror",
            "Difficult",
            "Exploration",
            "Action RPG",
            "PvP",
            "Character Customization",
            "Replay Value",
            "Dark Fantasy",
            "Lore-Rich",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/d7c/d7c05cdfb30ec07147bcd0d3985ec54c.jpg",
            "https://media.rawg.io/media/screenshots/479/479cb74c874748ca70a3a14e79a0c232.jpg",
            "https://media.rawg.io/media/screenshots/070/0703edc6d3db345a3acf19b4e6e43ebd.jpg",
            "https://media.rawg.io/media/screenshots/e4f/e4feaf5b078949102e72780091eb12af.jpg",
            "https://media.rawg.io/media/screenshots/028/02863a140eea53c1f51fd790aca753aa.jpg",
            "https://media.rawg.io/media/screenshots/8d2/8d2c0bb90867031f9265ef62c01445c5.jpg"
        ],
        "Dark Souls III is the fourth installment in the Dark Souls series, now introducing the players to the world of Lothric, a kingdom which has suffered the fate similar to its counterparts from the previous games, descending from its height to utter darkness. A new tale of dark fantasy offers to create and guide the path of game’s protagonist, the Ashen One, through the dangers of the world before him.Sharing many gameplay similarities with previous installments of the Souls series, Dark Souls III improves at what it is best. These features are the unforgiving difficulty and unique, overwhelming environments. Let alone the soundtracks, allowing players to travel through the familiar locations and encounter new obstacles alike, resulting in a great test of nerves, while also giving the fruit of resolving the secrets and echoes of the past of Dark Souls series.The new changes to the systems of multiplayer, crafting and combat will offer new and experienced players to challenge themselves on the field of battle, and to enhance the playthrough with each consecutive New Game +, where the in-game cycle never indeed ends, allowing for a multitude of different playstyles, and showing different events based on player’s actions.",
        new Requirement(
            [
                "Windows 10 - April 2018 Update (v1803)"
            ],
            [
                "Intel® Core™ i7-4770K",
                "AMD Ryzen 5 1500X"
            ],
            12,
            [
                "Nvidia GeForce GTX 1060 6GB",
                "AMD Radeon RX 480 4GB"
            ],
            150
        ),
        "Bandai Namco Entertainment"
    ),
    new GameData(
        "g_3612",
        "Hotline Miami",
        "2012-10-22",
        "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        "",
        [
            "Singleplayer",
            "Gog Achievements",
            "Atmospheric",
            "gog-trading-cards",
            "Great Soundtrack",
            "2D",
            "Partial Controller Support",
            "Gore",
            "Difficult",
            "Violent",
            "Pixel Graphics",
            "Retro",
            "controller support",
            "Fast-Paced",
            "Top-Down",
            "overlay",
            "Music",
            "Surreal",
            "Top-Down Shooter",
            "1980s",
            "Psychedelic",
            "Action",
            "Shooter",
            "Arcade",
            "Indie"
        ],
        "everyone",
        [
            "https://media.rawg.io/media/screenshots/38b/38b9bb0de0a380434b78587e132b2e21.jpg",
            "https://media.rawg.io/media/screenshots/e7a/e7a11a669aa609b9b3b0c7aeab2dc804.jpg",
            "https://media.rawg.io/media/screenshots/88b/88b907144995e57c45ee043c59dd6810.jpg",
            "https://media.rawg.io/media/screenshots/53f/53fd44fd759bc571b1445898c50b418e.jpg",
            "https://media.rawg.io/media/screenshots/ddd/dddc7151559716c7c0dddb05874496da.jpg",
            "https://media.rawg.io/media/screenshots/b2a/b2a25c20510e3111a13d56a9751cadd7.jpg"
        ],
        "Several chapters of top-down shooter action, Hotline Miami is a violent game, where the player takes control of the unnamed man, that receives orders to clear out stages from bandits and mobsters, using every weapon he can get. Over the course of the game, the player will be able to collect the masks that provide buffs and abilities. Fluid and tight combat includes various melee and ranged weapons, that can be used as intended or just thrown at the enemy. Once Jacket, dubbed so for his distinct letterman jacket by fans, arrives at the mission, players will have to clear out every floor from the enemies, using rooms and doors for cover or ambushes. As the story moves on, Jackets mental health will visibly deteriorate, and he will be shown to suffer from hallucinations, which is in tone with acid 80’s theme.",
        new Requirement(
            [
                "Windows 7 or Newer"
            ],
            [
                "2.5+ GHz Quad core"
            ],
            4,
            [
                "NVIDIA GTX 660 or better",
                "ATI 7950 or better"
            ],
            "Version 9.0c",
            7
        ),
        "Devolver Digital"
    ),
    new GameData(
        "g_3790",
        "Outlast",
        "2013-09-03",
        "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
        "http://redbarrelsgames.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "First-Person",
            "Sci-fi",
            "Horror",
            "FPS",
            "Gore",
            "Difficult",
            "Survival",
            "Stealth",
            "Dark",
            "Nudity",
            "Survival Horror",
            "controller support",
            "Captions available",
            "Walking Simulator",
            "Parkour",
            "3D Vision",
            "Action",
            "Adventure",
            "Indie"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/83f/83ff600f8e2dd8507e7961d3e9f32126.jpg",
            "https://media.rawg.io/media/screenshots/283/283c90039e31e07f99979ccb445cf7b7.jpg",
            "https://media.rawg.io/media/screenshots/03f/03f4171763bda5824da07fc087cec609.jpg",
            "https://media.rawg.io/media/screenshots/37a/37acd5ef186c8e018cbd64751b21f064.jpg",
            "https://media.rawg.io/media/screenshots/242/2426226b9eb1a7de43b8bf01ecb2c291.jpg",
            "https://media.rawg.io/media/screenshots/d06/d06d3baecb6da0ac9e53b40ade32d5f2.jpg"
        ],
        "Cinematic gameplay is used to make a stylistic point, and this psychological horror game performs just that. Outlast follows the story of investigative journalist Miles Upshur, that got the lead on the inhuman experiments, performed on the asylum patients. Outlast forces players to run away from danger, simply because there is no combat system. All Miles can do is to document what is happening inside the Mount Massive Asylum. Players do not have a flashlight, only a night vision camera, which constantly requires batteries in order to function. Miles will be pursued through the halls, rooms, yards and enclosed laboratories by distressed and aggressive inhabitants. Over the course of the game, players will have to solve puzzles by locating and collecting items and travel through the Asylum with realistic movement animation and horror sting sound effect, in order to make players sympathize with the protagonists.",
        new Requirement(
            [
                "Windows® 7 32/64-bit",
                "Vista 32/64",
                "XP"
            ],
            [
                "Intel core 2 duo 2.4GHz"
            ],
            2,
            [
                "Video Card Shader model 3.0. NVidia 7600",
                "ATI X1600 or better"
            ],
            13,
            "9.0c"
        ),
        "Red Barrels"
    ),
    new GameData(
        "g_1447",
        "Deus Ex: Mankind Divided",
        "2016-08-22",
        "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
        "http://www.deusex.com/",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Third Person",
            "Sci-fi",
            "FPS",
            "Stealth",
            "Futuristic",
            "Cyberpunk",
            "Dystopian",
            "Illuminati",
            "Conspiracy",
            "Transhumanism",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/d4c/d4ce2d053a78f5e05cea8c99be22b135.jpg",
            "https://media.rawg.io/media/screenshots/515/515438994fe978193980d9b259ad7c50.jpg",
            "https://media.rawg.io/media/screenshots/0a0/0a0fd428643d0491c96bf29840d18d02.jpg",
            "https://media.rawg.io/media/screenshots/a31/a31228f42e1e5025cb35c2ab1b21bc98.jpg",
            "https://media.rawg.io/media/screenshots/f06/f066b272534017b7f33b09cca803bd18.jpg",
            "https://media.rawg.io/media/screenshots/2ae/2ae9537fd36039072f8ce5f5da592b68.jpg"
        ],
        "Deus Ex: Mankind Divided is currently the last entry in the Deus Ex franchise. It was two years after the accident in Human Revolution, where augmented people started to act uncontrollable and aggressive. As it turns out, a rogue group called Illuminati made it look like a proof for their instability and now augmented people are living like outcasts. We follow Adam Jensen once again as he works as a double agent for Interpol and a hackers group called Juggernaut Collective to confront the Illuminati and reveal the truth.The core gameplay of Mankind Divided hasn't changed much except minor changes like no need for batteries anymore because your energy bar slowly regenerates itself back and a non-killing politic. You can beat the game without killing anyone making Mankind Divided a big morality question for the player as he walks it through.",
        new Requirement(
            [
                "Windows XP",
                "Vista",
                "Window 7"
            ],
            [
                "AMD Athlon 64 X2 5200+ Dual Core 2.60Ghz",
                "Intel Core 2 Duo E6420 Dual Core 2.13Ghz"
            ],
            3,
            [
                "NVIDIA 8800GT 512MB graphics card or better",
                "ATI Radeon HD4830 512MB graphics card or better"
            ],
            "9.0c"
        ),
        "Square Enix"
    ),
    new GameData(
        "g_10754",
        "BioShock Remastered",
        "2016-09-15",
        "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        "https://2k.com/en-US/game/bioshock-the-collection",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Horror",
            "FPS",
            "Classic",
            "Dark",
            "Dystopian",
            "Remake",
            "Steampunk",
            "Commentary available",
            "Alternate History",
            "Underwater",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/c70/c709280e11aabec614d0aafb5779114a.jpg",
            "https://media.rawg.io/media/screenshots/414/41463563e721aa62c605cd0bf8350af3.jpg",
            "https://media.rawg.io/media/screenshots/76d/76d11a76541bcfa63de3ef8fe5a5a668.jpg",
            "https://media.rawg.io/media/screenshots/25a/25ac07efdbf90a2d7e626353ebadc565.jpg",
            "https://media.rawg.io/media/screenshots/0f6/0f69943b1d81710ba2fdcac27d248ca9.jpg"
        ],
        "BioShock is set in an alternate dimension in 1960. Our main protagonist Jack is the sole survivor of a plane crash in the Atlantic Ocean. With help, he gets to the Rapture - underwater city created by Andrew Ryan that wanted to create a utopia. After arriving in the city, however, he discovers Little Sisters and Big Daddies, and it is clear to Jack that there is something not okay with the city. Being a first-person shooter, BioShock works with an active weapon and a plasmid, on the other hand, giving the player the ability to use some supernatural powers and developing unique combos with it. Many of the weapons have different types of ammunition that are effective against some specific types of enemies. Same goes for plasmids, as you need to know weapon will be effective. By retrieving EVE, you will be able to fill your resources and use plasmid once more. Although the economics of the game is more complicated as you need to gather money for refilling resources and ADAM for purchasing new skills for your plasmid. In Remastered edition, games framerate and technical issues being fully fixed making this a modern-looking game.",
        new Requirement(
            [
                "64bit Windows 7 and above"
            ],
            4,
            [
                "GeForce GTX 470",
                "Radeon HD 5850"
            ],
            [
                "3Ghz Intel i5 quad core or equivalent"
            ],
            30
        ),
        "2K Games"
    ),
    new GameData(
        "g_4161",
        "Far Cry 3",
        "2012-11-28",
        "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg",
        "http://farcrygame.com",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "RPG",
            "Co-op",
            "Story Rich",
            "Open World",
            "cooperative",
            "First-Person",
            "Partial Controller Support",
            "FPS",
            "Online Co-Op",
            "Sandbox",
            "Survival",
            "Stealth",
            "Nudity",
            "Crafting",
            "Colorful",
            "Hunting",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/98e/98e4c2a0c3e84b3d2718f8801bba0fcc.jpg",
            "https://media.rawg.io/media/screenshots/87e/87e9ca5542b3e8da43d488c9252e20fe.jpg",
            "https://media.rawg.io/media/screenshots/0a9/0a9ff8bbfa49024159bcd884ce7128c3.jpg",
            "https://media.rawg.io/media/screenshots/971/971d3582a42ede482b9d90b47b50ac32.jpg",
            "https://media.rawg.io/media/screenshots/174/174333d080f475d5718219ef6e01d3f4.jpg",
            "https://media.rawg.io/media/screenshots/03d/03dcdb4292bcc6ccc2719c88202f4965.jpg"
        ],
        "Far Cry 3 is absolute madness. Being the third instalment of the franchise, it has a unique plot. Playing as Jason Brody, you will understand what it is like, to be a Rambo. Vacation on Rook Islands with your friends and family quickly turned into a complete nightmare after Vaas Montenegro kidnapping everyone from the party. Jason manages to escape the cruel pirate lord with a little help from a native supporter called Dennis. Now Brody has to save all his friends and get out of the island.To help Jason save his friends, he will need to learn new skills. Hunting animals, crafting new weapons or different abilities in killing pirates. Skill tree has plenty to offer for the player. There are all kinds of firearms for any player, from a knife to a grenade launcher. This mechanic adds pure madness for the game process, making it very fun, fluent and full of adrenaline. Stunning views of the island, excellent surroundings and a great story make Far Cry 3 an absolute fun to play.",
        new Requirement(
            [
                "Windows 7x64",
                "Windows 8x64",
                "Windows 10x64"
            ],
            [
                "Intel Core i7-4790 (3.60GHz)"
            ],
            8,
            [
                "NVIDIA GeForce GTX 760"
            ],
            "Version 11",
            28
        ),
        "Ubisoft Entertainment"
    ),
    new GameData(
        "g_58134",
        "Marvel's Spider-Man",
        "2018-09-07",
        "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
        "https://insomniac.games/game/spider-man-ps4/",
        [
            "Singleplayer",
            "Atmospheric",
            "Open World",
            "Exploration",
            "Action-Adventure",
            "exclusive",
            "Cinematic",
            "Beat 'em up",
            "true exclusive",
            "3rd-Person Perspective",
            "Comic Book",
            "Superhero",
            "America",
            "new york",
            "Action",
            "Adventure"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/331/331ba5164c5c53a5d59aad3fe9771ac7.jpg",
            "https://media.rawg.io/media/screenshots/a15/a15b42bd8a652a3733c6ad419ebb24bd.jpg",
            "https://media.rawg.io/media/screenshots/150/150589c127b28f287f992c2bd426b443.jpg",
            "https://media.rawg.io/media/screenshots/f52/f526988f895b554dccf68767557a8518.jpg",
            "https://media.rawg.io/media/screenshots/745/74589db2dee21101d7af690976fca902.jpg",
            "https://media.rawg.io/media/screenshots/090/09063845f2efe6d0b9bc908e2652c1e1.jpeg"
        ],
        "Marvel's Spider-Man offers the player to take on the role of the most famous Marvel superhero.###PlotThe game introduces Spider-Man as an already experienced superhero. By the time the game begins, Peter has captured the infamous Kingpin as well as several other supervillains. Now, a gang that goes by the name of Demons poses a new danger to New York. Meanwhile, Peter is working for the scientist Otto Octavius, who didn't yet become Dr. Octopus, on their science project. Throughout the game, Spidey has to deal with multiple enemies, such as Norman Osbourne, Electro, Vulture, Rhino and Kingpin, among others.###GameplayThe player controls Peter Parker, aka Spider-Man, from the third person view. There are also sections of the game in which the player controls other protagonists, namely Mary Jane and Miles Morales. The game is set in a 3D environment that is modeled after New York City. The player can travel the city using web slings, running, jumping, and crawling the walls. The setting includes numerous high-rise buildings designed specifically for Spider-Man's movements.As the player progresses, he or she unlocks new suits that grant Spider-Man new abilities, such as additional attacks or enhanced Spider-Sense. The abilities are not tied to the suits, however, and the player can use the suit of his or her choice without losing the ability. The combat system is similar to that in Batman: Arkham, in that Spider-Man fights many opponents in hand-to-hand combat but avoids killing them.",
        new Requirement(
            [
                "Win 7 SP1",
                "Win 8.1"
            ],
            [
                "Intel Core i7-3770, 3.4 GHz",
                "AMD FX-8350, 4.0 GHz"
            ],
            8,
            [
                "NVIDIA GeForce GTX 760",
                "AMD Radeon HD 7950"
            ],
            "Version 11",
            55
        ),
        "Sony Computer Entertainment"
    ),
    new GameData(
        "g_4332",
        "Spec Ops: The Line",
        "2012-06-26",
        "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
        "http://www.specopstheline.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "Co-op",
            "Story Rich",
            "Third Person",
            "Horror",
            "Gog Leaderboards",
            "Third-Person Shooter",
            "stats",
            "Dark",
            "Cross-Platform Multiplayer",
            "War",
            "Post-apocalyptic",
            "Mature",
            "Military",
            "Based On A Novel",
            "Psychological",
            "Political",
            "european",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/a17/a17ff71c8774a3b70375a869b3881244.jpg",
            "https://media.rawg.io/media/screenshots/e5a/e5aaa5d242144ab80ef8264c96516dcc.jpg",
            "https://media.rawg.io/media/screenshots/f36/f36e756c36d36fe8ffe73a4b39acbebf.jpg",
            "https://media.rawg.io/media/screenshots/437/437ad0efe43adcad4284f5f48d03559f.jpg",
            "https://media.rawg.io/media/screenshots/9e2/9e26af47a676b061f288ff269e91a8f1.jpg",
            "https://media.rawg.io/media/screenshots/2d9/2d9a5dd6a25c04e49accca5358782152.jpg"
        ],
        "The Line is the tenth entry into the Spec Ops series, as well as a modernized reboot. Following the worst recorded sandstorms in Dubai, Captain Martin Walker was sent to investigate the events that took place in the city, after it was cut off from all transport and communication. So now the squad of the elite soldiers has to discover, what was meant by the last message they received from the dense wall of raging sand.Spec Ops: The Line places the attention on the squad mechanics, where players can give orders to the NPCs, accompanying the player during the game. Aside from the single-player story campaign, players can join the multiplayer matches, which may vary from the solo/team deathmatch to “King of the Hill” type matches. Cooperative missions for two players have been added shortly after the game release. The single player campaign allows players to experiment with the weapons, carrying two at a time and use the environments to their advantage, using hazardous sandstorm to clear-out the enemies.",
        new Requirement(
            [
                "64-bit Windows 7"
            ],
            [
                "Ryzen 5 CPU or Equivalent"
            ],
            8,
            [
                "AMD Radeon™ R9 290",
                "NVIDIA GeForce® GTX 970"
            ],
            "Version 11",
            22
        ),
        "2K Games"
    ),
    new GameData(
        "g_13668",
        "Amnesia: The Dark Descent",
        "2010-09-08",
        "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        "http://www.amnesiagame.com",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Horror",
            "Classic",
            "Exploration",
            "Survival",
            "Stealth",
            "Dark",
            "Moddable",
            "Survival Horror",
            "Captions available",
            "Commentary available",
            "Gothic",
            "Lovecraftian",
            "Action",
            "Adventure",
            "Indie"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/32b/32bde7545dff888358a7ce620c7b3063.jpg",
            "https://media.rawg.io/media/screenshots/f59/f597e6857aab3b1ba098d713524d1690.jpg",
            "https://media.rawg.io/media/screenshots/5fc/5fce282fa41e7d73d0e8b0c35da74391.jpg",
            "https://media.rawg.io/media/screenshots/8f8/8f88209c1fdc529c3af746c08a44ba6c.jpg",
            "https://media.rawg.io/media/screenshots/ff7/ff776252fbd6de18cfd197b57d6e6aac.jpg",
            "https://media.rawg.io/media/screenshots/42d/42d3c11b04e589565e5a9d2feae5023c.jpg"
        ],
        "Carefully constructed horror game relies on positioning, camera work, and shocking content. But Amnesia: The Dark Descent adds psychological elements to it. Players control the young man named Daniel, who wakes up in a seemingly empty castle, alone and with a massive memory loss. Through environmental storytelling, notes, audio logs and even visions, players are invited to uncover the deep-rooted secrets of the castle. Throughout the game players will be introduced to the mechanics of Sanity, representing the mental state of Daniel which can be affected by lack of light, visions and even unpleasant encounters with the monsters. When decreased, Sanity will distort the vision of the player to a different and seemingly random effect, in order to depict actual effects of severe anxiety. Most of the game challenges are completed through the item search and physics puzzles, forcing players to be resourceful and courageous.The game supports modding, and allows user-created content alongside the free DLC Justine, telling a story of a female prisoner. Given how short the DLC story is - several possible endings are available.",
        new Requirement(
            [
                "OS 64-bit Windows 7 / 64-bit Windows 8 (8.1) or Windows 10"
            ],
            [
                "Intel CPU Core i7 3770 3,4 GHz",
                "AMD CPU AMD FX-8350 4 GHz"
            ],
            8,
            [
                "Nvidia GPU GeForce GTX 770",
                "AMD GPU Radeon R9 290"
            ],
            "Version 11",
            50
        ),
        "Frictional Games"
    ),
    new GameData(
        "g_11936",
        "Half-Life 2: Deathmatch",
        "2004-11-01",
        "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg",
        "",
        [
            "Multiplayer",
            "Atmospheric",
            "Co-op",
            "cooperative",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Funny",
            "Free to Play",
            "Physics",
            "Competitive",
            "Valve Anti-Cheat enabled",
            "Includes Source SDK",
            "Action"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/8e7/8e7039ef354447c969a9fe82329ca50e.jpg",
            "https://media.rawg.io/media/screenshots/0d0/0d0ff34c7bef12783cfe7c6dda7284b2.jpg",
            "https://media.rawg.io/media/screenshots/853/85349bbb51ad92fc351b61a89b6db19b.jpg",
            "https://media.rawg.io/media/screenshots/1fc/1fcc71ae3d931406dbc4b33e3446d457.jpg",
            "https://media.rawg.io/media/screenshots/c11/c11d517937d7261e9d357709ca3c3cc0.jpg"
        ],
        "Upon the release of Half-Life 2 players were greatly disappointed in one thing, and that’s the lack of multiplayer. Granted, single-player campaign of Half-Life 2 was impressive, but weapons that have been demonstrated in it made players curious. They questioned if the experience was complete because the first Half-Life included multiplayer mode from the beginning. Valve took the criticism and published Half-Life 2: Deathmatch – multiplayer only addition, based on the main game, which was a separate product, distributed on Steam. The game includes two major modes, which are Deathmatch and Team Deathmatch. Both modes have similar rules. Players must kill as many other players as possible, to gain points. Player or team with the most points win, and points are retracted for self-killing and team killing. Players can expect fast-paced matches with instant respawns.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "2.8 GHz Quad Core CPU"
            ],
            3,
            [
                "1GB NVIDIA GTX 460 / ATI Radeon HD 6850 or better"
            ],
            "Version 9.0c",
            5
        ),
        "Valve"
    ),
    new GameData(
        "g_18080",
        "Half-Life",
        "1998-11-19",
        "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg",
        "https://www.half-life.com/en/halflife",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Funny",
            "Difficult",
            "Classic",
            "Retro",
            "Moddable",
            "Aliens",
            "Valve Anti-Cheat enabled",
            "1990's",
            "Linear",
            "Silent Protagonist",
            "vr mod",
            "Action",
            "Shooter",
            "Puzzle",
            "Platformer"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/345/3458269ae8ea44a6b8c8268d39fe36a1.jpg",
            "https://media.rawg.io/media/screenshots/3c5/3c55c835054009de798c0a9fa886ef8b.jpg",
            "https://media.rawg.io/media/screenshots/700/70005f6c84708d988a287d406cbb038c.jpg",
            "https://media.rawg.io/media/screenshots/755/755a2b42257cf09c7f37e902dfa08400.jpg",
            "https://media.rawg.io/media/screenshots/921/9213ce16eba80f51b3562a3e5d322e02.jpg",
            "https://media.rawg.io/media/screenshots/948/948de39d02c1f08c8c98fa10e69e87af.jpg"
        ],
        "Half-Life is the original game in the series. Being a revolutionary at the time, we follow the story of Gordon Freeman - a silent scientist at the facility called Black Mesa. Arriving late at work and hastily doing his routine he runs into the experiment field. However, the experiment goes completely wrong and opens a portal to a completely different dimension called Xen. The laboratory is destroyed as well as the facility itself, as unknown creatures like Vortigaunts are now everywhere in the facility. Gordon must battle his way to the surface and find a way to close the portal.One of the main features of Half-Life was story-telling through scripted sequences within the actual gameplay. Without having cutscenes, the game was able to tell the full story of the game by showing scripted deaths, dialogues, character appearance while the gameplay was moving one. By not ripping off the player from the process, the game feels much more smooth as it continues. Despite his science nature, Gordon is masterfully using his weapons and destroys any enemy at his path with rifles, grenades, shotguns and much more.",
        new Requirement(
            [
                "Windows® 7/8/8.1/10"
            ],
            [
                "2.5 GHz Processor or better"
            ],
            8,
            [
                "1GB dedicated VRAM or better"
            ],
            "Version 9.0c",
            10
        ),
        "Valve"
    ),
    new GameData(
        "g_19487",
        "Alan Wake",
        "2010-05-14",
        "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        "http://www.alanwake.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "Open World",
            "Third Person",
            "Horror",
            "Survival",
            "Third-Person Shooter",
            "Dark",
            "Survival Horror",
            "controller support",
            "Mystery",
            "Cinematic",
            "Episodic",
            "Narration",
            "Supernatural",
            "Thriller",
            "enviroment",
            "psycholoical-horror",
            "Action",
            "Shooter",
            "Adventure"
        ],
        "Teen",
        [
            "https://media.rawg.io/media/screenshots/8d7/8d7d24df1418efdaba45128e2c855f62.jpg",
            "https://media.rawg.io/media/screenshots/5ac/5ac6dd243c0ed41fb1a0b5734bff55f1.jpg",
            "https://media.rawg.io/media/screenshots/ad2/ad2e4f73ac71839178ea01ab66d8bf6c.jpg",
            "https://media.rawg.io/media/screenshots/b28/b28fd421d570931d83b27213538689df.jpg",
            "https://media.rawg.io/media/screenshots/d1e/d1e49ff4902b1bc964262ffc2e08043d.jpg",
            "https://media.rawg.io/media/screenshots/02f/02f6cb8534d5434e94559cdcd35aeef7.jpg"
        ],
        "Titular best-selling psychological thriller author was going through a writer’s block, but when he tries to take a small vacation, it seems that he is attacked and has to fight off the “darkness” that possess people and animals alike. Action-adventure with horror elements, Alan Wake is paced like a thriller show, cinematic and slow, which is in alignment with the visual style of the rural region of Washington and linear storytelling. The main enemy, encountered by the players will be Taken – possessed by darkness creatures and humans that cannot be attacked outright, because they are shrouded in black smoke, blocking the attacks. Only after dispelling the darkness with a source of light players are able to affect the enemies. When the enemies are getting too close, Alan can perform a slow-motion dodge.Two more episodes were published for the first game, called “The Signal” and “The Writer”, directly continuing the story of the main game, and completing the first season.",
        new Requirement(
            [
                "64-bit Windows 7 / Windows 8 / Vista"
            ],
            [
                "Intel Core i5-750, 2.67 GHz or AMD Phenom II X4 965, 3.4 GHz or better"
            ],
            4,
            [
                "NVIDIA® GeForce™ GTX 560",
                "AMD® Radeon™ HD 6950"
            ],
            "Version 11",
            22
        ),
        "Microsoft Studios"
    ),
    new GameData(
        "g_4386",
        "Saints Row: The Third",
        "2011-11-14",
        "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg",
        "https://saintsrow.com/",
        [
            "Singleplayer",
            "Multiplayer",
            "Great Soundtrack",
            "RPG",
            "Co-op",
            "Open World",
            "cooperative",
            "Third Person",
            "Partial Controller Support",
            "Online Co-Op",
            "Funny",
            "Sandbox",
            "Female Protagonist",
            "Comedy",
            "Third-Person Shooter",
            "Zombies",
            "Character Customization",
            "Crime",
            "Satire",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/ac0/ac00b015e9c51f52a24631c44676f81b.jpg",
            "https://media.rawg.io/media/screenshots/4e8/4e8cb89dc1ac9b3a9b68ad34f1dbc744.jpg",
            "https://media.rawg.io/media/screenshots/cc2/cc205478d728ad862c0e9da48df5db05.jpg",
            "https://media.rawg.io/media/screenshots/6a4/6a4976a45c96960e72d05362375908e4.jpg",
            "https://media.rawg.io/media/screenshots/e26/e26e0f29195d3682e6e9e9f5a74f6250.jpg",
            "https://media.rawg.io/media/screenshots/215/215fbd506ac8c1a24cb2bf9b9a4d5b92.jpg"
        ],
        "Welcome to Steelport, a city that’s been torn by the three violent gangs. And seemingly, only another violent gang can stop them. After merging with Ultor Corporation after the events of the second game, Boss and his lieutenants became a corporation of their own. And now, after a run-in with the corrupt police forces, when they’re in the hands of the Syndicate, alone and cut out from the gathered wealth and support, 3rd Street Saints have to start from the bottom. While being a third person action adventure game, Saints Row: the Third is described by developers as the game that has everything in it. While the base game is reminiscent of GTA type of games mechanically, shifting tone and frantic story create the comedic and exciting atmosphere. A long line of DLC adding to the game not only unique missions, even by the Saints Row standards, but customization items, transport, and outfits. Reviews adore the lack of serious tone and gritty realism.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "Dual Core 3.0 Ghz"
            ],
            4,
            1,
            [
                "256mb Video Memory, capable of Shader Model 2.0+"
            ],
            "9.0c or Greater"
        ),
        "THQ"
    ),
    new GameData(
        "g_3696",
        "Wolfenstein: The New Order",
        "2014-05-19",
        "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
        "http://www.wolfenstein.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Atmospheric",
            "Great Soundtrack",
            "Story Rich",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "Horror",
            "FPS",
            "Gore",
            "Gog Leaderboards",
            "Stealth",
            "War",
            "Historical",
            "Dystopian",
            "Robots",
            "World War II",
            "Alternate History",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/23a/23af906d70f57be798bbd83da986c6db.jpg",
            "https://media.rawg.io/media/screenshots/b71/b716cf4d51be00d9561df3d1588383c4.jpg",
            "https://media.rawg.io/media/screenshots/439/4395d5364559ca15ac8e1becb100daea.jpg",
            "https://media.rawg.io/media/screenshots/0de/0de321f22cd1f5a7d0fb6b471f63c2d8.jpg",
            "https://media.rawg.io/media/screenshots/900/900e962d31b5ace3fb66bfd388d352cf.jpg",
            "https://media.rawg.io/media/screenshots/a1d/a1d6bd9f3617e0787da4b0f8389fe1f0.jpg"
        ],
        "Wolfenstein: The New Order is the ninth instalment in the Wolfenstein franchise. A first-person shooter with a primary target - killings Nazis. You play as Captain William Blazkowicz in an alternative universe in 1946. You and your friend Fergus Reid are attacking the castle of General Wilhelm 'Deathshead' Strasse, who's the main villain of the game. When the attack goes completely wrong, you have to help Captain Blazkowicz in getting rid of the Nazis in the USA. The games core mechanic is the ability to use two weapons in both hands, making every single encounter unique. Also, the game has a skill tree, which gives Captain Blazkowicz new ways of killing Nazis. This game will try to push you off limits, will provide you with a significant challenge and give you a decent story with memorable characters. Adrenaline, laughing and even some dramatic moments stuns the player as he travels through the world of Wolfenstein.",
        new Requirement(
            [
                "Windows 7/8/10"
            ],
            [
                "Intel Core i7 4790 3.6 GHz",
                "AMD FX-9590 4.7 GHz or equivalent"
            ],
            8,
            [
                "NVIDIA GTX 780 3GB",
                "AMD Radeon R9 290X 4GB or equivalent"
            ],
            30
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_10533",
        "Path of Exile",
        "2013-10-23",
        "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
        "http://www.pathofexile.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "gog-trading-cards",
            "RPG",
            "Co-op",
            "cooperative",
            "Online Co-Op",
            "Fantasy",
            "Free to Play",
            "Online multiplayer",
            "Action RPG",
            "Hack and Slash",
            "Character Customization",
            "In-App Purchases",
            "Dark Fantasy",
            "mmo",
            "Dungeon Crawler",
            "MMORPG",
            "Loot",
            "PvE",
            "Inventory Management",
            "Fishing",
            "Action",
            "RPG",
            "Massively Multiplayer",
            "Indie"
        ],
        "everyone",
        [
            "https://media.rawg.io/media/screenshots/a5d/a5d0fcbe81728387c396d1643480c8b9.jpg",
            "https://media.rawg.io/media/screenshots/756/7567039877f95cf47333503925c62aa2.jpg",
            "https://media.rawg.io/media/screenshots/4db/4dbb68a20d12cc5667a88430b3e47bdf.jpg",
            "https://media.rawg.io/media/screenshots/77a/77af4e7670499a9d637e4cb8a0312d09.jpg",
            "https://media.rawg.io/media/screenshots/c95/c958615c946d6c865bf697afdf7cd995.jpg",
            "https://media.rawg.io/media/screenshots/e87/e87093d3b9d8866c9b3d759ee5435f0c.jpg"
        ],
        "Path of Exile is inspired by Diablo II and follows it basically in most of the aspects. Randomly filled pre-set of locations, heavy grind and a possibility of replaying most of the areas leaves us with only one possible outcome. Players wake up on grim shores of Wraeclast. Without any knowledge who we are or what have we done, players must start to explore an aggressive and cruel fantasy world of criminals, bandits and murderers. Discover the mystery of a long forgotten the Eternal Empire, and survive.Mechanics are pretty simple. Choose one of six different classes, gather gems for more skills to use and grind good and synergising equipment. Due to replaying, you can grind any needed equipment or resources to buy it from vendors. Infinite loop of gameplay will still be challenging. The cooperative mode allows beating the game with a party of friends up to six people at the same time.",
        new Requirement(
            [
                "OS 64-bit Windows 7 / 64-bit Windows 8 (8.1) or Windows 10"
            ],
            [
                "Intel CPU Core i7 3770 3,4 GHz",
                "AMD CPU AMD FX-8350 4 GHz"
            ],
            8,
            [
                "Nvidia GPU GeForce GTX 770",
                "AMD GPU Radeon R9 290"
            ],
            "Version 11",
            50
        ),
        "Grinding Gear Games"
    ),
    new GameData(
        "g_654",
        "Stardew Valley",
        "2016-02-25",
        "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
        "http://www.stardewvalley.net",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "RPG",
            "Co-op",
            "Open World",
            "2D",
            "Partial Controller Support",
            "Sandbox",
            "Pixel Graphics",
            "Retro",
            "role-playing",
            "Cute",
            "Crafting",
            "Building",
            "overlay",
            "Relaxing",
            "Dating Sim",
            "Shared/Split Screen Co-op",
            "cloud saves",
            "Fishing",
            "Agriculture",
            "co-op multiplayer",
            "RPG",
            "Simulation",
            "Indie"
        ],
        "Everyone 10+",
        [
            "https://media.rawg.io/media/screenshots/b72/b722b1746256f64ce5e15558d1ac7613.jpg",
            "https://media.rawg.io/media/screenshots/733/7330aea66ef9de06bb201e1d3f10ff70.jpg",
            "https://media.rawg.io/media/screenshots/0a6/0a6dfc3ef9ac018b737427405e686e23.jpg",
            "https://media.rawg.io/media/screenshots/366/3668bbdd41a682c76370fc81691150bc.jpg",
            "https://media.rawg.io/media/screenshots/e25/e25137cf398c743153d64993160487f1.jpg",
            "https://media.rawg.io/media/screenshots/b64/b6419e71b81f36ab7bc62a6614cb5b85.jpg"
        ],
        "The hero (in the beginning you can choose gender, name and appearance) - an office worker who inherited an abandoned farm. The landscape of the farm can also be selected. For example, you can decide whether there will be a river nearby for fishing.The farm area needs to be cleared, and it will take time.The hero has many different activities: plant and care for plants, raise livestock, practice crafts, extract ore, and also enter into relationships with residents of the neighbouring town to earn game money. Relationships with characters include communication, performing tasks for money, exchanging, searching for fossils and even military actions and marrying. The character is limited by the reserve of strength and health - both parameters are visible on the screen, and the game automatically puts the hero to rest if the limit of his capabilities is close. The game does not set any ultimate or primary goal, its many possibilities are designed for an unlimited time.",
        new Requirement(
            [
                "Windows 10 (64-bit)"
            ],
            [
                "Intel Core i7-4790",
                "AMD Ryzen 3 3200G"
            ],
            12,
            [
                "Nvidia GeForce GTX 1060 6GB",
                "GTX 1660 Super",
                "AMD Radeon RX 590"
            ],
            "Version 12",
            70
        ),
        "Chucklefish"
    ),
    new GameData(
        "g_4828",
        "Borderlands",
        "2009-10-20",
        "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
        "http://www.borderlandsthegame.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Gog Cloud",
            "RPG",
            "Co-op",
            "Open World",
            "cooperative",
            "First-Person",
            "Sci-fi",
            "Partial Controller Support",
            "FPS",
            "Online Co-Op",
            "Funny",
            "Gore",
            "Comedy",
            "Local Co-Op",
            "Action RPG",
            "Post-apocalyptic",
            "Dark Humor",
            "Loot",
            "Action",
            "Shooter",
            "RPG"
        ],
        "Adults Only",
        [
            "https://media.rawg.io/media/screenshots/153/153b36d06eaa5a3ff45cea30a572a169.jpg",
            "https://media.rawg.io/media/screenshots/3e8/3e8622a82c5c4fd1b7b33afa6e574fa3.jpg",
            "https://media.rawg.io/media/screenshots/64e/64e0e5c81cdff075721b8455c34c350c.jpg",
            "https://media.rawg.io/media/screenshots/669/6693c7ffd9e40cc380ce2dc1c7b2d518.jpg",
            "https://media.rawg.io/media/screenshots/47e/47eaf455aded5fe47efc9a5a35dd90a0.jpg",
            "https://media.rawg.io/media/screenshots/2cf/2cffe85c573b796a8071785a4c4f8847.jpg"
        ],
        "Pandora is a dangerous planet, so it makes sense that the strongest people will dominate it. 4 Vault Hunters arrive to find the legendary Vault found themselves at the Fyrestone, where mysterious girl only known as Angel guides them, helping to build the reputation of problem solvers. Eventually, players will be tasked to find the first piece, of the Vault Key.By being a story-driven first-person shooter with RPG elements, Borderlands allows adjusting the playstyle by finding different weapons, leveling up the character and improving some skills or attributes. Cooperative in nature, Borderlands can be played with up to 3 other players in total, where players can take the roles of 4 different characters: Brick the Berserker, Mordecai the Hunter, Lilith the Siren and Roland the Soldier. Some characters are naturally proficient in specific weapons, but players are not constricted to the skill requirements. When a specific weapon type is used often – the more proficient players are. Borderlands have several story DLCs that either shift the tone of the main game or expand on the existing storyline and characters.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "Core 2 Duo 2GHz or equivalent"
            ],
            3,
            2,
            [
                "ATI or NVidia card w/ 1024 MB RAM (Not recommended for Intel integrated graphics)"
            ],
            "9.0c"
        ),
        "2K Games"
    ),
    new GameData(
        "g_29177",
        "Detroit: Become Human",
        "2018-05-25",
        "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg",
        "https://www.quanticdream.com/en/detroit-become-human",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "Story Rich",
            "Third Person",
            "Sci-fi",
            "Exploration",
            "Female Protagonist",
            "Violent",
            "Action-Adventure",
            "exclusive",
            "Replay Value",
            "Choices Matter",
            "Futuristic",
            "Cinematic",
            "Cyberpunk",
            "Multiple Endings",
            "3rd-Person Perspective",
            "Robots",
            "Detective",
            "Drama",
            "Narration",
            "America",
            "Beautiful",
            "Emotional",
            "Dynamic Narration",
            "Remote Play on TV",
            "european",
            "futurism",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/fb7/fb7490f7764ba05e7984a970ee1918d5.jpg",
            "https://media.rawg.io/media/screenshots/586/586a30aeef1b41a80d781c742ab4fe68.jpg",
            "https://media.rawg.io/media/screenshots/5e2/5e2affea5ffc1a5c1ae8c5cc0c0c3ce1.jpg",
            "https://media.rawg.io/media/screenshots/631/6319d4cc8955831dfa50dcc4f231dc9b.jpg",
            "https://media.rawg.io/media/screenshots/9c3/9c33b6424ced85f84271a62356b74950.jpg",
            "https://media.rawg.io/media/screenshots/2d3/2d36bd87554caba0ae7462c6d17e605a.jpg"
        ],
        "In the future world, androids do almost everything that people do - they even start to think and feel. Although no one taught them this.The plot of 'Become Human' is built around three characters, each with a separate storyline, but they eventually merge into a single picture.Connor is a police investigator and android. He has a simple task - to find androids, deviated from the path given by humans. He has a special vision, it allows him to see events as they happened. And the more information he collects, the higher his chances of acting correctly.Kara is an android-housekeeper which spontaneously develops self-consciousness. As a result, Kara assumes responsibility for the fate of the little girl whom she worked as a sitter for. She, along with the girl, escapes from the house as a result of a conflict with her father, the owner of Kara.Markus is a caretaker android. He also acquired self-consciousness and came to the idea that androids need freedom. He has the ability to grant androids free will and to calculate the consequences of some actions.The story develops depending on the decisions taken by the characters. Some decisions have to be made quickly. Sometimes a player can return to the moment of making a choice and replay the situation.",
        new Requirement(
            [
                "Windows 7 Service Pack 1 64-bit"
            ],
            [
                "3GHz Quad-Core"
            ],
            8,
            [
                "2GB ATI Radeon HD 7970",
                "2GB NVIDIA GeForce GTX 770 or better"
            ],
            "Version 11",
            25
        ),
        "Sony Computer Entertainment"
    ),
    new GameData(
        "g_10142",
        "PlayerUnknown’s Battlegrounds",
        "2017-12-20",
        "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg",
        "http://www.playbattlegrounds.com",
        [
            "Multiplayer",
            "Co-op",
            "Open World",
            "cooperative",
            "First-Person",
            "FPS",
            "Online Co-Op",
            "Survival",
            "Violent",
            "Online multiplayer",
            "Tactical",
            "Third-Person Shooter",
            "PvP",
            "Battle Royale",
            "Action",
            "Shooter",
            "Massively Multiplayer"
        ],
        "everyone",
        [
            "https://media.rawg.io/media/screenshots/657/6576473e7e22b81ac5c389b6f836e73c.jpg",
            "https://media.rawg.io/media/screenshots/da8/da806bbd76f24d01e654edfc6a573b40.jpg",
            "https://media.rawg.io/media/screenshots/241/241d6a22b84dc483bcd980b428805556.jpg",
            "https://media.rawg.io/media/screenshots/0bb/0bb71c08f7d23715886253f6b2cc2657.jpg",
            "https://media.rawg.io/media/screenshots/b54/b545a7128b63a125aed16181c0237686.jpg",
            "https://media.rawg.io/media/screenshots/2fb/2fb10f556bbcaebed101f23d571e8498.jpg"
        ],
        "PLAYERUNKNOWN’S BATTLEGROUNDS is battle-royale shooter made only for the multiplayer experience. Players should do their best to become the last one alive. Matches are held on 3 main maps of a large size (Erangel, Miramar, and Sanhok). Each match has 100 participants fighting for themselves. The battle begins with players making the leap out of the plane to spread out across the map and to gather all possible equipment required for survival. Then, after a while, game intelligence randomly sets a circle shape safe zone, which gamers must reach to stay alive, and marks it on the map. Gear and resources are scattered throughout the map, so players can grab everything they need while running to the zone. Therefore, the main action comes out of the players’ collision on their ways to the circle. You can join the fight either alone or in a team (up to 4 people). Due to the customization system, lots of clothing items and weapon skins could be both bought on the marketplace and found in crates. However, in-app purchases don’t actually affect the gameplay.",
        new Requirement(
            [
                "Windows 7 Service Pack 1 64-bit"
            ],
            [
                "3GHz Quad-Core"
            ],
            8,
            [
                "2GB ATI Radeon HD 7970",
                "2GB NVIDIA GeForce GTX 770 or better"
            ],
            "Version 11",
            25
        ),
        "Bluehole"
    ),
    new GameData(
        "g_9721",
        "Garry's Mod",
        "2004-12-24",
        "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
        "https://gmod.facepunch.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Gog Cloud",
            "gog-trading-cards",
            "Co-op",
            "First-Person",
            "FPS",
            "Online Co-Op",
            "Funny",
            "Sandbox",
            "Comedy",
            "Gog Workshop",
            "Cross-Platform Multiplayer",
            "Includes level editor",
            "Moddable",
            "Captions available",
            "Physics",
            "Building",
            "Valve Anti-Cheat enabled",
            "vr mod",
            "Mod",
            "Animation & Modeling",
            "Action",
            "Adventure",
            "Simulation",
            "Casual",
            "Indie"
        ],
        "Rating Pending",
        [
            "https://media.rawg.io/media/screenshots/cbf/cbf0e5c6fa2b8a8c653074b9258884df.jpg",
            "https://media.rawg.io/media/screenshots/01b/01b5cb2ad3f6fa69b70790094bfd3372.jpg",
            "https://media.rawg.io/media/screenshots/b31/b3141dbd80cd27a1d7b335e3b5956f89.jpg",
            "https://media.rawg.io/media/screenshots/40b/40bcfff9760f368d158e92d05f4a0d9b.jpg",
            "https://media.rawg.io/media/screenshots/6eb/6ebc3896184e94ebe617d2cb224eee2a.jpg",
            "https://media.rawg.io/media/screenshots/e68/e6800252d7fc63fcb794af70ec28c8fc.jpg"
        ],
        "Garry's Mod or simply GMod is a source-engine based modification that now works as a standalone game. With no plot or exact gameplay at all, anyone can create his own game mode to play for fun. You can find anything you're into. Trouble In Terrorist Town, Prop Hunt, Hunger Games, Franchise-based modes such as Star Wars or Lord of the Rings - anything.Basically, GMod stands for God Mode in video games, because you can play with any asset of the source engine. Try out physics, characters, maps, weaponry - anything. Based on that, Garry's Mod gives players quite a variety of mods to spend their time. It doesn't sound so earnestly. You will probably find something that will provide you with quite a good amount of fun. Servers are specifically sorted in game modes so you'll never play a different mode while playing exact one what you wanted. At the end of the day, this game is about receiving as much fun from what is happening around you as possible.",
        new Requirement(
            [
                "Windows 10 64-bit"
            ],
            [
                "Intel Core i7-3770K",
                "AMD FX 8350 Wraith"
            ],
            16,
            [
                "AMD Radeon RX 480",
                "NVIDIA GTX 970"
            ],
            55
        ),
        "Valve"
    ),
    new GameData(
        "g_39",
        "Prey",
        "2017-05-05",
        "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        "https://prey.bethesda.net",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Sci-fi",
            "Horror",
            "FPS",
            "Exploration",
            "Violent",
            "Stealth",
            "Space",
            "Survival Horror",
            "Futuristic",
            "Aliens",
            "Heist",
            "Immersive Sim",
            "Action",
            "Shooter",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/9c6/9c673f6c2437854b3112868e986aba8c.jpg",
            "https://media.rawg.io/media/screenshots/3d7/3d7b9ac75113f6fb3e3ceffbfae03483.jpg",
            "https://media.rawg.io/media/screenshots/c0c/c0ca4b435c59c3af12b270d03ca565a5.jpg",
            "https://media.rawg.io/media/screenshots/efa/efae873b6df0b9371b5bbf5f7dfe3ee7.jpg",
            "https://media.rawg.io/media/screenshots/4ba/4baf33e8e47e6750b85942f49d21c427.jpg",
            "https://media.rawg.io/media/screenshots/b3e/b3e3f695d8d55acdc23904082edd42d6.jpg"
        ],
        "Prey (2017) is a single-player sci-fi first-person shooter developed by Arkane Studios Austin and published by Bethesda Softworks. While it is technically a reboot of the 2006 game of the same name developed by Human Head Studios, of which the sequel suffered a fall into development hell before the license was sold to Bethesda Softworks, there is no relation between the stories and universes of the two games.The game is set in the near future of an alternate reality. You find yourself stranded on the Talos I space station, invaded by hostile aliens referred to as the Typhon. To survive, you must explore Talos I in search of weapons and resources to fight off the invaders. Along the way, you'll use neural modification devices to learn skills and psychic abilites.Prey's gameplay loop takes heavy inspiration from System Shock and Bioshock. The game received critical acclaim for its gameplay and its atmosphere. Prey received one paid DLC extension called Mooncrash which introduced a roguelite mode and a free update called Typhon Hunter which introduced a multiplayer mode inspired by classic prop hunt.",
        new Requirement(
            [
                "Windows 7/8/10"
            ],
            [
                "Intel Core i7 4790 3.6 GHz",
                "AMD FX-9590 4.7 GHz or equivalent"
            ],
            8,
            [
                "NVIDIA GTX 780 3GB",
                "AMD Radeon R9 290X 4GB or equivalent"
            ],
            30
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_17540",
        "Injustice: Gods Among Us Ultimate Edition",
        "2013-11-12",
        "https://media.rawg.io/media/games/234/23410661770ae13eac11066980834367.jpg",
        "http://www.injustice.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "2D",
            "Gore",
            "Gog Leaderboards",
            "Controller",
            "Local Multiplayer",
            "Competitive",
            "Beat 'em up",
            "3D Vision",
            "2.5D",
            "Comic Book",
            "Superhero",
            "2D Fighter",
            "Batman",
            "Action",
            "Arcade",
            "Fighting"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/d5a/d5ae88f0e4e6d5558550cc76967f702d.jpg",
            "https://media.rawg.io/media/screenshots/cab/cab011ad99d98ce321f8444cd2710686.jpg",
            "https://media.rawg.io/media/screenshots/46c/46cc7cfdc64f5338135f2a72da87ac88.jpg",
            "https://media.rawg.io/media/screenshots/032/03288e337bc2c89830370cc4d271f28f.jpg",
            "https://media.rawg.io/media/screenshots/067/06750098636883e86b7fa555be21b748.jpg",
            "https://media.rawg.io/media/screenshots/92c/92cbd636e0181822d5e6b1f1a5ce8205.jpg"
        ],
        "Injustice: Gods Among Us Ultimate Edition is an extended version of fighting game Injustice: Gods Among Us based on the imaginary universe of DC Comics. The gameplay is made in a traditional fighting 2.5D manner: battles occur in a 2D perspective but all the characters and objects are 3D. All fights are held in one-on-one form, where each participant has two life scales. Game mechanics are simple: three different types of hits and a special ability are available for each character. Some on-map objects are interactive and can be also used in attack. The main action takes place in a universe, which is parallel to a DC’s one, so occasionally clashes may look unusual. According to the storyline, Superman established dictatorship on Earth, and several Justice League members started resisting him. In the game, players are able to take control of favourite DC heroes and to participate in a war between Superman’s domination and the rebellion led by Batman. The Ultimate Edition offers players 6 new characters, over 30 new skins, and 60 new S.T.A.R. Labs missions. Injustice: Gods Among Us is followed by the sequel Injustice 2.",
        new Requirement(
            [
                "Windows 7x64",
                "Windows 8x64",
                "Windows 10x64"
            ],
            [
                "Intel Core i7-4790 (3.60GHz)"
            ],
            8,
            [
                "NVIDIA GeForce GTX 760"
            ],
            "Version 11",
            28
        ),
        "Warner Bros. Interactive"
    ),
    new GameData(
        "g_4514",
        "L.A. Noire",
        "2011-05-17",
        "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg",
        "https://www.rockstargames.com/lanoire/",
        [
            "Singleplayer",
            "Atmospheric",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Partial Controller Support",
            "Third-Person Shooter",
            "Nudity",
            "Mystery",
            "Mature",
            "Cinematic",
            "Crime",
            "3D Vision",
            "Detective",
            "Noir",
            "Investigation",
            "Action",
            "Adventure"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/c08/c0823f02236f076a7a36ff5f3571558e.jpg",
            "https://media.rawg.io/media/screenshots/dee/dee71bfc43834357e15e1d35d2c507c8.jpg",
            "https://media.rawg.io/media/screenshots/69f/69fdec37afd586f274316a69e92303f1.jpg",
            "https://media.rawg.io/media/screenshots/4c0/4c0f154b51525e93ce8f2f18197c82ee.jpg",
            "https://media.rawg.io/media/screenshots/87b/87bf0f4ababb76a87b7ac82a282e44c6.jpg",
            "https://media.rawg.io/media/screenshots/5e0/5e05bd7135d8e8d8dfb92eb7e3d57181.jpg"
        ],
        "After the end of World War 2 long needed peace has been reached and should be protected, so Cole Phelps, a decorated war veteran, returns to Los Angeles, California to his wife and joining the LAPD. Neo-noir action-adventure, L.A. Noire allows players to solve crime cases through collecting clues, collecting witness statements and interrogation. Highly detailed facial animation allows players to detect the exact emotion witness or suspect is expressing, and it can become a leading hint in a case. Slow and meticulous crime solving is broke up by fast-paced action scenes including car chases, gunfights and hand to hand combat.After every case player’s performance will be graded by 1-5 star rating, depending on how they acted during interrogations and how well they searched for the clues. Aside from the main story cases, detective Cole can be involved into optional side-investigations, known as Street Crimes.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "1.4GHz processor or faster"
            ],
            1,
            [
                "DirectX 8-compatible graphics card with at least 32MB of video memory"
            ],
            "9.0c",
            250
        ),
        "Rockstar Games"
    ),
    new GameData(
        "g_5563",
        "Fallout: New Vegas",
        "2010-10-19",
        "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
        "http://fallout.bethsoft.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Atmospheric",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Third Person",
            "Sci-fi",
            "Partial Controller Support",
            "FPS",
            "Gog Leaderboards",
            "Exploration",
            "Sandbox",
            "Survival",
            "Action RPG",
            "Moddable",
            "Post-apocalyptic",
            "Character Customization",
            "Western",
            "Action",
            "Shooter",
            "Adventure",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/5b3/5b39206a3b241688fbd69467d75151b8.jpg",
            "https://media.rawg.io/media/screenshots/286/2861a20b67d61263b5b790cb1ab5e330.jpg",
            "https://media.rawg.io/media/screenshots/7c5/7c5083ee282a2ea3d6248361592cf8af.jpg",
            "https://media.rawg.io/media/screenshots/704/704c2186d4d1e73ca30e4a3f904f7a6c.jpg",
            "https://media.rawg.io/media/screenshots/502/502aacc7e1e71435c29e4dae7ce6c1f3.jpg",
            "https://media.rawg.io/media/screenshots/afe/afecd18ebd303b5cc450777f6beb1dd5.jpg"
        ],
        "Fallout: New Vegas is the second instalment after the reboot of the Fallout series and a fourth instalment in the franchise itself. Being a spin-off and developed by a different studio, Obsidian Entertainment, Fallout: New Vegas follows the Courier as he's ambushed by a gang lead by Benny, stealing a Platinum Chip and heavily wounded, practically left for dead. As he wakes up, he minds himself in the company of Doc Mitchell who saved our protagonist and patches him up. This section of the game is given for customising your characters, picking traits and the look of the main hero before embarking on his journey to retrieve Platinum Chip.New Vegas has very similar gameplay to Fallout 3 with a few improvements, such as iron sights for most of the guns, new animations for VATS kills, new perk Survivor, which allowed you to have more benefits from drinks and food you could craft and gambling in the casinos. Expanded crafting system, weapon modification system force player to scavenge for resources. Reputation system was reintroduced in New Vegas as old reputation system from Fallout 2, with Karma making a serious impact on the game.",
        new Requirement(
            [
                "Windows® Vista SP2/ Windows® 7"
            ],
            [
                "1.8 GHz Quad Core CPU"
            ],
            4,
            [
                "512 MB ATI 4800 series or better, 512 MB nVidia 9800 series or better"
            ],
            "DirectX® version 11",
            8
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_3144",
        "Super Meat Boy",
        "2010-10-20",
        "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg",
        "http://www.supermeatboy.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "gog-trading-cards",
            "Great Soundtrack",
            "2D",
            "Funny",
            "Gore",
            "Gog Leaderboards",
            "Difficult",
            "Comedy",
            "Pixel Graphics",
            "Controller",
            "Retro",
            "Replay Value",
            "Side Scroller",
            "Fast-Paced",
            "Level Editor",
            "Time Attack",
            "Precision Platformer",
            "Indie",
            "Platformer"
        ],
        "everyone",
        [
            "https://media.rawg.io/media/screenshots/b1e/b1e6c4d530035326da66fb85ae57519b.jpg",
            "https://media.rawg.io/media/screenshots/09f/09f743bc5acc26aba844b3a092cdcddf.jpg",
            "https://media.rawg.io/media/screenshots/995/9951726156ed69933ec1eff9a65c0e60.jpg",
            "https://media.rawg.io/media/screenshots/db4/db4747c3913bd81e3e6754bb51a34838.jpg",
            "https://media.rawg.io/media/screenshots/e1d/e1d4006f82564f0d654f2959042a3acc.jpg",
            "https://media.rawg.io/media/screenshots/14c/14c8b551343374231fa07987e5a2d9e3.jpg"
        ],
        "Super Meat Boy is a fast-paced 2D platform game that rewards mechanical perfection and accuracy of controls. Meat Boy has to save Bandage Girl from Doctor Fetus, by completing the platforming challenges. The game has 5 main worlds, each consisting of 20 light levels, 20 dark and harder versions of those levels and a boss fight. Meat Boy has only one life and cannot take any damage, but there is no limit on attempts, so players can try and fail the stage until they get it right or collect special bandages. Unique replay system will show the player every try they made at the same time right after they completed the level.Super Meat boy has multiple characters, some of them are a different skin for Meat Boy and in-game adaptations of other indie-game protagonists, that can be unlocked by completing their special challenge levels, hidden somewhere in the campaign; or by collecting set amount of bandages. Players will be able to choose any unlocked character for any level from the main menu. The game gives players access to the community created maps, but even without it – Super Meat Boy offers more than 300 levels.",
        new Requirement(
            [
                "Windows 7"
            ],
            [
                "Any Quad Core or 3.0+ GHz Dual Core CPU"
            ],
            2,
            [
                "GeForce GTX 260 and above"
            ],
            "DirectX 10 or higher"
        ),
        "Microsoft Studios"
    ),
    new GameData(
        "g_362",
        "For Honor",
        "2017-02-13",
        "https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg",
        "http://forhonorgame.com/",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "gog-trading-cards",
            "RPG",
            "Co-op",
            "Story Rich",
            "cooperative",
            "Third Person",
            "Partial Controller Support",
            "Online Co-Op",
            "Fantasy",
            "Gore",
            "Online multiplayer",
            "PvP",
            "Hack and Slash",
            "War",
            "Realistic",
            "Medieval",
            "MOBA",
            "Swordplay",
            "Action",
            "Massively Multiplayer"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/94a/94a1434ca101d9e0de78752df2f9c164.jpg",
            "https://media.rawg.io/media/screenshots/238/2388ad0c8587adfe37c0a95eec893b67.jpg",
            "https://media.rawg.io/media/screenshots/46f/46f57d204df589000ae2ebb6d567f3cb.jpg",
            "https://media.rawg.io/media/screenshots/150/1500590c3239c6732ce00c42cac105ca.jpg",
            "https://media.rawg.io/media/screenshots/60c/60c7557e75c1cecdb153818ff01890fa.jpg",
            "https://media.rawg.io/media/screenshots/135/1350c3eef2f346d70717f462469a3178.jpg"
        ],
        "For Honor is an action game developed by Ubisoft Montreal. The game mixes the element of fighting and hacks and slashes with a heavy focus on multiplayer. ###Plot and setting The game takes place in the medieval fantasy world and follows the conflict between three factions: the Iron Legion, the Chosen, and the Warborn. Each fraction represents a specific medieval culture: knights, samurai, and Vikings respectively. ###Gameplay The gameplay incorporates elements of the hack-and-slash and fighting game. The player can choose from more than 12 different characters from each of the fractions. The all have their unique moves, weapons, characteristics, abilities, and executions. The fighting system is based on the duel between players. It incorporates the variety of moves such as attacks from different angles, blocks, dodges, stuns, counterattacks, unblockable attacks, and faints. Each character has its progression system which allows one to gain new perks, upgrade weapons, armor as well as the increase in rank that affects matchmaking process. There are six multiplayer modes: they primarily differ from each other by the number of the players involved in the conflict. The multiplayer modes do not feature any PvE battles — the leftovers are team elimination, flag capture and one on one battles.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "1.4GHz processor or faster"
            ],
            1,
            [
                "DirectX 8-compatible graphics card with at least 32MB of video memory"
            ],
            "9.0c",
            250
        ),
        "Ubisoft Entertainment"
    ),
    new GameData(
        "g_13633",
        "Sid Meier's Civilization V",
        "2010-09-21",
        "https://media.rawg.io/media/games/55e/55ee6432ac2bf224610fa17e4c652107.jpg",
        "http://www.civilization.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Co-op",
            "cooperative",
            "Classic",
            "Tactical",
            "Moddable",
            "Turn-Based",
            "Replay Value",
            "Historical",
            "Turn-Based Strategy",
            "Economy",
            "Touch-Friendly",
            "Grand Strategy",
            "Education",
            "4X",
            "Hex Grid",
            "Diplomacy",
            "Strategy"
        ],
        "Everyone 10+",
        [
            "https://media.rawg.io/media/screenshots/880/880379d04f089c128f51be511c882de1.jpg",
            "https://media.rawg.io/media/screenshots/739/73928ce08a6a9a9480faf65bedf8611c.jpg",
            "https://media.rawg.io/media/screenshots/ccc/cccc59229370b01ba6f5bad75702c713.jpg",
            "https://media.rawg.io/media/screenshots/03e/03e69844696cb587c06fc058020a7255.jpg",
            "https://media.rawg.io/media/screenshots/608/6087a2a1e66102d146021cf10fcb69bd.jpg",
            "https://media.rawg.io/media/screenshots/a2a/a2a207282454944eba73cbff6c82526e.jpg"
        ],
        "Real-time strategy genre has always been about domination over your opponent, and Civilization in general expanded on the concept. Civilization 5 allows players to pick one of the 43 civilizations available in, including DLCs and the expansions. After that players in single player or multiplayer games will place their first cities, which will act as capital, and begin the race. In order to win, players will have to meet one of the following conditions:- defeating every other existing nation through combat to get Domination Victory;- building and launching a spaceship to get Science victory; - completing the Utopia project by filling out 5 trees of social policies, to get Social Victory;- winning a vote after establishing the  United Nations, to get the Diplomatic victory;- getting the highest score at the end of the time period, if no other win condition was reached, to get Time Victory.Every civilization is represented by one of the most influential historical figures and voiced in the language of that nation. Easy to pick up game mechanics of research, foraging, and building, allow the player to immerse themselves into the game atmosphere of continuous development.",
        new Requirement(
            [
                "Windows 7 Service Pack 1 64-bit"
            ],
            [
                "3GHz Quad-Core"
            ],
            8,
            [
                "2GB ATI Radeon HD 7970",
                "2GB NVIDIA GeForce GTX 770 or better"
            ],
            "Version 11",
            25
        ),
        "2K Games"
    ),
    new GameData(
        "g_12447",
        "The Elder Scrolls V: Skyrim Special Edition",
        "2016-10-27",
        "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg",
        "",
        [
            "Singleplayer",
            "Gog Achievements",
            "Atmospheric",
            "Gog Cloud",
            "Great Soundtrack",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Third Person",
            "Partial Controller Support",
            "Fantasy",
            "Classic",
            "Female Protagonist",
            "Stealth",
            "Moddable",
            "Character Customization",
            "Walking Simulator",
            "Magic",
            "Remake",
            "Dragons",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/e38/e387d8f781c00520eccb5934b95f1720.jpg",
            "https://media.rawg.io/media/screenshots/d48/d48ce46dd0dfd32c374c4e8c09dd370c.jpg",
            "https://media.rawg.io/media/screenshots/8d4/8d4ad7d58d614d82e3933f69095e6b23.jpg",
            "https://media.rawg.io/media/screenshots/dd3/dd340c1c2c146f41d48f505a58dada09.jpg",
            "https://media.rawg.io/media/screenshots/ae1/ae167fabd67a73cac9ef8c99690572bf.jpg",
            "https://media.rawg.io/media/screenshots/e8b/e8b57630f5924da6633a07777f1a8c7a.jpg"
        ],
        "The Elder Scrolls V: Skyrim Special Edition is the 2016 reinstallment of the open world fantasy RPG, developed by Bethesda Game Studios. Following the original release of 2011, Special Edition focuses on reshaping every sword and ax, polishing every stone in the high castles and the suburbs of the low, overall bringing a renewed experience to its fans and newcomer players.After 5 years of the original’s glory, this collection of all the content, available with the game itself, offers to once again set foot on the snowy mountains of the Skyrim province of Tamriel. The magnificent open world, full of breathtaking environments and landscapes, welcomes all its players to embark on another journey. Explore the even more beautiful flora of Skyrim, fight the most dangerous fauna, and many more.The Elder Scrolls V: Skyrim Special Edition now includes full support of community-made and developer-approved mods, allowing for even more exploration and experiments with the in-game contents. Continually expanding, the database of various new quests, characters, and locations not disappointing any player, while some modifications try to focus on enhancing the vanilla experience to the maximum.",
        new Requirement(
            [
                "Windows 7"
            ],
            [
                "Quad-core Intel or AMD CPU"
            ],
            4,
            [
                "Nvidia GeForce GTX 260 or higher",
                "ATI Radeon 4890 or higher"
            ],
            "9.0c"
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_10243",
        "Company of Heroes 2",
        "2013-06-25",
        "https://media.rawg.io/media/games/0bd/0bd5646a3d8ee0ac3314bced91ea306d.jpg",
        "http://www.companyofheroes.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Multiplayer",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Co-op",
            "cooperative",
            "Online Co-Op",
            "Tactical",
            "stats",
            "Gog Workshop",
            "War",
            "Historical",
            "RTS",
            "Military",
            "Base Building",
            "World War II",
            "Real-Time with Pause",
            "Real-Time",
            "Tanks",
            "Strategy",
            "Simulation"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/260/260204d8d634ec55fdcc4050523d124f.jpg",
            "https://media.rawg.io/media/screenshots/79d/79d118350fab8531cee4ab7df5ea267a.jpg",
            "https://media.rawg.io/media/screenshots/f5f/f5ffdf62a5e5b78268e9e11d2ea64144.jpg",
            "https://media.rawg.io/media/screenshots/7b0/7b071155a6b6482b063096f626643b63.jpg",
            "https://media.rawg.io/media/screenshots/850/85019f1470023bb50671c8a1a4b6d7a7.jpg",
            "https://media.rawg.io/media/screenshots/3b2/3b2793e4c18ff62f07dd5747b38f07fb.jpg"
        ],
        "Company of Heroes 2 is the second installment in the series of real-time strategy games, following its predecessor’s legacy as one of the most complex and realistic WWII simulators. New features and game engine improvements will provide the most intense experience of the most significant battles of both the Western and Eastern fronts of the war.After seven years since the first game’s release, Company of Heroes 2 provides the players with new battle mechanics, even more, micromanagement and new game modes, as well as an expanded single-player campaign, taking place in the Eastern front. The key features of the first game, being the dynamic environments and cover system, have also been overhauled, with additions as a line of sight for every troop. The warfare itself has also been changed, removing the mechanics of doctrines and adding traits to various generals on the field.The game also includes additional content, which adds two new Allied factions, the US expeditionary forces and the Royal Army, and new campaigns for both factions, while also improving performance and adding new features to the game, such as tech trees, various tactics and many more.",
        new Requirement(
            [
                "Windows® Vista SP2/ Windows® 7"
            ],
            [
                "1.8 GHz Quad Core CPU"
            ],
            4,
            [
                "512 MB ATI 4800 series or better, 512 MB nVidia 9800 series or better"
            ],
            "DirectX® version 11",
            8
        ),
        "SEGA"
    ),
    new GameData(
        "g_4248",
        "Dishonored",
        "2012-09-25",
        "https://media.rawg.io/media/games/4e6/4e6e8e7f50c237d76f38f3c885dae3d2.jpg",
        "http://www.dishonored.com",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "RPG",
            "Story Rich",
            "Open World",
            "First-Person",
            "Sci-fi",
            "FPS",
            "Fantasy",
            "Stealth",
            "Dark",
            "Replay Value",
            "Magic",
            "Dystopian",
            "Multiple Endings",
            "Steampunk",
            "Assassin",
            "Action",
            "Adventure",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/683/68302a7d6425b77f73b550d74d12c149.jpg",
            "https://media.rawg.io/media/screenshots/3be/3be77e78cc70a27dd8afe5228a4a4603.jpg",
            "https://media.rawg.io/media/screenshots/ed4/ed45a4d528eb22d30048654c43ba4854.jpg",
            "https://media.rawg.io/media/screenshots/903/903a31cf943126bf46c5db2be9bc8116.jpg",
            "https://media.rawg.io/media/screenshots/9cb/9cb61afd240b902b943c850ddf5c60c9.jpg",
            "https://media.rawg.io/media/screenshots/ad8/ad8a34687cf34713bc59580d568248e8.jpg"
        ],
        "Dishonored is the game about stealth. Or action and killing people. It is you who will decide what to do with your enemies. You play as Corvo Attano, Empress' bodyguard, a masterful assassin and a combat specialist. All of a sudden, a group of assassins kill the Empress and kidnaps her daughter Emily. Being accused of murder and waiting for execution in a cell, Corvo still manages to escape with the help of the Loyalists and their leader Admiral Havelock. Now it is your duty to return the Empress daughter and restore your name. The main focus of the game is to give the player a choice. You can spare the lives of your enemies by knocking them out or making others do the job for you or brutally murder everyone in the city. Gadgets are given by Piero Joplin, Loyalists engineer and by the Outsider, who gives Corvo magical abilities. The game reacts to your choices - grim atmosphere by itself can be turned even darker by killing people or slightly lighter by not doing so. It is only a player's choice what to do with his abilities. Basing on these actions the game will give you with two different endings of the story.",
        new Requirement(
            [
                "Windows 7"
            ],
            [
                "Any Quad Core or 3.0+ GHz Dual Core CPU"
            ],
            2,
            [
                "GeForce GTX 260 and above"
            ],
            "DirectX 10 or higher"
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_3841",
        "Assassin’s Creed IV: Black Flag",
        "2013-10-29",
        "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
        "http://www.assassinscreed.com",
        [
            "Singleplayer",
            "Multiplayer",
            "Atmospheric",
            "RPG",
            "Story Rich",
            "Open World",
            "Third Person",
            "Exploration",
            "Sandbox",
            "Stealth",
            "Action RPG",
            "Action-Adventure",
            "Mature",
            "Historical",
            "Parkour",
            "Assassin",
            "Pirates",
            "Naval",
            "Action"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/46d/46de97777c05efb26597b215735dcd84.jpg",
            "https://media.rawg.io/media/screenshots/162/162503bb903edd7cfddf2a49ecdf5b7d.jpg",
            "https://media.rawg.io/media/screenshots/9ad/9ad8aa17d3f2be9545273f895e481280.jpg",
            "https://media.rawg.io/media/screenshots/b02/b02b168d04889304aac23e47f5314721.jpg",
            "https://media.rawg.io/media/screenshots/ad8/ad8439bc9ed7d2f88deb836c9cff23d2.jpg",
            "https://media.rawg.io/media/screenshots/398/398abeb965880c1c3310a6a4ad9c71b8.jpg"
        ],
        "Assasin's Creed IV: Black Flag is a pirate game. Being the fourth 'numbered' instalment in the series, the story follows a new protagonist, Edward Kenway, who tries to build his Pirate Republic. Help legendary pirates like 'Blackbeard', Charles Vane and other well-known pirates establish their empire while fighting the mystery of the Observatory - something very valuable for the Templars. Also, you will have to continue your infiltration in Abstergo and discover some new details about itself.Although being in the Assasin's Creed series, the game provides you with some new mechanics. Giving the player full control of the ship, you will have to cross the open-world sea and fight for your piracy. Ships will be sinking, destroyed and massacred. If you prefer exploring, a whole new underwater world is ready for you with its beauty and danger lurking in the streams of Carribeans. Experience the pirate life at its best. (?) (needs a better ending)",
        new Requirement(
            [
                "Win 7 SP1",
                "Win 8.1"
            ],
            [
                "Intel Core i7-3770, 3.4 GHz",
                "AMD FX-8350, 4.0 GHz"
            ],
            8,
            [
                "NVIDIA GeForce GTX 760",
                "AMD Radeon HD 7950"
            ],
            "Version 11",
            55
        ),
        "Ubisoft Entertainment"
    ),
    new GameData(
        "g_864",
        "Dishonored 2",
        "2016-11-10",
        "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        "https://www.dishonored.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Great Soundtrack",
            "Story Rich",
            "Open World",
            "First-Person",
            "Gore",
            "Exploration",
            "Female Protagonist",
            "Stealth",
            "Parkour",
            "Magic",
            "Dystopian",
            "Steampunk",
            "Assassin",
            "Illuminati",
            "Heist",
            "Supernatural",
            "Immersive Sim",
            "Action",
            "RPG"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/236/2365eaea84505996adbe4aca614d0c4f.jpg",
            "https://media.rawg.io/media/screenshots/85f/85f8c2dc0586003913c5924add0ca0b7.jpg",
            "https://media.rawg.io/media/screenshots/597/59749ba429e176f45abee6ced14de963.jpg",
            "https://media.rawg.io/media/screenshots/ce3/ce3f8d7fc8b1973ea41efa8f69ee8074.jpg",
            "https://media.rawg.io/media/screenshots/cad/cad513106134c55e71ec4a62a217287f.jpg",
            "https://media.rawg.io/media/screenshots/d94/d9402537f42b3a273468b72e662d13df.jpg"
        ],
        "Dishonored 2 is an action-adventure game based on players’ stealth skill. The game is played from the first-person perspective and includes several RPG elements. It is a sequel to the original Dishonored game, so the story takes place in Dunwall and mostly in Karnaca 12 years after the ending of the previous part. To start the action, the player has to decide whether he wants to assume the role of deposed Empress Emily or the role of her father and the Royal Protector Corvo, the protagonist of the first Dishonored game. Both characters have their own bunch of special abilities so the choice will influence the way of returning to the throne. In the course of the game, both equipment and abilities can be upgraded. The storyline is divided into several main missions and includes various side quests that let protagonists get acquainted with the useful new skills. Although the gameplay is initially focused on the stealth, actually there is a multitude of ways to complete all the missions and to return the lost honor.",
        new Requirement(
            [
                "Windows 7/8.1/10 (64-bit Version)"
            ],
            [
                "Intel i5-2400/AMD FX-8320"
            ],
            8,
            [
                "NVIDIA GTX 780 3GB",
                "AMD R9 290 4GB"
            ],
            12
        ),
        "Bethesda Softworks"
    ),
    new GameData(
        "g_4570",
        "Dead Space (2008)",
        "2008-10-13",
        "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
        "http://deadspace.ea.com/agegate.aspx?returnURL=/Default.aspx",
        [
            "Singleplayer",
            "Full controller support",
            "Atmospheric",
            "RPG",
            "Story Rich",
            "Third Person",
            "Sci-fi",
            "Horror",
            "Gore",
            "Survival",
            "Third-Person Shooter",
            "Dark",
            "Space",
            "Zombies",
            "Survival Horror",
            "controller support",
            "Futuristic",
            "Aliens",
            "Silent Protagonist",
            "Action",
            "Shooter"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/83d/83db52cdc2646839d7f49bf21209e68c.jpg",
            "https://media.rawg.io/media/screenshots/74e/74e4acf3288e4aee46bdbc8b3c0981a5.jpg",
            "https://media.rawg.io/media/screenshots/4d2/4d2b8d60ae5b9e241a6ab65934709628.jpg",
            "https://media.rawg.io/media/screenshots/80d/80dd9ee5711fcdaf374d07cf2a40a014.jpg",
            "https://media.rawg.io/media/screenshots/03e/03e73f7b9da0c3bbfe1080434dc8db84.jpg",
            "https://media.rawg.io/media/screenshots/552/55293d36d0de5c9adbd02b98031ca5d0.jpg"
        ],
        "Dead Space is a third-person shooter with horror elements. Playing as Isaac Clarke, the systems engineer, players will be isolated on the spaceship USG Ishimura after the crew was slaughtered by mindless Necromorphs after the failed investigation of the distress signal. Now Isaac not only has to escape but uncover the dark secrets of Ishimura, while looking for the clues about the whereabouts of his girlfriend Nicole.Dead Space accents the survival aspect of the game, by keeping minimal UI and keeping HUD on the armor, making sure that the players can see the corners of the screen. Only weapons Isaac has access to are his engineer tools, which can all be upgraded with the limited supplies. Dead Space introduces a new variant of zombies called Necromorphs, that are highly mobile and instead of aiming for the head, players will be asked to attack the limbs, in order to incapacitate and slow them down, eventually killing them.",
        new Requirement(
            [
                "Window 7",
                "Window 8",
                "Window 10"
            ],
            [
                "Intel Core i5-2500K | AMD FX-6350 or equivalent"
            ],
            8,
            [
                "NVIDIA GeForce GTX680/GTX760/GTX970/GTX1060",
                "AMD Radeon R9 280X/R9 380/RX470"
            ],
            40
        ),
        "Electronic Arts"
    ),
    new GameData(
        "g_12536",
        "Hellblade: Senua's Sacrifice",
        "2017-08-07",
        "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg",
        "http://www.hellblade.com/",
        [
            "Singleplayer",
            "Gog Achievements",
            "Full controller support",
            "Atmospheric",
            "Gog Cloud",
            "gog-trading-cards",
            "Story Rich",
            "Third Person",
            "Horror",
            "Fantasy",
            "Female Protagonist",
            "Violent",
            "Action-Adventure",
            "Dark",
            "Hack and Slash",
            "Dark Fantasy",
            "Realistic",
            "Walking Simulator",
            "Blood",
            "Mythology",
            "Psychological",
            "Action",
            "Adventure",
            "Indie"
        ],
        "Mature",
        [
            "https://media.rawg.io/media/screenshots/662/66282cb9d0c743ca5d8cb8a1585c8207.jpg",
            "https://media.rawg.io/media/screenshots/ab2/ab28d353366cb9ed674758a25a3763e7.jpg",
            "https://media.rawg.io/media/screenshots/e43/e4362535f3d105d23315c5780ed67f8b.jpg",
            "https://media.rawg.io/media/screenshots/567/567f1353c4163e59236450ea29136b51.jpg",
            "https://media.rawg.io/media/screenshots/d83/d83116e14bfdfeb89a530334072c3051.jpg",
            "https://media.rawg.io/media/screenshots/261/2616c962157e03b5adae8686427aaa18.jpg"
        ],
        "A dark fantasy game that takes inspiration from Scandinavian and Celtic folklore, Hellblade is set in a gritty barbarian world full of weird wooden structures and creepily masked enemies. The player assumes the role of Senua, a traumatized female warrior from the Pict tribe. She suffers from a growing psychosis after her lover Dillion was brutally murdered by Vikings. Carrying his severed head, Senua sets out to Helheim, the underworld of the dead, to bring her lover's soul back. Her grim and bloody journey mirrors her descent into madness. It becomes increasingly difficult for her (and, thus, the player) to tell fact from fantasy, as she hears voices in her head and sees hallucinations. When not fighting her enemies, Senua has to solve puzzles to move forward. This is where her distorted perception actually comes out handy, enabling her to 'focus' and see what regular people can not. The ghostly voices, recorded using the binaural method to create an eery effect, also help to guide Senua or to warn her about dangers. All of Senua movements, expressions and reactions were recorded through motion capture to make them more realistic and emotional.",
        new Requirement(
            [
                "Windows 7"
            ],
            [
                "Quad Core 2.66GHz Intel or 3.2GHz AMD"
            ],
            4,
            [
                "DirectX 10 compatible or later with 1GB RAM"
            ],
            "10",
            8
        ),
        "Ninja Theory"
    )
];