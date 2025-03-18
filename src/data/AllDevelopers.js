import Developer from '../model/Developer.js';

const allDevelopers = [
  new Developer(
    "d_0",
    "Rockstar Games",
    "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
  ),
  new Developer(
    "d_1",
    "CD PROJEKT RED",
    "https://media.rawg.io/media/screenshots/cf9/cf90097e47a02e91e099eb590c44ae4a.jpg"
  ),
  new Developer(
    "d_2",
    "Electronic Arts",
    "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg"
  ),
  new Developer(
    "d_3",
    "Square Enix",
    "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
  ),
  new Developer(
    "d_4", 
    "Valve", 
    "https://media.rawg.io/media/games/ccc/ccc0d5396e3331d58e5eb58a6a1fa1b7.jpg"
  ),
  new Developer(
    "d_5",
    "Bethesda Softworks",
    "https://media.rawg.io/media/games/157/1570121f5c4d240504f1eae5c3854733.jpg"
  ),
  new Developer(
    "d_6", 
    "2K Games", 
    "https://media.rawg.io/media/games/238/2383a172b4d50a7b44e07980eb7141ea.jpg"
  ),
  new Developer(
    "d_7",
    "Activision Blizzard",
    "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg"
  ),
  new Developer(
    "d_8",
    "Microsoft Studios",
    "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
  ),
  new Developer(
    "d_9",
    "Sony Interactive Entertainment",
    "https://media.rawg.io/media/games/a35/a359074cde22a4b23c54db44a592dc41.jpg"
  ),
  new Developer(
    "d_10", 
    "505 Games", 
    "https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg"
  ),
  new Developer(
    "d_11",
    "Sony Computer Entertainment",
    "https://media.rawg.io/media/games/4b6/4b67558bf04c7211aabeff179271bdd8.jpg"
  ),
  new Developer(
    "d_12", 
    "Capcom", 
    "https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg"
  ),
  new Developer(
    "d_13",
    "Psyonix",
    "https://media.rawg.io/media/screenshots/6da/6dafe3f5e9725623b4591ab7952186df.jpg"
  ),
  new Developer(
    "d_14",
    "Digital Extremes",
    "https://media.rawg.io/media/screenshots/50e/50ef6d315fa6f0a035a4ce421d226674.jpg"
  ),
  new Developer(
    "d_15",
    "Deep Silver",
    "https://media.rawg.io/media/games/b1f/b1f1eeee149ef49c008a2258ee6c0d78.jpg"
  ),
  new Developer(
    "d_16", 
    "Konami", 
    "https://media.rawg.io/media/games/0f1/0f105a3d3ba6225269c4a08b43ecbb73.jpg"
  ),
  new Developer(
    "d_17",
    "Warner Bros. Interactive",
    "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
  ),
  new Developer(
    "d_18",
    "Telltale Games",
    "https://media.rawg.io/media/screenshots/a08/a088fa3ad0e4e0eefd276b587c68e135.jpg"
  ),
  new Developer(
    "d_19",
    "1C-SoftClub",
    "https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg"
  ),
  new Developer(
    "d_20",
    "Feral Interactive",
    "https://media.rawg.io/media/games/214/2140885d34e3a3398b45036e5d870971.jpg"
  ),
  new Developer(
    "d_21",
    "Team Cherry",
    "https://media.rawg.io/media/games/27c/27cd8b7dead05a870f8a514a9a1915ad.jpg"
  ),
  new Developer(
    "d_22",
    "Bandai Namco Entertainment",
    "https://media.rawg.io/media/games/0ca/0cab3cf814d9988277e023687ed3fd4f.jpg"
  ),
  new Developer(
    "d_23",
    "Devolver Digital",
    "https://media.rawg.io/media/games/0b2/0b240149610b8b20eac098b8071f575a.jpg"
  ),
  new Developer(
    "d_24",
    "Red Barrels",
    "https://media.rawg.io/media/screenshots/c5c/c5c5ac554749639eb0b1c67eafa419cd.jpg"
  ),
  new Developer(
    "d_25",
    "Ubisoft Entertainment",
    "https://media.rawg.io/media/games/5e4/5e4bff02098b2b6f824c68286d5da1a6.jpg"
  ),
  new Developer(
    "d_26",
    "Frictional Games",
    "https://media.rawg.io/media/games/a45/a45abc50643f0fa355f5cb24cbb94744.jpg"
  ),
  new Developer(
    "d_27", 
    "THQ", 
    "https://media.rawg.io/media/screenshots/202/202d74b99a0c0148ff0b3e024e6fd243.jpg"
  ),
  new Developer(
    "d_28",
    "Grinding Gear Games",
    "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg"
  ),
  new Developer(
    "d_29",
    "Chucklefish",
    "https://media.rawg.io/media/screenshots/75b/75b9ef03724e9372460535d4587e03ac.jpg"
  ),
  new Developer(
    "d_30", 
    "Bluehole", 
    "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
  ),
  new Developer(
    "d_31",
    "SEGA",
    "https://media.rawg.io/media/screenshots/3f1/3f1c417b405a86ed7d92b903e0fcfd0c.jpg"
  ),
  new Developer(
    "d_32",
    "Ninja Theory",
    "https://media.rawg.io/media/screenshots/015/015988a097b5a0e78b4ecd631e85daba.jpg"
  ),
];

export default allDevelopers;
