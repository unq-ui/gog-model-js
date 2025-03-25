# Gog Model JS Documentation

## How to use

```javascript
const gogSystem = initGogSystem();
```

## GogSystem

```javascript
class GogSystem {
  /**
   * @param {Array<Game>} games
   * @param {Array<Developer>} developers
   * @param {Array<Tag>} tags
   * @param {Array<User>} users
   * @param {Array<Cart>} Carts
   */
  constructor(games, developers, tags, users) {
    this.games = games;
    this.developers = developers;
    this.tags = tags;
    this.users = users;
    this.idGenerator = new IdGenerator();
    this.carts = [];
  }

  /**
   * Add a new user to the system.
   *
   * @param {DraftUser} user The user to add.
   * @return {User} The newly created user.
   * @throws {UserException} If the email address is already in use.
   */
  addNewUser(user)

  /**
   * Get a tag by its ID.
   *
   * @param {string} id The ID of the tag.
   * @return {Tag} The tag with the given ID.
   * @throws {NotFoundTag} If the tag with the given ID does not exist.
   */
  getTag(id)

  /**
   * Get a user by its ID.
   *
   * @param {string} id The ID of the user.
   * @return {User} The user with the given ID.
   * @throws {NotFoundUser} If the user with the given ID does not exist.
   */
  getUser(id)

  /**
   * Get a game by its ID.
   *
   * @param {string} id The ID of the game.
   * @return {Game} The game with the given ID.
   * @throws {NotFoundGame} If the game with the given ID does not exist.
   */
  getGame(id)

  /**
   * Get a developer by its ID.
   *
   * @param {string} id The ID of the developer.
   * @return {Developer} The developer with the given ID.
   * @throws {NotFoundDeveloper} If the developer with the given ID does not exist.
   */
  getDeveloper(id)

  /**
   * Get the reviews written by the user with the given ID.
   *
   * @param {string} userId The ID of the user.
   * @return {Array<Review>} The list of reviews written by the user.
   * @throws {NotFoundUser} If the user with the given ID does not exist.
   */
  getUserReviews(userId)

  /**
   * Get a list of recommended games.
   *
   * The recommended games are the games that have the most reviews that are marked as recommended.
   *
   * @return {Array<Game>} A list of recommended games.
   */
  getRecommendedGames()

  /**
   * Get a list of games.
   *
   * @param {number} page The page number.
   * @return {PageInfo<Game>} A list of games.
   * @throws {PageException} If the page number is less than 1.
   */
  getGames(page = 1)

  /**
   * Get a list of games by tag.
   *
   * @param {string} tagId The ID of the tag.
   * @param {number} page The page number.
   * @return {PageInfo<Game>} A list of games.
   * @throws {NotFoundTag} If the tag with the given ID does not exist.
   * @throws {PageException} If the page number is less than 1.
   */
  getGamesByTag(tagId, page = 1)

  /**
   * Get a list of games by developer.
   *
   * @param {string} developerId The ID of the developer.
   * @param {number} page The page number.
   * @return {PageInfo<Game>} A list of games.
   * @throws {NotFoundDeveloper} If the developer with the given ID does not exist.
   * @throws {PageException} If the page number is less than 1.
   */
  getGamesByDeveloper(developerId, page = 1)

  /**
   * Search for games by name.
   *
   * @param {string} name The name of the game.
   * @param {number} page The page number.
   * @return {PageInfo<Game>} A list of games.
   * @throws {PageException} If the page number is less than 1.
   */
  searchGame(name, page = 1)

  /**
   * Search for users by name.
   *
   * @param {string} name The name of the user.
   * @param {number} page The page number.
   * @return {PageInfo<User>} A list of users.
   * @throws {PageException} If the page number is less than 1.
   */
  searchUser(name, page = 1)

  /**
   * Add a review for a game.
   *
   * @param {string} userId The ID of the user who is submitting the review.
   * @param {DraftReview} draftReview The draft review object.
   * @return {Game} The game that was reviewed.
   * @throws {NotFoundUser} If the user with the given ID does not exist.
   * @throws {NotFoundGame} If the game with the given ID does not exist.
   * @throws {ReviewException} If the user does not own the game or if the user has already submitted a review for the game.
   */
  addReview(userId, draftReview)

  /**
   * Add game to cart.
   * 
   * @param {string} userId 
   * @param {string} gameId 
   * @returns {Cart}
   * @throws {PurchaseException} If the user already has the game.
   */
  addGameToCart(userId, gameId)

  /**
   * Remove game to cart.
   * 
   * @param {string} userId 
   * @param {string} gameId 
   * @returns {Cart}
   * @throws {CartException} If the cart is empty.
   * @throws {CartException} If the game is not in the cart.
   */
  removeGameFromCart(userId, gameId)

  /**
   * Get cart.
   * @param {string} userId The ID of the user who is purchasing the game.
   * @return {Cart}
   * @throws {NotFoundUser} If the user with the given ID does not exist.
   */
  getCart(userId)

  /**
   * Purchase.
   *
   * @param {string} userId The ID of the user who is purchasing the game.
   * @param {DraftPurchase} draftPurchase The draft purchase object.
   * @return {User} The user who purchased the game.
   * @throws {NotFoundUser} If the user with the given ID does not exist.
   * @throws {PurchaseException} If the cart is empty.
   * @throws {PurchaseException} If the card is not valid.
   */
  purchase(userId, draftPurchase)

  /**
   * Add or remove a friend.
   *
   * @param {string} userId The ID of the user who is adding or removing the friend.
   * @param {string} friendId The ID of the friend.
   * @return {User} The user who added or removed the friend.
   * @throws {NotFoundUser} If the user or the friend with the given ID does not exist.
   * @throws {UserException} If the user is trying to self-add.
   */
  addOrRemoveFriend(userId, friendId)
}
```

