import Tag from "../model/Tag.js";
import Image from "../model/Image.js";

const allTags = [
    new Tag("t_0", "Singleplayer", new Image("https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg")),
    new Tag(
        "t_1",
        "Gog Achievements",
        new Image("https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg")
    ),
    new Tag("t_2", "Multiplayer", new Image("https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg")),
    new Tag(
        "t_3",
        "Full controller support",
        new Image("https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg")
    ),
    new Tag("t_4", "Atmospheric", new Image("https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg")),
    new Tag("t_5", "Great Soundtrack", new Image("https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg")),
    new Tag("t_6", "RPG", new Image("https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg")),
    new Tag("t_7", "Co-op", new Image("https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg")),
    new Tag("t_8", "Open World", new Image("https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg")),
    new Tag("t_9", "cooperative", new Image("https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg")),
    new Tag("t_10", "First-Person", new Image("https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg")),
    new Tag("t_11", "Third Person", new Image("https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg")),
    new Tag("t_12", "Funny", new Image("https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg")),
    new Tag("t_13", "Sandbox", new Image("https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg")),
    new Tag("t_14", "Comedy", new Image("https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg")),
    new Tag(
        "t_15",
        "Third-Person Shooter",
        new Image("https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg")
    ),
    new Tag("t_16", "Moddable", new Image("https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg")),
    new Tag("t_17", "Crime", new Image("https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg")),
    new Tag("t_18", "vr mod", new Image("https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg")),
    new Tag("t_19", "Action", new Image("https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg")),
    new Tag("t_20", "Adventure", new Image("https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg")),
    new Tag("t_21", "Story Rich", new Image("https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg")),
    new Tag("t_22", "Fantasy", new Image("https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg")),
    new Tag("t_23", "Action RPG", new Image("https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg")),
    new Tag("t_24", "Dark", new Image("https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg")),
    new Tag("t_25", "Nudity", new Image("https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg")),
    new Tag(
        "t_26",
        "controller support",
        new Image("https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg")
    ),
    new Tag(
        "t_27",
        "Choices Matter",
        new Image("https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg")
    ),
    new Tag("t_28", "Mature", new Image("https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg")),
    new Tag("t_29", "Dark Fantasy", new Image("https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg")),
    new Tag("t_30", "Medieval", new Image("https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg")),
    new Tag("t_31", "Magic", new Image("https://media.rawg.io/media/games/b17/b175178f8842276b8b18b339fe3146a1.jpg")),
    new Tag(
        "t_32",
        "Multiple Endings",
        new Image("https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg")
    ),
    new Tag("t_33", "Gog Cloud", new Image("https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg")),
    new Tag(
        "t_34",
        "gog-trading-cards",
        new Image("https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg")
    ),
    new Tag("t_35", "Sci-fi", new Image("https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg")),
    new Tag("t_36", "FPS", new Image("https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg")),
    new Tag("t_37", "Online Co-Op", new Image("https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg")),
    new Tag(
        "t_38",
        "Female Protagonist",
        new Image("https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg")
    ),
    new Tag("t_39", "Local Co-Op", new Image("https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg")),
    new Tag("t_40", "stats", new Image("https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg")),
    new Tag("t_41", "Gog Workshop", new Image("https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg")),
    new Tag("t_42", "Space", new Image("https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg")),
    new Tag(
        "t_43",
        "Includes level editor",
        new Image("https://media.rawg.io/media/games/c11/c11a0b92b4c28f2e0db489f430142653.jpg")
    ),
    new Tag(
        "t_44",
        "Captions available",
        new Image("https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg")
    ),
    new Tag(
        "t_45",
        "Commentary available",
        new Image("https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg")
    ),
    new Tag("t_46", "Science", new Image("https://media.rawg.io/media/games/64d/64d9e33affb7a9a1df62229576d0bd6b.jpg")),
    new Tag("t_47", "Shooter", new Image("https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg")),
    new Tag("t_48", "Puzzle", new Image("https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg")),
    new Tag("t_49", "Classic", new Image("https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg")),
    new Tag("t_50", "Exploration", new Image("https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg")),
    new Tag("t_51", "Stealth", new Image("https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg")),
    new Tag(
        "t_52",
        "Action-Adventure",
        new Image("https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg")
    ),
    new Tag("t_53", "Retro", new Image("https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg")),
    new Tag("t_54", "Cinematic", new Image("https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg")),
    new Tag(
        "t_55",
        "Quick-Time Events",
        new Image("https://media.rawg.io/media/games/560/56056a71c74f751552c9baedebf8f317.jpg")
    ),
    new Tag("t_56", "Dinosaurs", new Image("https://media.rawg.io/media/screenshots/6e4/6e4fb66651c629ad8a471211b975bdeb.jpg")),
    new Tag("t_57", "Lara Croft", new Image("https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg")),
    new Tag("t_58", "Tactical", new Image("https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg")),
    new Tag("t_59", "PvP", new Image("https://media.rawg.io/media/games/26b/26b27e1da9e3727fcb12e3e4e86c8c19.jpg")),
    new Tag("t_60", "War", new Image("https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg")),
    new Tag(
        "t_61",
        "In-App Purchases",
        new Image("https://media.rawg.io/media/games/539/53911178036df07d518dd492ddc25289.jpg")
    ),
    new Tag("t_62", "Team-Based", new Image("https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg")),
    new Tag("t_63", "Realistic", new Image("https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg")),
    new Tag("t_64", "Fast-Paced", new Image("https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg")),
    new Tag("t_65", "Military", new Image("https://media.rawg.io/media/games/0fa/0fadc446fd1e9ae9e23a32793d9a5406.jpg")),
    new Tag("t_66", "Competitive", new Image("https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg")),
    new Tag(
        "t_67",
        "Valve Anti-Cheat enabled",
        new Image("https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg")
    ),
    new Tag("t_68", "e-sports", new Image("https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg")),
    new Tag("t_69", "Trading", new Image("https://media.rawg.io/media/games/458/4589f56845f867775404f7493810f078.jpg")),
    new Tag(
        "t_70",
        "Partial Controller Support",
        new Image("https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg")
    ),
    new Tag("t_71", "Short", new Image("https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg")),
    new Tag("t_72", "Physics", new Image("https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg")),
    new Tag("t_73", "Dark Humor", new Image("https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg")),
    new Tag(
        "t_74",
        "Includes Source SDK",
        new Image("https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg")
    ),
    new Tag("t_75", "Horror", new Image("https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg")),
    new Tag("t_76", "Gore", new Image("https://media.rawg.io/media/games/4fb/4fb548e4816c84d1d70f1a228fb167cc.jpg")),
    new Tag("t_77", "Survival", new Image("https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg")),
    new Tag("t_78", "Zombies", new Image("https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg")),
    new Tag(
        "t_79",
        "Post-apocalyptic",
        new Image("https://media.rawg.io/media/games/df9/df988191048e92cf86dabd2987c47b62.jpg")
    ),
    new Tag("t_80", "Survival Horror", new Image("https://media.rawg.io/media/games/7a4/7a45e4cdc5b07f316d49cf147b083b27.jpg")),
    new Tag("t_81", "Replay Value", new Image("https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg")),
    new Tag("t_82", "role-playing", new Image("https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg")),
    new Tag(
        "t_83",
        "Character Customization",
        new Image("https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg")
    ),
    new Tag("t_84", "Lore-Rich", new Image("https://media.rawg.io/media/screenshots/f8a/f8ae83f70a0f2631d7123a5caca19ace.jpg")),
    new Tag("t_85", "Dragons", new Image("https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg")),
    new Tag("t_86", "Controller", new Image("https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png")),
    new Tag("t_87", "Dystopian", new Image("https://media.rawg.io/media/games/bcd/bcd9896b7c3b9fa80e5dcb67c961e2be.jpg")),
    new Tag("t_88", "Steampunk", new Image("https://media.rawg.io/media/games/9f1/9f189c639f70f91166df415811a8b525.jpg")),
    new Tag("t_89", "Linear", new Image("https://media.rawg.io/media/games/08a/08aa92e004f13ad2d41127327314c3f9.jpg")),
    new Tag(
        "t_90",
        "Alternate History",
        new Image("https://media.rawg.io/media/games/2a7/2a78d5a02588ba925d87d4c76c7f0802.jpg")
    ),
    new Tag("t_91", "Time Travel", new Image("https://media.rawg.io/media/games/d5e/d5e177d510242bafa6e9e23ecc8158d3.jpg")),
    new Tag("t_92", "Political", new Image("https://media.rawg.io/media/games/8f2/8f2cf5f18de195a2347116cdedceec9b.jpg")),
    new Tag("t_93", "Violent", new Image("https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg")),
    new Tag("t_94", "Historical", new Image("https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg")),
    new Tag("t_95", "Online PvP", new Image("https://media.rawg.io/media/games/370/3703c683968a54f09630dcf03366ea35.jpg")),
    new Tag(
        "t_96",
        "3rd-Person Perspective",
        new Image("https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg")
    ),
    new Tag("t_97", "Blood", new Image("https://media.rawg.io/media/screenshots/ca8/ca840f2a8ebfc74aac1688367dc1f903.jpg")),
    new Tag("t_98", "America", new Image("https://media.rawg.io/media/screenshots/98c/98c25faca7a3e594188e0ae5fa112eed.jpg")),
    new Tag("t_99", "Masterpiece", new Image("https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg")),
    new Tag(
        "t_100",
        "Beautiful",
        new Image("https://media.rawg.io/media/screenshots/291/29135ecd06cd54c4f13a8bcddbba8fba.jpg")
    ),
    new Tag("t_101", "Hunting", new Image("https://media.rawg.io/media/screenshots/73e/73e4d78a55248fc26a4e06726b6bd969.jpg")),
    new Tag("t_102", "Western", new Image("https://media.rawg.io/media/screenshots/dad/dadc0032edd296fe58638f36c348919b.jpg")),
    new Tag(
        "t_103",
        "3rd-person",
        new Image("https://media.rawg.io/media/screenshots/e30/e30b6a334c20ae534c15d3f0d71cad36.jpg")
    ),
    new Tag("t_104", "Futuristic", new Image("https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg")),
    new Tag("t_105", "Memes", new Image("https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg")),
    new Tag("t_106", "Stylized", new Image("https://media.rawg.io/media/games/13a/13a97b75b6e6b999901f6dd6fda47848.jpg")),
    new Tag("t_107", "Loot", new Image("https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg")),
    new Tag("t_108", "Point & Click", new Image("https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg")),
    new Tag("t_109", "Mystery", new Image("https://media.rawg.io/media/games/948/948fe7f00b6cba8472f5ecd07a455077.jpg")),
    new Tag(
        "t_110",
        "Walking Simulator",
        new Image("https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg")
    ),
    new Tag("t_111", "Story", new Image("https://media.rawg.io/media/games/23a/23acbd56da0c30bca0227967a5720c96.jpg")),
    new Tag("t_112", "Episodic", new Image("https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg")),
    new Tag("t_113", "Soundtrack", new Image("https://media.rawg.io/media/games/107/107181af0b03753dbfc16ec91b37bdd3.jpg")),
    new Tag(
        "t_114",
        "Time Manipulation",
        new Image("https://media.rawg.io/media/screenshots/c0e/c0e5a6ab3d7b94abfa689eec8dfd6091.jpg")
    ),
    new Tag("t_115", "student", new Image("https://media.rawg.io/media/screenshots/ff1/ff1e63b665419444b55d7334a2385010.jpg")),
    new Tag("t_116", "strange", new Image("https://media.rawg.io/media/screenshots/1d4/1d42ee97681050baedab12c082bb8b54.jpg")),
    new Tag(
        "t_117",
        "photography",
        new Image("https://media.rawg.io/media/screenshots/c22/c22e3dfc119300f50b7fd0748eb9b41c.jpg")
    ),
    new Tag("t_118", "Aliens", new Image("https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg")),
    new Tag(
        "t_119",
        "Silent Protagonist",
        new Image("https://media.rawg.io/media/screenshots/5ce/5ce17393fdcd1a4356187e388fa21723.jpeg")
    ),
    new Tag("t_120", "Underwater", new Image("https://media.rawg.io/media/games/7df/7dfbdcb58a03fcddc68479454fc1f7de.jpg")),
    new Tag("t_121", "Free to Play", new Image("https://media.rawg.io/media/games/972/972aea3c9eb253e893947bec2d2cfbb9.jpg")),
    new Tag(
        "t_122",
        "Online multiplayer",
        new Image("https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg")
    ),
    new Tag("t_123", "combat", new Image("https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg")),
    new Tag("t_124", "online", new Image("https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg")),
    new Tag("t_125", "MMORPG", new Image("https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg")),
    new Tag("t_126", "PvE", new Image("https://media.rawg.io/media/games/d9e/d9e868382c48ec98c9b23b8fbe6a2045.jpg")),
    new Tag("t_127", "city", new Image("https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg")),
    new Tag("t_128", "console", new Image("https://media.rawg.io/media/games/0af/0afe9e8ace196123d8c7cf22172cec63.jpg")),
    new Tag("t_129", "friends", new Image("https://media.rawg.io/media/screenshots/772/77272915ed66e464986ad6afcdf52407.jpg")),
    new Tag("t_130", "weapons", new Image("https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg")),
    new Tag("t_131", "skill", new Image("https://media.rawg.io/media/screenshots/a54/a549f520260d95fd755786786efe43b2.jpg")),
    new Tag("t_132", "destroy", new Image("https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg")),
    new Tag("t_133", "collect", new Image("https://media.rawg.io/media/games/2d5/2d57e7ffa1e3af2fa34229bd1041461d.jpg")),
    new Tag("t_134", "hunt", new Image("https://media.rawg.io/media/games/a28/a289b31f456f1837fabc2fd2f0a9ed1e.jpg")),
    new Tag("t_135", "gun", new Image("https://media.rawg.io/media/games/909/909f20ae2181edfe413e4b672d712474.jpg")),
    new Tag("t_136", "rain", new Image("https://media.rawg.io/media/screenshots/3ee/3eea6a5902e15c59c8b503d7f8cb07f6.jpg")),
    new Tag("t_137", "enemy", new Image("https://media.rawg.io/media/screenshots/399/399fc6a2a51d4bcad25c9d9d56e94bd3.jpg")),
    new Tag("t_138", "quick", new Image("https://media.rawg.io/media/screenshots/419/4195d67f51f711eee6b2dc1b3390e217.jpg")),
    new Tag("t_139", "darkness", new Image("https://media.rawg.io/media/games/1f2/1f283264816de6f464d7de144530e9b8.jpg")),
    new Tag("t_140", "defender", new Image("https://media.rawg.io/media/screenshots/a03/a03028737c2abdc12aafdc3c4e38fa75.jpg")),
    new Tag(
        "t_141",
        "Massively Multiplayer",
        new Image("https://media.rawg.io/media/games/72e/72e0e063c817e90c696b2da3ea78abaa.jpg")
    ),
    new Tag("t_142", "2D", new Image("https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg")),
    new Tag("t_143", "Difficult", new Image("https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg")),
    new Tag("t_144", "Side Scroller", new Image("https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg")),
    new Tag("t_145", "Surreal", new Image("https://media.rawg.io/media/screenshots/b0a/b0a14be9cf5547d82f079a5e988d0733.jpg")),
    new Tag(
        "t_146",
        "Puzzle-Platformer",
        new Image("https://media.rawg.io/media/screenshots/ddb/ddbcf3f1330e146094b0ce211e33090a.jpg")
    ),
    new Tag(
        "t_147",
        "Minimalist",
        new Image("https://media.rawg.io/media/screenshots/b00/b00b7cc04dd09531b631ea4575696276.jpg")
    ),
    new Tag("t_148", "Indie", new Image("https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg")),
    new Tag("t_149", "Platformer", new Image("https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg")),
    new Tag("t_150", "Hack and Slash", new Image("https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg")),
    new Tag("t_151", "exclusive", new Image("https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg")),
    new Tag("t_152", "Crafting", new Image("https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg")),
    new Tag("t_153", "3D", new Image("https://media.rawg.io/media/games/c3b/c3be1d5f55cb9324c97ccb7aaaf42ad4.jpg")),
    new Tag("t_154", "true exclusive", new Image("https://media.rawg.io/media/games/be2/be239d5eb4d0bf02bf722aff51e694ad.jpg")),
    new Tag(
        "t_155",
        "Emotional",
        new Image("https://media.rawg.io/media/screenshots/750/75092895cb37edc24b83bebf1ebbf4e7.jpg")
    ),
    new Tag(
        "t_156",
        "Mythology",
        new Image("https://media.rawg.io/media/screenshots/d96/d968719f37eaba04920ba2cfe2b7813a.jpg")
    ),
    new Tag(
        "t_157",
        "Souls-like",
        new Image("https://media.rawg.io/media/screenshots/108/108628a1f93b1bceeaf3a2cb0146f103.jpg")
    ),
    new Tag(
        "t_158",
        "Remote Play on TV",
        new Image("https://media.rawg.io/media/games/1d9/1d9fa8e760612fa6a7f309e2f26417ac.jpg")
    ),
    new Tag("t_159", "Remake", new Image("https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg")),
    new Tag("t_160", "Demons", new Image("https://media.rawg.io/media/games/295/295eb868c241e6ad32ac033b8e6a2ede.jpg")),
    new Tag("t_161", "Heist", new Image("https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg")),
    new Tag(
        "t_162",
        "Gun Customization",
        new Image("https://media.rawg.io/media/screenshots/b44/b44e00fd4718f0a22981c370d7855b35.jpg")
    ),
    new Tag(
        "t_163",
        "Cross-Platform Multiplayer",
        new Image("https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg")
    ),
    new Tag("t_164", "Robots", new Image("https://media.rawg.io/media/games/780/7804a1ce365e2c30d51007b910b14acf.jpg")),
    new Tag("t_165", "Cartoony", new Image("https://media.rawg.io/media/games/621/6217d52e35fe5137b3746367827e80e0.jpg")),
    new Tag("t_166", "Cartoon", new Image("https://media.rawg.io/media/games/075/0753492cda7ee3c9bd4a3ca673fd0c8c.jpg")),
    new Tag("t_167", "Class-Based", new Image("https://media.rawg.io/media/games/bff/bff7d82316cddea9541261a045ba008a.jpg")),
    new Tag("t_168", "Drama", new Image("https://media.rawg.io/media/games/278/2784fe67065c5095411f0d4c85205143.jpg")),
    new Tag("t_169", "Experience", new Image("https://media.rawg.io/media/games/bc6/bc6b163403504d0c041253749e233ed3.jpg")),
    new Tag("t_170", "open-world", new Image("https://media.rawg.io/media/games/cb6/cb63a33e16f90fa6f008cc093239dad3.jpg")),
    new Tag(
        "t_171",
        "atmosphere",
        new Image("https://media.rawg.io/media/screenshots/ed4/ed4b8d6d238a5a3e8693fd388e6dd190.jpg")
    ),
    new Tag("t_172", "Satire", new Image("https://media.rawg.io/media/games/c14/c1484e3baaa7a2c048d457c8a55980ef.jpg")),
    new Tag(
        "t_173",
        "first person mod",
        new Image("https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg")
    ),
    new Tag("t_174", "Bowling", new Image("https://media.rawg.io/media/screenshots/82a/82a4ad9e19d738bf2a4c184f3cad2eed.jpg")),
    new Tag("t_175", "Cyberpunk", new Image("https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg")),
    new Tag("t_176", "Sexual Content", new Image("https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg")),
    new Tag("t_177", "Hacking", new Image("https://media.rawg.io/media/games/66b/66b463a0861b07e690fefcbeded4f6f1.jpg")),
    new Tag(
        "t_178",
        "Role Playing Game",
        new Image("https://media.rawg.io/media/games/8ea/8ea1e2850d7568bc9733d546c0ac6ce1.jpg")
    ),
    new Tag("t_179", "immersive", new Image("https://media.rawg.io/media/games/539/5391fa91a2079a5ac0e91de49c512d3a.jpg")),
    new Tag(
        "t_180",
        "Photorealistic",
        new Image("https://media.rawg.io/media/screenshots/907/907d69cf2727bf0a3f89d8184a48c8af.jpg")
    ),
    new Tag("t_181", "Split Screen", new Image("https://media.rawg.io/media/games/07a/07a74470a2618fd71945db0619602baf.jpg")),
    new Tag(
        "t_182",
        "Local Multiplayer",
        new Image("https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg")
    ),
    new Tag("t_183", "4 Player Local", new Image("https://media.rawg.io/media/games/b47/b47da312357f548ceeb3a4d00021cd1d.jpg")),
    new Tag(
        "t_184",
        "4 giocatori divano",
        new Image("https://media.rawg.io/media/screenshots/5d3/5d3e51e02a2e28cc8a543de3d8253942.jpg")
    ),
    new Tag("t_185", "Football", new Image("https://media.rawg.io/media/games/2ed/2ed38a102fe66a0ea98a8e09c660a458.jpg")),
    new Tag("t_186", "Soccer", new Image("https://media.rawg.io/media/screenshots/3a5/3a59c74568a14736d44a1df1660c5282.jpg")),
    new Tag("t_187", "lan party", new Image("https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg")),
    new Tag("t_188", "Sports", new Image("https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg")),
    new Tag("t_189", "Racing", new Image("https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg")),
    new Tag("t_190", "Pixel Graphics", new Image("https://media.rawg.io/media/games/f62/f62eb0901c7017776e0a5c6a94f979d5.jpg")),
    new Tag(
        "t_191",
        "Family Friendly",
        new Image("https://media.rawg.io/media/screenshots/054/054bf49d9e736edfda5aa8e9015faf9b.jpeg")
    ),
    new Tag("t_192", "Building", new Image("https://media.rawg.io/media/games/6bc/6bc79f5bc023b1e6938f6eaf9926f073.jpg")),
    new Tag("t_193", "overlay", new Image("https://media.rawg.io/media/games/00b/00b164224ebaf381104d0b215a37afb3.jpg")),
    new Tag("t_194", "RTS", new Image("https://media.rawg.io/media/games/af7/af7a831001c5c32c46e950cc883b8cb7.jpg")),
    new Tag("t_195", "Tower Defense", new Image("https://media.rawg.io/media/games/417/4176298c1b22ccd338ce3dfc34eb7e28.jpg")),
    new Tag("t_196", "MOBA", new Image("https://media.rawg.io/media/screenshots/b56/b56c8500b4760e23ccc1f42e4f10a642.jpg")),
    new Tag(
        "t_197",
        "SteamVR Collectibles",
        new Image("https://media.rawg.io/media/screenshots/ccd/ccd34c9f511f91edaa03bea681d207ea.jpg")
    ),
    new Tag("t_198", "Parkour", new Image("https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg")),
    new Tag("t_199", "Ninja", new Image("https://media.rawg.io/media/games/a8a/a8a624bbf3e96658fca79a7700de55d7.jpg")),
    new Tag("t_200", "looter shooter", new Image("https://media.rawg.io/media/games/63e/63ee51f2fc8c78ff3a4fa8f60d5898b4.jpg")),
    new Tag("t_201", "3D Vision", new Image("https://media.rawg.io/media/games/907/90757eaa9dc7c5cf7c47bf4960843999.jpg")),
    new Tag(
        "t_202",
        "Based On A Novel",
        new Image("https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg")
    ),
    new Tag(
        "t_203",
        "Benchmark",
        new Image("https://media.rawg.io/media/screenshots/72c/72c82e9730089407f103c840a4f549fa.jpg")
    ),
    new Tag(
        "t_204",
        "Gog Leaderboards",
        new Image("https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg")
    ),
    new Tag("t_205", "Horses", new Image("https://media.rawg.io/media/screenshots/5c8/5c8e51a67ae0273b08675b91eb03fce0.jpg")),
    new Tag("t_206", "Beat 'em up", new Image("https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg")),
    new Tag("t_207", "Detective", new Image("https://media.rawg.io/media/games/0b3/0b34647c42271600399b93d19b10f1aa.jpg")),
    new Tag(
        "t_208",
        "Comic Book",
        new Image("https://media.rawg.io/media/screenshots/a8c/a8cd58ee985ab6d509370bddada91dbd.jpeg")
    ),
    new Tag("t_209", "Superhero", new Image("https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg")),
    new Tag("t_210", "Batman", new Image("https://media.rawg.io/media/screenshots/b83/b8382775bded4811c7492cc5d850683a.jpg")),
    new Tag("t_211", "Visual Novel", new Image("https://media.rawg.io/media/games/67a/67aef58e8ead90609f7adbd20d72a033.jpg")),
    new Tag(
        "t_212",
        "Choose Your Own Adventure",
        new Image("https://media.rawg.io/media/screenshots/e25/e253cc4df0c2604ec2b12cab8b45d58a.jpg")
    ),
    new Tag(
        "t_213",
        "Nonlinear",
        new Image("https://media.rawg.io/media/screenshots/c42/c42590b202e160f16669c6885b79f70f.jpg")
    ),
    new Tag(
        "t_214",
        "Illuminati",
        new Image("https://media.rawg.io/media/screenshots/f5a/f5abab52c4d606551cd5ec3ab709e501.jpg")
    ),
    new Tag("t_215", "Driving", new Image("https://media.rawg.io/media/games/d73/d7364906c530ccc2d89b0b5d8695e03c.jpg")),
    new Tag(
        "t_216",
        "Remote Play on Tablet",
        new Image("https://media.rawg.io/media/screenshots/cf2/cf2c19ed7975c400646b79b3fb9b90c9.jpg")
    ),
    new Tag(
        "t_217",
        "Remote Play on Phone",
        new Image("https://media.rawg.io/media/screenshots/136/1367cd2a8f57605d47c653d41033a42f.jpg")
    ),
    new Tag(
        "t_218",
        "controversial",
        new Image("https://media.rawg.io/media/screenshots/505/505f5662f557085ca816894c12af6669.jpg")
    ),
    new Tag("t_219", "karaihb", new Image("https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg")),
    new Tag("t_220", "Assassin", new Image("https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg")),
    new Tag("t_221", "gog", new Image("https://media.rawg.io/media/screenshots/855/855c0d5a8d48bf38334a097eadb3f087.jpg")),
    new Tag("t_222", "category", new Image("https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg")),
    new Tag(
        "t_223",
        "microtranzations",
        new Image("https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg")
    ),
    new Tag("t_224", "Battle Royale", new Image("https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg")),
    new Tag(
        "t_225",
        "Hero Shooter",
        new Image("https://media.rawg.io/media/screenshots/76f/76ffd557ad4e210808beef4c7f63f93d.jpg")
    ),
    new Tag(
        "t_226",
        "lootboxes",
        new Image("https://media.rawg.io/media/screenshots/92c/92c14790433315bdf43e30ec58f0ed1a.jpg")
    ),
    new Tag(
        "t_227",
        "Philisophical",
        new Image("https://media.rawg.io/media/screenshots/573/573f6403cf6de862ca5b886db8cf449a.jpg")
    ),
    new Tag("t_228", "Cute", new Image("https://media.rawg.io/media/games/c40/c40f9f0a3d1b4601a7a44d230c95f126.jpg")),
    new Tag("t_229", "Metroidvania", new Image("https://media.rawg.io/media/games/95a/95adc7a2135783dfd2204f694200c836.jpg")),
    new Tag("t_230", "Hand-drawn", new Image("https://media.rawg.io/media/games/d2e/d2ee15fda80056efef174da4ca5ae54f.jpg")),
    new Tag("t_231", "Gothic", new Image("https://media.rawg.io/media/screenshots/316/316f5c1d64b1b73dc1d39b6a6e8ce3f0.jpg")),
    new Tag("t_232", "achievements", new Image("https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg")),
    new Tag("t_233", "2.5D", new Image("https://media.rawg.io/media/screenshots/69b/69bb243ea9896ddfc2e051b58e81624d.jpg")),
    new Tag(
        "t_234",
        "Simulation",
        new Image("https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg")
    ),
    new Tag("t_235", "Colorful", new Image("https://media.rawg.io/media/screenshots/46a/46ac84997152eaf4f760257a60099231.jpg")),
    new Tag(
        "t_236",
        "Time Attack",
        new Image("https://media.rawg.io/media/screenshots/c14/c1457bcf823ca4b4d25abeb6c12e2fcd.jpg")
    ),
    new Tag("t_237", "european", new Image("https://media.rawg.io/media/screenshots/d14/d148f8ffc332b1d0f70be9bad91c2171.jpg")),
    new Tag("t_238", "Top-Down", new Image("https://media.rawg.io/media/games/476/4767c380895fd35a4f1b59016dc45967.jpg")),
    new Tag("t_239", "Music", new Image("https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg")),
    new Tag(
        "t_240",
        "Top-Down Shooter",
        new Image("https://media.rawg.io/media/screenshots/4cb/4cbbe312e35374b4dfdbdab98887d447.jpeg")
    ),
    new Tag("t_241", "1980s", new Image("https://media.rawg.io/media/games/af8/af81c1cc5aad59f0ce1b3b7cee207220.jpg")),
    new Tag(
        "t_242",
        "Psychedelic",
        new Image("https://media.rawg.io/media/screenshots/df7/df7314ef7e0ab35865c1584b120bd630.jpeg")
    ),
    new Tag("t_243", "Arcade", new Image("https://media.rawg.io/media/games/a01/a01b34c722ceec784817381eb1824fa5.jpg")),
    new Tag("t_244", "Conspiracy", new Image("https://media.rawg.io/media/games/826/8268937033816c09a50bb5a98e17b33c.jpg")),
    new Tag("t_245", "Transhumanism", new Image("https://media.rawg.io/media/games/a12/a12f806432cb385bc286f0935c49cd14.jpg")),
    new Tag("t_246", "new york", new Image("https://media.rawg.io/media/screenshots/e3c/e3cc9dcd0d4779fcdc08a01d150ea7f9.jpg")),
    new Tag("t_247", "Psychological", new Image("https://media.rawg.io/media/games/8f5/8f5c25901d96e709ea631599106eda1c.jpg")),
    new Tag(
        "t_248",
        "Lovecraftian",
        new Image("https://media.rawg.io/media/screenshots/19a/19a4c2d394a80b423e84900d982df420.jpg")
    ),
    new Tag("t_249", "1990's", new Image("https://media.rawg.io/media/games/d54/d54f0267a042f44c032d8ca264584ecf.jpg")),
    new Tag("t_250", "Narration", new Image("https://media.rawg.io/media/games/bc6/bc6b163403504d0c041253749e233ed3.jpg")),
    new Tag(
        "t_251",
        "Supernatural",
        new Image("https://media.rawg.io/media/screenshots/a1b/a1b8954b78a687083b97d4cd5356f3be.jpg")
    ),
    new Tag("t_252", "Thriller", new Image("https://media.rawg.io/media/games/ba9/ba981ea851b2a85b78d63d9ec53c19e5.jpg")),
    new Tag(
        "t_253",
        "enviroment",
        new Image("https://media.rawg.io/media/screenshots/363/363eac26816e5f26a574415efebbd582.jpg")
    ),
    new Tag(
        "t_254",
        "psycholoical-horror",
        new Image("https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg")
    ),
    new Tag("t_255", "World War II", new Image("https://media.rawg.io/media/games/45b/45b57ed59de4b84effd8f6bc4b7bf515.jpg")),
    new Tag("t_256", "mmo", new Image("https://media.rawg.io/media/games/2fd/2fd1b58116b10cc1f4442bee5593ca7c.jpg")),
    new Tag(
        "t_257",
        "Dungeon Crawler",
        new Image("https://media.rawg.io/media/games/cef/cefedf18016cbab466861eb698daf988.jpg")
    ),
    new Tag(
        "t_258",
        "Inventory Management",
        new Image("https://media.rawg.io/media/screenshots/5f0/5f00e2338ab8fa6c48d05d4a2bb9dc60.jpg")
    ),
    new Tag("t_259", "Fishing", new Image("https://media.rawg.io/media/screenshots/28b/28bec9939d190ba619cad0693ebe304d.jpg")),
    new Tag("t_260", "Relaxing", new Image("https://media.rawg.io/media/screenshots/0f5/0f585fa72f534f62f9e5da051179f5de.jpg")),
    new Tag("t_261", "Dating Sim", new Image("https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg")),
    new Tag(
        "t_262",
        "Shared/Split Screen Co-op",
        new Image("https://media.rawg.io/media/games/3f4/3f43f03406a5ea087352bf32d60e3a0a.jpg")
    ),
    new Tag("t_263", "cloud saves", new Image("https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg")),
    new Tag(
        "t_264",
        "Agriculture",
        new Image("https://media.rawg.io/media/screenshots/bce/bce9bbfd4c49fcc6f65e39ed2efeff07.jpg")
    ),
    new Tag(
        "t_265",
        "co-op multiplayer",
        new Image("https://media.rawg.io/media/games/d22/d22ea1bfb636fbf1a9c235cc304312a8.jpg")
    ),
    new Tag(
        "t_266",
        "Dynamic Narration",
        new Image("https://media.rawg.io/media/games/70a/70a009eae06ac608b9d8274125e68bb4.jpg")
    ),
    new Tag("t_267", "futurism", new Image("https://media.rawg.io/media/games/47c/47c4398d9f910210ecb2114f1f82a2bf.jpg")),
    new Tag("t_268", "Mod", new Image("https://media.rawg.io/media/screenshots/0fd/0fd83a4e2b6824d3edaf6c2be2e168e6.jpg")),
    new Tag(
        "t_269",
        "Animation & Modeling",
        new Image("https://media.rawg.io/media/screenshots/a15/a15d1408f5cd688123c7b8bd528f0130.jpg")
    ),
    new Tag("t_270", "Casual", new Image("https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg")),
    new Tag(
        "t_271",
        "Immersive Sim",
        new Image("https://media.rawg.io/media/screenshots/643/643a3dd6aba644d35f2c6476ce10ef60.jpg")
    ),
    new Tag("t_272", "2D Fighter", new Image("https://media.rawg.io/media/games/297/297a51aa1f0999016d5a35e2e1d6d8ab.jpg")),
    new Tag("t_273", "Fighting", new Image("https://media.rawg.io/media/games/cc5/cc576aa274780702ef93463f5410031e.jpg")),
    new Tag("t_274", "Noir", new Image("https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg")),
    new Tag("t_275", "Investigation", new Image("https://media.rawg.io/media/games/b23/b23e516c7c846435b9e7708a73207b67.jpg")),
    new Tag(
        "t_276",
        "Level Editor",
        new Image("https://media.rawg.io/media/screenshots/d39/d39aeca90fad83dd776730e7c13271d6.jpg")
    ),
    new Tag(
        "t_277",
        "Precision Platformer",
        new Image("https://media.rawg.io/media/games/deb/debed1495adeac69fd5f0be501ecae35.jpg")
    ),
    new Tag("t_278", "Swordplay", new Image("https://media.rawg.io/media/games/bc5/bc53067cffecb71129fcb0b4fbf0e922.jpg")),
    new Tag("t_279", "Turn-Based", new Image("https://media.rawg.io/media/games/8ca/8ca40b562a755d6a0e30d48e6c74b178.jpg")),
    new Tag(
        "t_280",
        "Turn-Based Strategy",
        new Image("https://media.rawg.io/media/screenshots/85c/85c91c5064d2cdd56a949c8008868318.jpg")
    ),
    new Tag("t_281", "Economy", new Image("https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg")),
    new Tag(
        "t_282",
        "Touch-Friendly",
        new Image("https://media.rawg.io/media/screenshots/904/904809185a905c430f6c36f0ebf5353c.jpg")
    ),
    new Tag("t_283", "Grand Strategy", new Image("https://media.rawg.io/media/games/77e/77e8a4a7b377a081aabd0dbf688417e1.jpg")),
    new Tag(
        "t_284",
        "Education",
        new Image("https://media.rawg.io/media/screenshots/18e/18ef77d2a8ed1ddb7f1abf358a3c1ea0.jpg")
    ),
    new Tag("t_285", "4X", new Image("https://media.rawg.io/media/games/72f/72feeda516c44390c7ab218b8b328fda.jpg")),
    new Tag("t_286", "Hex Grid", new Image("https://media.rawg.io/media/games/f95/f95ec06eddda5c5bf206618c49cd3e68.jpg")),
    new Tag("t_287", "Diplomacy", new Image("https://media.rawg.io/media/games/61b/61b069e98f2e901050e687f7699997db.jpg")),
    new Tag("t_288", "Strategy", new Image("https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg")),
    new Tag("t_289", "Base Building", new Image("https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg")),
    new Tag(
        "t_290",
        "Real-Time with Pause",
        new Image("https://media.rawg.io/media/games/c81/c8120bf5faed7309c9812553da54da80.jpg")
    ),
    new Tag(
        "t_291",
        "Real-Time",
        new Image("https://media.rawg.io/media/screenshots/0e6/0e60075818860647a1e6a9f9a8ebfada.jpg")
    ),
    new Tag("t_292", "Tanks", new Image("https://media.rawg.io/media/screenshots/868/868a358e1c734f91cc836a37c92f61d6.jpg")),
    new Tag("t_293", "Pirates", new Image("https://media.rawg.io/media/games/41a/41a648b954d9a750b2595995b113e684.jpg")),
    new Tag("t_294", "Naval", new Image("https://media.rawg.io/media/games/3a9/3a9ea2db24f879e61fe7b824f5888d2a.jpg")),
]

export default allTags;