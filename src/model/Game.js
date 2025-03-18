class Game {
  constructor(
    id,
    name,
    description,
    mainImage,
    multimedia,
    tags,
    price,
    requirement,
    relatedGames = [],
    developer,
    releaseDate,
    reviews = [],
    esrb,
    website
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.mainImage = mainImage;
    this.multimedia = multimedia;
    this.tags = tags;
    this.price = price;
    this.requirement = requirement;
    this.relatedGames = relatedGames;
    this.developer = developer;
    this.releaseDate = releaseDate;
    this.reviews = reviews;
    this.esrb = esrb;
    this.website = website;
  }
}

const ESRB = {
  EVERYONE: "everyone",
  EVERYONE_10_PLUS: "everyone10plus",
  TEEN: "teen",
  MATURE_17_PLUS: "mature17plus",
  ADULTS_ONLY: "adultsOnly",
  RATING_PENDING: "ratingPending"
};

export { Game, ESRB };