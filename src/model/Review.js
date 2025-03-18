class Review {
  constructor(id, user, game, isRecommended, text) {
    this.id = id;
    this.user = user;
    this.game = game;
    this.isRecommended = isRecommended;
    this.text = text;
  }
}

export default Review;