## Model

```javascript
class User {
  constructor(id, email, password, name, image, backgroundImage, games = [], friends = []) {
    this.id = id;                     // string
    this.email = email;               // string
    this.password = password;         // string
    this.name = name;                 // string
    this.image = image;               // string
    this.backgroundImage = backgroundImage; // string
    this.games = games;               // Array of Game objects
    this.friends = friends;           // Array of User objects
  }
}
```

```javascript
class Game {
  constructor(id, name, description, mainImage, multimedia, tags, price, 
              requirement, relatedGames, developer, releaseDate, reviews, esrb, website) {
    this.id = id;                   // string
    this.name = name;               // string
    this.description = description;  // string
    this.mainImage = mainImage;      // Image object
    this.multimedia = multimedia;    // Array of Image objects
    this.tags = tags;               // Array of Tag objects
    this.price = price;             // Price object
    this.requirement = requirement;  // Requirement object
    this.relatedGames = relatedGames; // Array of Game objects
    this.developer = developer;      // Developer object
    this.releaseDate = releaseDate;  // Date object
    this.reviews = reviews;          // Array of Review objects
    this.esrb = esrb;               // ESRB enum value
    this.website = website;          // string
  }
}
```

```javascript
class Tag {
  constructor(id, name, image) {
    this.id = id;       // string
    this.name = name;   // string
    this.image = image; // Image object
  }
}
```

```javascript
class Review {
  constructor(id, user, game, isRecommended, text) {
    this.id = id;               // string
    this.user = user;           // User object
    this.game = game;           // Game object
    this.isRecommended = isRecommended; // boolean
    this.text = text;           // string
  }
}
```

```javascript
class Requirement {
  constructor(os = [], processor = [], memory = 0, graphics = [], directX = "", storage = 0) {
    this.os = os;             // Array of strings
    this.processor = processor; // Array of strings
    this.memory = memory;       // number
    this.graphics = graphics;   // Array of strings
    this.directX = directX;     // string
    this.storage = storage;     // number
  }
}
```

```javascript
class Price {
  constructor(currency, amount) {
    this.currency = currency; // string
    this.amount = amount;     // number
  }
}
```

```javascript
class Image {
  constructor(src) {
    this.src = src; // string
  }
}
```

```javascript
const ESRB = {
  EVERYONE: 'everyone',
  EVERYONE_10_PLUS: 'everyone10plus',
  TEEN: 'teen',
  MATURE_17_PLUS: 'mature17plus',
  ADULTS_ONLY: 'adultsOnly',
  RATING_PENDING: 'ratingPending'
};
```

```javascript
class Developer {
  constructor(id, name, image) {
    this.id = id;       // string
    this.name = name;   // string
    this.image = image; // Image object
  }
}
```

```javascript
class Cart {
  constructor(user) {
    this.user = user;  // User
    this.games = [];  // Array of Game.
  }
}
```

## Pagination

```javascript
class PageInfo {
  constructor(currentPage, list, amountOfElements, amountOfPages) {
    this.currentPage = currentPage;         // number
    this.list = list;                       // Array of any type
    this.amountOfElements = amountOfElements; // number
    this.amountOfPages = amountOfPages;      // number
  }
}

/**
 * Get a paginated list of elements.
 *
 * @param {Array} list The list of elements.
 * @param {number} page The page number.
 * @return {PageInfo} A pagination object for the elements.
 * @throws {PageException} If the page number is less than 1.
 */
function getPage(list, page)
```

## Drafts

```javascript
class DraftReview {
  constructor(gameId, isRecommended, text) {
    this.gameId = gameId;               // string
    this.isRecommended = isRecommended; // boolean
    this.text = text;                   // string
  }
}
```

```javascript
class DraftPurchase {
  constructor(cardNumber, cardHolderName, expirationDate, cvv) {
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
}
```

```javascript
class CardInfo {
  constructor(cardHolderName, number, expirationDate, cvv) {
    this.cardHolderName = cardHolderName; // string
    this.number = number;                 // number
    this.expirationDate = expirationDate; // Date object
    this.cvv = cvv;                       // number
  }
}
```

```javascript
class DraftUser {
  constructor(name, email, password, image, backgroundImage) {
    this.name = name;                     // string
    this.email = email;                   // string
    this.password = password;             // string
    this.image = image;                   // string
    this.backgroundImage = backgroundImage; // string
  }
}
```