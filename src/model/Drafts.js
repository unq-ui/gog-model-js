class DraftReview {
  constructor(gameId, isRecommended, text) {
    this.gameId = gameId;
    this.isRecommended = isRecommended;
    this.text = text;
  }
}

class DraftPurchase {
  constructor(cardNumber, cardHolderName, expirationDate, cvv) {
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
}

class CardInfo {
  constructor(cardHolderName, number, expirationDate, cvv) {
    this.cardHolderName = cardHolderName;
    this.number = number;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }
}

class DraftUser {
  constructor(name, email, password, image, backgroundImage) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.image = image;
    this.backgroundImage = backgroundImage;
  }
}

export { DraftReview, DraftPurchase, CardInfo, DraftUser };